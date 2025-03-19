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
  sgMail.setApiKey(apiKey)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    console.log('Contact form submission:', { name, email, subject })

    // Validate input
    if (!name || !email || !message) {
      console.error('Validation error: missing required fields', { name: !!name, email: !!email, message: !!message })
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Check if SendGrid API key is available
    if (!apiKey) {
      console.error('SendGrid API key is not configured')
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
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
    const fromEmail = process.env.SENDGRID_VERIFIED_SENDER || 'info@oikosconsultants.com'

    // Verify that sender email is configured
    if (!fromEmail) {
      console.error('SENDGRID_VERIFIED_SENDER is not configured')
      return NextResponse.json(
        { error: 'Email sender is not configured' },
        { status: 500 }
      )
    }

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
      
      if (response && response[0] && response[0].statusCode) {
        if (response[0].statusCode >= 200 && response[0].statusCode < 300) {
          return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
          )
        } else {
          console.error('Unexpected status code from SendGrid:', response[0].statusCode)
          return NextResponse.json(
            { error: `Unexpected status from email service: ${response[0].statusCode}` },
            { status: 500 }
          )
        }
      } else {
        console.error('Invalid response format from SendGrid')
        return NextResponse.json(
          { error: 'Invalid response from email service' },
          { status: 500 }
        )
      }
    } catch (sendGridError: any) {
      console.error('SendGrid error details:', JSON.stringify({
        message: sendGridError.message,
        code: sendGridError.code,
        response: sendGridError.response?.body || 'No response body'
      }))
      
      // Providing more specific error messages based on common SendGrid errors
      let errorMessage = 'Failed to send email via SendGrid'
      let statusCode = 500
      
      if (sendGridError.code === 401) {
        errorMessage = 'Authentication error: Invalid SendGrid API key'
      } else if (sendGridError.code === 403) {
        errorMessage = 'Authorization error: Sender email not verified or API key permissions issue'
      } else if (sendGridError.response?.body?.errors) {
        const errors = sendGridError.response.body.errors
        errorMessage = `SendGrid error: ${errors.map((e: any) => e.message).join(', ')}`
      }
      
      return NextResponse.json(
        { error: errorMessage, details: sendGridError.message },
        { status: statusCode }
      )
    }
  } catch (error: any) {
    console.error('General error sending email:', error.message, error.stack)
    return NextResponse.json(
      { error: 'Failed to process contact form submission' },
      { status: 500 }
    )
  }
} 