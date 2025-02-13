import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Projects | Oikos Consultants',
  description: 'Explore our completed and ongoing environmental consultancy projects across India, showcasing our expertise in biodiversity, conservation, and environmental impact assessment.',
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 