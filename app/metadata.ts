import { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Oikos Consultants | Leading Environmental Consulting & Sustainability Solutions in India',
  description: 'Oikos Consultants provides expert environmental consulting services, specializing in biodiversity conservation, BRSR compliance, sustainability solutions, and ecological assessments across India.',
  keywords: 'environmental consulting, sustainability solutions, biodiversity conservation, BRSR compliance, ecological assessment, environmental consultants India, sustainability consulting, environmental impact assessment',
  authors: [{ name: 'Oikos Consultants' }],
  creator: 'Oikos Consultants',
  publisher: 'Oikos Consultants',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://oikosconsultants.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Oikos Consultants - Environmental & Sustainability Solutions',
    description: 'Leading environmental consulting firm in India offering comprehensive sustainability solutions, biodiversity conservation, and BRSR compliance services.',
    url: 'https://oikosconsultants.com',
    siteName: 'Oikos Consultants',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Oikos Consultants - Environmental & Sustainability Solutions',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oikos Consultants - Environmental & Sustainability Experts',
    description: 'Expert environmental consulting services for sustainable development and ecological conservation across India.',
    images: ['/images/twitter-home.jpg'],
    creator: '@OikosConsult',
    site: '@OikosConsult',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
}

export default metadata 