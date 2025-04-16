import { Metadata } from 'next'
import SustainabilityAuditsContent from './content'

export const metadata: Metadata = {
  title: 'Sustainability Audits | Oikos Consultants',
  description: 'Evaluate your organization\'s environmental, social, and governance (ESG) practices with our comprehensive sustainability audits. Identify gaps, ensure regulatory compliance, and develop actionable strategies for lasting positive impact.',
}

export default function SustainabilityAuditsPage() {
  return <SustainabilityAuditsContent />
} 