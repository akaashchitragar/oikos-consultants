interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export function generateEmailTemplate(data: ContactFormData): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', system-ui, -apple-system, sans-serif; line-height: 1.6; background-color: #F8FAF9;">
  <table width="100%" cellpadding="0" cellspacing="0" style="min-width:100%;">
    <tr>
      <td width="100%" style="min-width:100%;padding:32px 20px;background-color:#F8FAF9;">
        <!-- Pre-header -->
        <div style="display:none;font-size:1px;color:#F8FAF9;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
          New message from ${data.name} - ${data.subject || 'Contact Form Submission'}
        </div>

        <table width="100%" cellpadding="0" cellspacing="0" style="min-width:100%;max-width:600px;margin:0 auto;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 6px rgba(0, 0, 0, 0.05);">
          <!-- Header -->
          <tr>
            <td align="center" style="padding:48px 20px;background:linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);">
              <h1 style="margin:0;color:#00A651;font-size:32px;font-weight:600;letter-spacing:-0.5px;">Oikos Consultants</h1>
              <p style="margin:12px 0 0;color:#2E7D32;font-size:16px;font-weight:500;">Environmental Consulting Services</p>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding:40px 30px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="min-width:100%;margin-bottom:32px;">
                <tr>
                  <td>
                    <h2 style="color:#00A651;margin:0 0 8px;font-size:24px;font-weight:600;">New Message Received</h2>
                    <p style="margin:0;color:#6B7280;font-size:16px;">You have received a new message through your website's contact form.</p>
                  </td>
                </tr>
              </table>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="min-width:100%;">
                <tr>
                  <td style="padding:20px 24px;background-color:#F8FAF9;border-radius:12px;margin-bottom:24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #E8F5E9;">
                          <strong style="display:block;color:#1F2937;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">From</strong>
                          <p style="margin:0;color:#374151;font-size:16px;font-weight:500;">${data.name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #E8F5E9;">
                          <strong style="display:block;color:#1F2937;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Email</strong>
                          <p style="margin:0;color:#374151;font-size:16px;">
                            <a href="mailto:${data.email}" style="color:#00A651;text-decoration:none;font-weight:500;">${data.email}</a>
                          </p>
                        </td>
                      </tr>
                      ${data.subject ? `
                      <tr>
                        <td style="padding:12px 0;border-bottom:1px solid #E8F5E9;">
                          <strong style="display:block;color:#1F2937;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Subject</strong>
                          <p style="margin:0;color:#374151;font-size:16px;font-weight:500;">${data.subject}</p>
                        </td>
                      </tr>
                      ` : ''}
                      <tr>
                        <td style="padding:12px 0;">
                          <strong style="display:block;color:#1F2937;font-size:13px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Message</strong>
                          <div style="margin:8px 0 0;padding:16px;background-color:#ffffff;border-radius:8px;border:1px solid #E8F5E9;">
                            <p style="margin:0;color:#374151;font-size:16px;line-height:1.8;white-space:pre-wrap;">${data.message.replace(/\n/g, '<br>')}</p>
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              
              <div style="margin-top:32px;padding:24px;background-color:#F8FAF9;border-radius:12px;border:1px solid #E8F5E9;">
                <p style="margin:0;color:#6B7280;font-size:14px;line-height:1.6;">
                  To respond to this message, you can either:
                </p>
                <ul style="margin:12px 0 0;padding-left:24px;color:#6B7280;font-size:14px;line-height:1.6;">
                  <li>Respond directly to the sender's email (your reply will reach ${data.name})</li>
                  <li>Click the email address above to compose a new message</li>
                </ul>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding:32px;background:linear-gradient(135deg, #F8FAF9 0%, #E8F5E9 100%);text-align:center;">
              <p style="margin:0;color:#6B7280;font-size:14px;">© ${new Date().getFullYear()} Oikos Consultants</p>
              <p style="margin:8px 0 0;color:#00A651;font-size:14px;font-weight:500;">Making a difference, naturally.</p>
              <p style="margin:24px 0 0;color:#6B7280;font-size:13px;">
                This is an automated message from your website's contact form.<br>
                Please do not reply to this email address.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
} 