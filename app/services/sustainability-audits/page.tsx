import { Metadata } from 'next'
import SustainabilityAuditsContent from './content'

export const metadata: Metadata = {
  title: 'Sustainability Audits | Oikos Consultants',
  description: 'Expert sustainability audit services for evaluating and optimizing organizational practices, ensuring compliance and improved performance.',
}

export default function SustainabilityAuditsPage() {
  return <SustainabilityAuditsContent />
} 