import { NextResponse } from 'next/server';

// Rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });

    return true;
  }

  const record = rateLimitStore.get(ip);

  if (now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs });

    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;

  return true;
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const forwarded = request.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Validate request method and headers
    if (request.method !== 'POST') {
      return NextResponse.json(
        { message: 'Method not allowed' },
        { status: 405 }
      );
    }

    const contentType = request.headers.get('content-type');

    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { message: 'Invalid content type' },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { question, message, email, timestamp } = body;

    // Basic validation
    if (!question || !message || !email) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Timestamp validation (prevent replay attacks)
    const now = Date.now();

    if (!timestamp || Math.abs(now - timestamp) > 300000) {
      // 5 minutes
      return NextResponse.json({ message: 'Request expired' }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Content length validation
    if (message.length > 5000 || question.length > 500) {
      return NextResponse.json(
        { message: 'Content too long' },
        { status: 400 }
      );
    }

    // Submit to Jira (using the existing endpoint)
    const jiraPayload = {
      fields: [
        { id: 'summary', value: question },
        { id: 'description', value: message },
        { id: 'attachment', value: [] },
        { id: 'email', value: email },
      ],
    };

    const jiraResponse = await fetch(
      'https://jsd-widget.atlassian.com/api/embeddable/13677967-7313-4cd0-befd-204bf2af1f12/request?requestTypeId=1',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'SynergyMSP-Website/1.0',
        },
        body: JSON.stringify(jiraPayload),
      }
    );

    if (!jiraResponse.ok) {
      throw new Error('Failed to submit to support system');
    }

    return NextResponse.json(
      { message: 'Request submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Contact form error:', error);

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
