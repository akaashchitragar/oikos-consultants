import { Metadata } from 'next'
import ForestClearanceServicesContent from './content'

export const metadata: Metadata = {
  title: 'Forest Clearance Services | Oikos Consultants',
  description: 'Expert assistance in navigating forest clearance regulations and securing approvals in compliance with MoEF&CC guidelines. We simplify the complex process while ensuring responsible forest management.',
}

export default function ForestClearanceServicesPage() {
  return <ForestClearanceServicesContent />
} 