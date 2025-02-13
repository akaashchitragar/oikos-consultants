import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services | Oikos Consultants',
  description: 'Explore our comprehensive range of environmental consulting services including BRSR compliance, sustainability audits, and ecological restoration.',
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 