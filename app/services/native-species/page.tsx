import { Metadata } from 'next'
import NativeSpeciesContent from './content'

export const metadata: Metadata = {
  title: 'Native Species Promotion | Oikos Consultants',
  description: 'Expert guidance and services for promoting and conserving native species to enhance your region&apos;s biodiversity.',
}

export default function NativeSpeciesPage() {
  return <NativeSpeciesContent />
} 