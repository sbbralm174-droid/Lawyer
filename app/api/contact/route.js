import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, caseType, preferredDate, message } = body

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email to admin
    await transporter.sendMail({
      from: `"Mason Legal Website" <${process.env.SMTP_FROM}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Consultation Request: ${caseType}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Case Type:</strong> ${caseType}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>Received: ${new Date().toLocaleString()}</p>
      `,
    })

    // Confirmation email to user
    await transporter.sendMail({
      from: `"Mason Legal" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: 'Your Consultation Request - Mason Legal',
      html: `
        <h2>Thank You for Contacting Mason Legal</h2>
        <p>Dear ${name},</p>
        <p>We have received your consultation request and will review your case details.</p>
        <p><strong>Next Steps:</strong></p>
        <ol>
          <li>Our team will contact you within 24 hours to schedule your consultation</li>
          <li>Prepare any relevant documents for our discussion</li>
          <li>We'll provide an overview of how we can assist you</li>
        </ol>
        <p><strong>Your Case Type:</strong> ${caseType}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate || 'To be scheduled'}</p>
        <p>If you have immediate questions, please call us at (555) 123-4567.</p>
        <p>Best regards,<br>The Mason Legal Team</p>
      `,
    })

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}