import { Metadata } from 'next'

const metadata: Metadata = {
  title: 'Our Projects - Oikos Consultants | Environmental Impact Across India',
  description: 'Explore our diverse portfolio of environmental consulting projects across India, including biodiversity conservation, wildlife management, and ecological assessments.',
  keywords: 'environmental projects, biodiversity conservation, wildlife management, ecological assessment, environmental consulting projects, India environmental projects',
  openGraph: {
    title: 'Environmental Projects Portfolio - Oikos Consultants',
    description: 'Discover our impactful environmental consulting projects across India. From wildlife conservation to ecological assessments, see how we\'re making a difference.',
    images: [
      {
        url: '/images/projects/projects-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Oikos Consultants Projects Map',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Environmental Projects - Oikos Consultants',
    description: 'Explore our portfolio of environmental consulting projects across India. Making a sustainable impact through expert solutions.',
    images: ['/images/projects/projects-banner.jpg'],
  },
  alternates: {
    canonical: '/projects',
  },
}

export default metadata 