interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
  phone?: string;
}

export function generateEmailTemplate(data: ContactFormData): string {
  const currentYear = new Date().getFullYear();
  const formattedDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', system-ui, -apple-system, sans-serif; line-height: 1.6; background-color: #F8FAF9;">
  <table width="100%" cellpadding="0" cellspacing="0" style="min-width:100%;">
    <tr>
      <td width="100%" style="min-width:100%;padding:40px 20px;background-color:#F8FAF9;">
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
          
          <!-- Timestamp -->
          <tr>
            <td style="padding:24px 40px 0;">
              <p style="margin:0;color:#6B7280;font-size:14px;text-align:right;">
                Received on ${formattedDate}
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding:32px 40px;">
              <!-- Sender Info Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;background-color:#F8FAF9;border-radius:12px;overflow:hidden;">
                <tr>
                  <td style="padding:24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>
                          <div style="display:inline-block;width:48px;height:48px;background-color:#2E7D32;border-radius:24px;text-align:center;line-height:48px;font-size:20px;font-weight:600;color:#ffffff;margin-right:16px;">
                            ${data.name.charAt(0).toUpperCase()}
                          </div>
                          <div style="display:inline-block;vertical-align:middle;">
                            <h2 style="margin:0;color:#1F2937;font-size:18px;font-weight:600;">${data.name}</h2>
                            <p style="margin:4px 0 0;color:#4B5563;font-size:14px;">
                              <a href="mailto:${data.email}" style="color:#2E7D32;text-decoration:none;font-weight:500;">${data.email}</a>
                            </p>
                            ${data.phone ? `
                            <p style="margin:4px 0 0;color:#4B5563;font-size:14px;">
                              <a href="tel:${data.phone}" style="color:#2E7D32;text-decoration:none;font-weight:500;">${data.phone}</a>
                            </p>
                            ` : ''}
                          </div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message Content -->
              <table width="100%" cellpadding="0" cellspacing="0">
                ${data.subject ? `
                <tr>
                  <td style="padding-bottom:24px;">
                    <h3 style="margin:0 0 8px;color:#1F2937;font-size:14px;text-transform:uppercase;letter-spacing:0.1em;">Subject</h3>
                    <p style="margin:0;color:#1F2937;font-size:16px;font-weight:500;">${data.subject}</p>
                  </td>
                </tr>
                ` : ''}
                <tr>
                  <td>
                    <h3 style="margin:0 0 8px;color:#1F2937;font-size:14px;text-transform:uppercase;letter-spacing:0.1em;">Message</h3>
                    <div style="margin:0;padding:24px;background-color:#F8FAF9;border-radius:12px;border:1px solid #E8F5E9;">
                      <p style="margin:0;color:#1F2937;font-size:16px;line-height:1.8;white-space:pre-wrap;">${data.message.replace(/\n/g, '<br>')}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Action Button -->
          <tr>
            <td style="padding:0 40px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <a href="mailto:${data.email}" style="display:inline-block;padding:12px 24px;background:linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%);color:#ffffff;text-decoration:none;font-weight:500;font-size:14px;border-radius:8px;">Reply to ${data.name}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Help Box -->
          <tr>
            <td style="padding:0 40px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8FAF9;border-radius:12px;border:1px solid #E8F5E9;">
                <tr>
                  <td style="padding:24px;">
                    <h4 style="margin:0 0 12px;color:#1F2937;font-size:16px;font-weight:600;">Quick Actions</h4>
                    <ul style="margin:0;padding-left:24px;color:#4B5563;font-size:14px;line-height:1.6;">
                      <li style="margin-bottom:8px;">Reply directly to this email to start a conversation</li>
                      <li style="margin-bottom:0;">Click the sender's email address to compose a new message</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding:32px 40px;background:linear-gradient(135deg, #F8FAF9 0%, #E8F5E9 100%);text-align:center;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center">
                    <p style="margin:0;color:#2E7D32;font-size:14px;font-weight:600;">Oikos Consultants</p>
                    <p style="margin:8px 0;color:#4B5563;font-size:14px;">Making a difference, naturally.</p>
                    <div style="margin:16px 0;height:1px;background:linear-gradient(to right, transparent, #C8E6C9, transparent);"></div>
                    <p style="margin:0;color:#6B7280;font-size:12px;">
                      © ${currentYear} Oikos Consultants. All rights reserved.<br>
                      #27, Nehru Nagar, Gokul Road, Hubli, Karnataka 580030
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <!-- Email Footer Note -->
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:24px auto 0;text-align:center;">
          <tr>
            <td style="color:#6B7280;font-size:12px;line-height:1.5;">
              This is an automated message from your website's contact form.<br>
              Please do not reply to this email address.
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