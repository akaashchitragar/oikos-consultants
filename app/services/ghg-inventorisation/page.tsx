import { Metadata } from 'next'
import GHGInventorisationContent from './content'

export const metadata: Metadata = {
  title: 'GHG Inventorisation | Oikos Consultants',
  description: 'Comprehensive greenhouse gas emissions assessment and management services for organizations committed to climate action.',
}

export default function GHGInventorisationPage() {
  return <GHGInventorisationContent />
} 