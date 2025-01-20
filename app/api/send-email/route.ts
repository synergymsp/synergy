import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { email, question, message } = await request.json();

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP_HOST,
      port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
      secure: Number(process.env.NEXT_PUBLIC_SMTP_PORT) === 465,
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS,
      },
    });

    // Email content for the user
    const userMailOptions = {
      from: `"Synergy Team" <${process.env.NEXT_PUBLIC_SMTP_USER}>`,
      to: email,
      subject: `Regarding: ${question}`,
      html: `
        <p>Hello,</p>
        <p>Thank you for reaching out to us with your question about "${question}".</p>
        <p>We have received the following message from you:</p>
        <blockquote>${message}</blockquote>
        <p>Our team is currently reviewing your query and will get back to you shortly.</p>
        <p>If you have further questions, feel free to reply to this email.</p>
        <p>Best wishes,<br>Synergy Team</p>
        <footer>© 2025 Synergy. All rights reserved.</footer>
      `,
    };

    // Email content for the company
    const companyMailOptions = {
      from: `"Synergy Team" <${process.env.NEXT_PUBLIC_SMTP_USER}>`,
      to: 'request@synergymsp.net',
      subject: `New Inquiry: ${question}`,
      html: `
        <p>Hello Synergy Team,</p>
        <p>You have received a new inquiry with the following details:</p>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Question:</strong> ${question}</p>
        <p><strong>Message:</strong></p>
        <blockquote>${message}</blockquote>
        <p>Please review and respond to the user's inquiry at your earliest convenience.</p>
        <footer>© 2025 Synergy. All rights reserved.</footer>
      `,
    };

    // Send email to the user
    await transporter.sendMail(userMailOptions);

    // Send email to the company
    await transporter.sendMail(companyMailOptions);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending emails:', error);

    return NextResponse.json(
      { message: 'Failed to send emails' },
      { status: 500 }
    );
  }
}
