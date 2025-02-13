# Oikos Consultants Website

## Overview

Oikos Consultants is a leading environmental consulting firm specializing in sustainability solutions, biodiversity conservation, and ecological services. Our modern, Next.js-powered website showcases our comprehensive range of environmental services, from BRSR compliance to ecological restoration projects. With seamless Calendly integration, clients can easily schedule consultations with our expert team. We are committed to promoting sustainable practices and helping organizations achieve their environmental goals while ensuring regulatory compliance.

## Our Services

Oikos Consultants specializes in environmental consulting and sustainability services:

- BRSR Compliance and Reporting
- Sustainability Audits
- Biodiversity Assessment & Surveys
- Wildlife Conservation and Planning
- Greenhouse Gas (GHG) Inventorisation
- Ecological Restoration Projects
- Promotion of Native Species

## Tech Stack

- Next.js 14+
- Tailwind CSS
- shadcn/ui
- react-calendly

## Color Theme

Our color palette reflects our commitment to environmental sustainability and professionalism:

```css
:root {
  /* Primary Colors */
  --primary-green: #2E7D32;     /* Deep Forest Green - Main brand color */
  --primary-blue: #1B5E20;      /* Emerald Green - Call to actions */
  
  /* Secondary Colors */
  --accent-sage: #A8C6A1;       /* Sage Green - Subtle accents */
  --accent-leaf: #4CAF50;       /* Leaf Green - Success states */
  
  /* Neutral Colors */
  --neutral-100: #FFFFFF;       /* Pure White - Background */
  --neutral-200: #F8FAF9;       /* Off White - Card backgrounds */
  --neutral-300: #E8F5E9;       /* Pale Green - Hover states */
  --neutral-700: #2C302E;       /* Deep Gray - Body text */
  --neutral-900: #1A1C1B;       /* Almost Black - Headings */
  
  /* UI States */
  --success: #43A047;           /* Success messages */
  --warning: #FFA000;           /* Warning messages */
  --error: #D32F2F;            /* Error states */
  --info: #0288D1;             /* Info messages */
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #2E7D32 0%, #1B5E20 100%);
  --gradient-accent: linear-gradient(135deg, #A8C6A1 0%, #4CAF50 100%);
}
```

This carefully selected color palette embodies:

- Forest and ocean tones that represent our environmental focus
- Professional blues for trust and reliability
- Natural greens for sustainability and growth
- Clean neutrals for readability and modern design
- Purposeful accent colors for clear user interface states

## Prerequisites

- Node.js 18.x or higher
- npm/yarn
- Basic knowledge of React and Next.js

## Installation

```bash
# Clone the repository
git clone https://github.com/chitragarakaash/Oikos.git

# Navigate to project directory
cd oikos-consultants

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```text
Oikos/
├── app/
│   ├── page.tsx                 # Home page
│   ├── about/page.tsx           # About page
│   ├── services/page.tsx        # Services page
│   ├── contact/page.tsx         # Contact page
│   └── book/page.tsx            # Calendly booking page
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── BookingWidget.tsx
├── public/
│   └── images/
└── styles/
    └── globals.css
```

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

Build the project:

```bash
npm run build
```

Deploy to your CentOS server:

```bash
# Copy build files to server
scp -r .next/* user@205.147.111.116:/var/www/oikosconsultants/

# Restart Nginx
sudo systemctl restart nginx
```

## Server Configuration

- CentOS v7.9.2009 STANDARD
- Domain: oikosconsultants.com
- IP: 205.147.111.116

## Features

- Modern, responsive design
- SEO optimized
- Fast page loads with static generation
- Calendly integration for consultation booking
- Service showcase
- Contact forms
- Mobile-friendly interface

## Environment Variables

Create a `.env.local` file in the root directory:

```text
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/oikosconsultants/30min
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email [akash@webart4u.com](mailto:akash@webart4u.com) or create an issue in the repository.

## Authors

- Akash Chitragar
- Contact: [akash@webart4u.com](mailto:akash@webart4u.com)

## Acknowledgments

- Next.js team for the amazing framework
- shadcn/ui for beautiful components
- Calendly for scheduling integration
