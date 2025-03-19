import { NextResponse } from 'next/server'
import sgMail from '@sendgrid/mail'

export async function GET(request: Request) {
  try {
    const apiKey = process.env.SENDGRID_API_KEY || ''
    const fromEmail = process.env.SENDGRID_VERIFIED_SENDER || ''
    const toEmail = process.env.CONTACT_EMAIL || ''
    
    // Environment validation
    const validationResults = {
      apiKeyExists: !!apiKey,
      apiKeyMasked: apiKey ? `${apiKey.substring(0, 3)}...${apiKey.substring(apiKey.length - 5)}` : 'NOT SET',
      fromEmailExists: !!fromEmail,
      fromEmail: fromEmail || 'NOT SET',
      toEmailExists: !!toEmail,
      toEmail: toEmail || 'NOT SET',
      baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'NOT SET',
      nodeEnv: process.env.NODE_ENV || 'NOT SET'
    }

    // Return environment validation without trying to send
    const urlParams = new URL(request.url).searchParams
    if (urlParams.get('validate') === 'true') {
      return NextResponse.json({ 
        message: 'SendGrid environment validation',
        results: validationResults
      })
    }

    // Ensure API key is set
    if (!apiKey) {
      return NextResponse.json({ 
        error: 'SENDGRID_API_KEY is not defined', 
        results: validationResults 
      }, { status: 500 })
    }

    if (!fromEmail) {
      return NextResponse.json({ 
        error: 'SENDGRID_VERIFIED_SENDER is not defined', 
        results: validationResults 
      }, { status: 500 })
    }

    if (!toEmail) {
      return NextResponse.json({ 
        error: 'CONTACT_EMAIL is not defined', 
        results: validationResults 
      }, { status: 500 })
    }

    // Initialize SendGrid
    sgMail.setApiKey(apiKey)

    // Create test email
    const emailData = {
      to: toEmail,
      from: fromEmail,
      subject: 'SendGrid Test Email from Oikos Consultants',
      text: 'This is a test email to verify SendGrid integration is working correctly.',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #2E7D32;">SendGrid Test Email</h2>
          <p>This is a test email to verify SendGrid integration is working correctly.</p>
          <p>If you're receiving this, your SendGrid configuration is working!</p>
          <p style="margin-top: 30px; color: #6B7280; font-size: 12px;">Sent from Oikos Consultants website</p>
        </div>
      `
    }

    // Send test email
    try {
      const response = await sgMail.send(emailData)
      return NextResponse.json({ 
        message: 'Test email sent successfully',
        statusCode: response[0].statusCode,
        headers: response[0].headers,
        environment: validationResults
      })
    } catch (sendGridError: any) {
      return NextResponse.json({ 
        error: 'Failed to send test email',
        message: sendGridError.message,
        code: sendGridError.code,
        response: sendGridError.response?.body || 'No response body',
        environment: validationResults
      }, { status: 500 })
    }
  } catch (error: any) {
    return NextResponse.json({ 
      error: 'General error in test route',
      message: error.message 
    }, { status: 500 })
  }
} 