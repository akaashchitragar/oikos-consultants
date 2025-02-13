import { Metadata } from 'next'
import BRSRComplianceContent from './content'

export const metadata: Metadata = {
  title: 'BRSR Compliance | Oikos Consultants',
  description: 'Expert guidance in aligning with SEBI mandated Business Responsibility and Sustainability Reporting (BRSR) framework through comprehensive training and implementation support.',
}

export default function BRSRCompliancePage() {
  return <BRSRComplianceContent />
} 