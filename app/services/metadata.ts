import { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Our Services - Oikos Consultants | Environmental & Sustainability Solutions',
  description: 'Explore our comprehensive environmental consulting services including BRSR compliance, sustainability audits, biodiversity assessment, wildlife conservation, and ecological restoration.',
  keywords: 'BRSR compliance, sustainability audits, biodiversity assessment, wildlife conservation, GHG inventorisation, ecological restoration, native species promotion',
  openGraph: {
    title: 'Environmental & Sustainability Services - Oikos Consultants',
    description: 'Expert environmental consulting services for sustainable business practices. From BRSR compliance to ecological restoration.',
    images: [
      {
        url: '/images/services/service-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Oikos Consultants Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Environmental & Sustainability Services - Oikos Consultants',
    description: 'Expert environmental consulting services for sustainable business practices. Specializing in BRSR compliance and ecological solutions.',
    images: ['/images/services/service-banner.jpg'],
  },
  alternates: {
    canonical: '/services',
  },
}

export default metadata 