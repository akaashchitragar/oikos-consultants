import { Metadata } from 'next'
import BRSRComplianceContent from './content'

export const metadata: Metadata = {
  title: 'BRSR Compliance & Reporting | Oikos Consultants',
  description: 'Meet SEBI\'s Business Responsibility and Sustainability Reporting requirements with strategic insight. Enhance transparency, accountability, and long-term business resilience through effective ESG disclosure.',
}

export default function BRSRCompliancePage() {
  return <BRSRComplianceContent />
} 