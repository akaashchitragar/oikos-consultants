import { Metadata } from 'next'
import GHGInventorisationContent from './content'

export const metadata: Metadata = {
  title: 'GHG Inventorisation | Oikos Consultants',
  description: 'Comprehensive greenhouse gas assessment services for measuring and managing emissions in line with global standards. Identify, quantify, and report emissions to enhance transparency and contribute to a low-carbon future.',
}

export default function GHGInventorisationPage() {
  return <GHGInventorisationContent />
} 