import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'
import { generateEmailTemplate } from './email-template'

// Initialize SendGrid with API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Create plain text version
    const plainText = `
Name: ${name}
Email: ${email}
Subject: ${subject || 'No subject'}
Message:
${message}
    `

    // Create email data
    const emailData = {
      to: 'info@oikosconsultants.com',
      from: 'noreply@oikosconsultants.com',
      subject: subject ? `New Contact Form: ${subject}` : `New Contact Form Submission from ${name}`,
      text: plainText,
      html: generateEmailTemplate({ name, email, subject, message })
    }

    // Send email
    await sgMail.send(emailData)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
} 