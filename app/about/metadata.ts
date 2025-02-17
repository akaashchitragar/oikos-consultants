import { Metadata } from 'next'

const metadata: Metadata = {
  title: 'About Us - Oikos Consultants | Environmental Excellence & Innovation',
  description: 'Learn about Oikos Consultants, our expert team, mission, and commitment to environmental excellence. Leading the way in sustainability and conservation.',
  openGraph: {
    title: 'About Oikos Consultants - Environmental Excellence & Innovation',
    description: 'Discover our expert team and mission in environmental consulting. Leading the way in sustainability solutions and conservation.',
    images: [
      {
        url: '/images/about-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Oikos Consultants Team',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Oikos Consultants - Environmental Excellence',
    description: 'Meet our expert team and learn about our mission in environmental consulting and conservation.',
    images: ['/images/about-banner.jpg'],
  },
}

export default metadata 