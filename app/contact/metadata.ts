import { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Contact & Schedule Consultation - Oikos Consultants | Environmental Services',
  description: 'Schedule a consultation with Oikos Consultants or visit our office in Hubballi, Karnataka. Connect with our environmental experts via phone, email, or book an online meeting instantly.',
  keywords: 'schedule consultation, book meeting, environmental consulting contact, Oikos Consultants contact, sustainability consulting appointment, Hubballi office, environmental services contact, online scheduling',
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
    canonical: '/contact',
  },
  openGraph: {
    title: 'Schedule a Consultation - Oikos Consultants',
    description: 'Book a meeting with our environmental consulting experts. Visit our office in Hubballi, Karnataka, or schedule an online consultation instantly.',
    images: [
      {
        url: '/images/contact-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Schedule a Consultation with Oikos Consultants',
      },
    ],
    type: 'website',
    locale: 'en_IN',
    siteName: 'Oikos Consultants',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Consultation - Oikos Consultants',
    description: 'Schedule a meeting with our environmental consulting experts. Connect with us online or visit our office.',
    images: ['/images/contact-banner.jpg'],
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