import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'
import { generateEmailTemplate } from './email-template'

// Initialize SendGrid with API key
const apiKey = process.env.SENDGRID_API_KEY || ''
if (!apiKey) {
  console.error('SENDGRID_API_KEY is not defined in environment variables')
} else {
  // Log a masked version of the API key for debugging
  console.log('SendGrid API key found:', apiKey.substring(0, 3) + '...' + apiKey.substring(apiKey.length - 5))
}
sgMail.setApiKey(apiKey)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    console.log('Contact form submission:', { name, email, subject })

    // Validate input
    if (!name || !email || !message) {
      console.error('Validation error: missing required fields')
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Create plain text version
    const plainText = `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'No subject'}
Message:
${message}
    `

    // Get recipient from environment variables
    const toEmail = process.env.CONTACT_EMAIL || 'info@oikosconsultants.com'
    const fromEmail = process.env.SENDGRID_VERIFIED_SENDER || 'noreply@oikosconsultants.com'

    // Create email data
    const emailData = {
      to: toEmail,
      from: fromEmail,
      subject: subject ? `New Contact Form: ${subject}` : `New Contact Form Submission from ${name}`,
      text: plainText,
      html: generateEmailTemplate({ name, email, phone, subject, message })
    }

    console.log('Attempting to send email to:', toEmail, 'from:', fromEmail)

    // Send email
    try {
      const response = await sgMail.send(emailData)
      console.log('SendGrid response:', response[0].statusCode, response[0].headers)
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      )
    } catch (sendGridError: any) {
      console.error('SendGrid error details:', JSON.stringify({
        message: sendGridError.message,
        code: sendGridError.code,
        response: sendGridError.response?.body || 'No response body'
      }))
      return NextResponse.json(
        { error: 'Failed to send email via SendGrid', details: sendGridError.message },
        { status: 500 }
      )
    }
  } catch (error: any) {
    console.error('General error sending email:', error.message)
    return NextResponse.json(
      { error: 'Failed to process contact form submission' },
      { status: 500 }
    )
  }
} 