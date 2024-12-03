import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();

    const issueData = {
      fields: {
        project: {
          key: 'SCRUM',
        },
        summary: `New Support Request: ${body.question}`,
        description: {
          type: 'doc',
          version: 1,
          content: [
            {
              type: 'paragraph',
              content: [
                {
                  type: 'text',
                  text: body.message,
                },
              ],
            },
          ],
        },
        issuetype: {
          name: 'Task',
        },
      },
    };

    const response = await fetch('https://towelspecialties.atlassian.net/rest/api/3/issue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(
          'sameerdanish125@gmail.com:ATATT3xFfGF0xnFcTERkKnW4iKuqqDGhosqeDwA9ZFLn8pPRDg4rgSZDBNqv0Q7faQQM1-jSPxXG0GTaJfCGzwgro93e-vf2F8GMoWAMjTJsqSZRHOn3unBjeYRht3S8IZkDNjyQfvwFO7MswuU0mL9z9XTcc86BhN779O4FQsGReeXaCloWJRM=476D399B'
        ).toString('base64')}`,
      },
      body: JSON.stringify(issueData),
    });

    // eslint-disable-next-line no-console
    console.log('Jira API Response Status:', response.status);
    const responseBody = await response.json();

    // eslint-disable-next-line no-console
    console.log('Jira API Response Body:', responseBody);

    if (response.ok) {
      return NextResponse.json(responseBody, { status: 201 });
    } else {
      return NextResponse.json(responseBody, { status: response.status });
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error in API route:', error);

    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
