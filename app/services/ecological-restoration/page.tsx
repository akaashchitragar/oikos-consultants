import { Metadata } from 'next'
import EcologicalRestorationContent from './content'

export const metadata: Metadata = {
  title: 'Ecological Restoration | Oikos Consultants',
  description: 'Revitalize degraded ecosystems, restore biodiversity, and promote ecological balance with our science-driven restoration services. We specialize in habitat restoration, soil and water conservation, and sustainable land management.',
}

export default function EcologicalRestorationPage() {
  return <EcologicalRestorationContent />
} 