import { Metadata } from 'next'
import WildlifeConservationContent from './content'

export const metadata: Metadata = {
  title: 'Wildlife Conservation | Oikos Consultants',
  description: 'Expert wildlife conservation and planning services focused on protecting ecosystems and ensuring species survival through strategic interventions.',
}

export default function WildlifeConservationPage() {
  return <WildlifeConservationContent />
} 