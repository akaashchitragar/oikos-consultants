import { Metadata } from 'next'
import WildlifeConservationContent from './content'

export const metadata: Metadata = {
  title: 'Wildlife Conservation | Oikos Consultants',
  description: 'Protecting biodiversity for the future through wildlife conservation. We identify key habitats, assess impacts, and develop strategies to create wildlife-friendly landscapes that support thriving ecosystems.',
}

export default function WildlifeConservationPage() {
  return <WildlifeConservationContent />
} 