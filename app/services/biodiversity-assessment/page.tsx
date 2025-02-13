import { Metadata } from 'next'
import BiodiversityAssessmentContent from './content'

export const metadata: Metadata = {
  title: 'Biodiversity Assessment | Oikos Consultants',
  description: 'Comprehensive biodiversity surveys and impact assessments for understanding and protecting local ecosystems.',
}

export default function BiodiversityAssessmentPage() {
  return <BiodiversityAssessmentContent />
} 