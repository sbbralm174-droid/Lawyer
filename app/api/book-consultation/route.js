import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const body = await request.json()
    const {
      attorney,
      type,
      date,
      time,
      mode,
      name,
      email,
      phone,
      caseType,
      caseDetails,
      documents
    } = body

    // Generate booking ID
    const bookingId = `ML-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

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

    // Email to admin/attorney
    await transporter.sendMail({
      from: `"Mason Legal Booking" <${process.env.SMTP_FROM}>`,
      to: process.env.BOOKING_EMAIL,
      subject: `New Consultation Booking: ${caseType} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B3D91;">New Consultation Booking</h2>
          <p><strong>Booking ID:</strong> ${bookingId}</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0F1724; margin-top: 0;">Booking Details</h3>
            <table style="width: 100%;">
              <tr>
                <td style="padding: 8px 0;"><strong>Attorney:</strong></td>
                <td>Attorney ${attorney}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Type:</strong></td>
                <td>${type}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Date & Time:</strong></td>
                <td>${date} at ${time}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Mode:</strong></td>
                <td>${mode === 'video' ? 'Video Consultation' : 'In-Person Meeting'}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0F1724; margin-top: 0;">Client Information</h3>
            <table style="width: 100%;">
              <tr>
                <td style="padding: 8px 0;"><strong>Name:</strong></td>
                <td>${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Email:</strong></td>
                <td>${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Phone:</strong></td>
                <td>${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Case Type:</strong></td>
                <td>${caseType}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0F1724; margin-top: 0;">Case Details</h3>
            <p>${caseDetails.replace(/\n/g, '<br>')}</p>
            ${documents.length > 0 ? `
              <p><strong>Documents uploaded:</strong> ${documents.length} file(s)</p>
            ` : ''}
          </div>
          
          <div style="background: #0B3D91; color: white; padding: 15px; border-radius: 8px; margin-top: 30px;">
            <p style="margin: 0;">
              <strong>Action Required:</strong> Confirm booking and send calendar invite
            </p>
          </div>
        </div>
      `,
    })

    // Confirmation email to client
    await transporter.sendMail({
      from: `"Mason Legal" <${process.env.SMTP_FROM}>`,
      to: email,
      subject: 'Your Consultation Has Been Booked - Mason Legal',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B3D91;">Consultation Confirmation</h2>
          <p>Dear ${name},</p>
          
          <p>Thank you for booking a consultation with Mason Legal. Your appointment has been scheduled.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0F1724; margin-top: 0;">Appointment Details</h3>
            <table style="width: 100%;">
              <tr>
                <td style="padding: 8px 0;"><strong>Booking ID:</strong></td>
                <td><strong>${bookingId}</strong></td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Date:</strong></td>
                <td>${new Date(date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Time:</strong></td>
                <td>${time}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Type:</strong></td>
                <td>${mode === 'video' ? 'Video Consultation' : 'In-Person Meeting'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Attorney:</strong></td>
                <td>To be assigned based on availability</td>
              </tr>
            </table>
          </div>
          
          ${mode === 'video' ? `
            <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #0369a1; margin-top: 0;">Video Consultation Instructions</h4>
              <ul>
                <li>Zoom link will be sent 24 hours before your appointment</li>
                <li>Test your audio and video beforehand</li>
                <li>Find a quiet, private location for the call</li>
                <li>Have your documents ready for reference</li>
              </ul>
            </div>
          ` : `
            <div style="background: #e0f2fe; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h4 style="color: #0369a1; margin-top: 0;">In-Person Meeting Instructions</h4>
              <p><strong>Location:</strong> Mason Legal, 123 Justice Avenue, Suite 500, New York, NY 10001</p>
              <ul>
                <li>Free parking available in adjacent garage</li>
                <li>Arrive 10 minutes early for check-in</li>
                <li>Bring identification and any relevant documents</li>
                <li>Wheelchair accessible entrance available</li>
              </ul>
            </div>
          `}
          
          <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #0369a1; margin-top: 0;">Next Steps</h4>
            <ol>
              <li>Our team will confirm your appointment within 24 hours</li>
              <li>You'll receive a calendar invite with all details</li>
              <li>Prepare any questions or documents for discussion</li>
              <li>We'll send a reminder 24 hours before your appointment</li>
            </ol>
          </div>
          
          <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="color: #92400e; margin-top: 0;">Cancellation Policy</h4>
            <p>Please notify us at least 24 hours in advance if you need to reschedule or cancel.</p>
          </div>
          
          <p>If you have any questions, please contact us at (555) 123-4567 or reply to this email.</p>
          
          <p>Best regards,<br><strong>The Mason Legal Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          <p style="color: #64748b; font-size: 12px;">
            Mason Legal | 123 Justice Avenue, Suite 500, New York, NY 10001<br>
            Phone: (555) 123-4567 | Email: contact@masonlegal.com<br>
            This email is confidential and protected by attorney-client privilege.
          </p>
        </div>
      `,
    })

    // In production, you would also:
    // 1. Save to database (Supabase, MongoDB, etc.)
    // 2. Create calendar event (Google Calendar API, Calendly, etc.)
    // 3. Send SMS notification (Twilio, etc.)
    // 4. Add to CRM (HubSpot, Salesforce, etc.)

    return NextResponse.json({
      success: true,
      bookingId,
      message: 'Consultation booked successfully',
    })

  } catch (error) {
    console.error('Booking error:', error)
    return NextResponse.json(
      { error: 'Failed to book consultation' },
      { status: 500 }
    )
  }
}