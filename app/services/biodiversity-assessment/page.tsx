import { Metadata } from 'next'
import BiodiversityAssessmentContent from './content'

export const metadata: Metadata = {
  title: 'Biodiversity Assessment | Oikos Consultants',
  description: 'Measure your impact on nature through our comprehensive biodiversity assessment services. Identify risks, opportunities, and pathways toward a nature-positive future.',
}

export default function BiodiversityAssessmentPage() {
  return <BiodiversityAssessmentContent />
} 