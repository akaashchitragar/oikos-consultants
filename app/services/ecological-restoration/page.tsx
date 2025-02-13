import { Metadata } from 'next'
import EcologicalRestorationContent from './content'

export const metadata: Metadata = {
  title: 'Ecological Restoration | Oikos Consultants',
  description: 'Expert ecological restoration services to revitalize and rehabilitate degraded ecosystems and landscapes.',
}

export default function EcologicalRestorationPage() {
  return <EcologicalRestorationContent />
} 