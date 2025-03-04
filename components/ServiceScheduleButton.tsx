'use client'

import ServiceCalendarButton from '@/components/ServiceCalendarButton'

interface ServiceScheduleButtonProps {
  serviceName: 'brsr-compliance-and-reporting' | 
               'sustainability-audits' | 
               'biodiversity-assessment-surveys' | 
               'wildlife-conservation-and-planning' | 
               'greenhouse-gas-ghg-inventorisation' | 
               'ecological-restoration-projects' | 
               'promotion-of-native-species' |
               'schedule-a-meeting'
  className?: string
}

export default function ServiceScheduleButton({ serviceName, className }: ServiceScheduleButtonProps) {
  const calLink = `oikos-consultants/${serviceName}`
  
  // Map service names to button text
  const buttonTextMap: Record<string, string> = {
    'brsr-compliance-and-reporting': 'Schedule BRSR Consultation',
    'sustainability-audits': 'Schedule Audit Consultation',
    'biodiversity-assessment-surveys': 'Schedule Assessment Consultation',
    'wildlife-conservation-and-planning': 'Schedule Conservation Consultation',
    'greenhouse-gas-ghg-inventorisation': 'Schedule GHG Consultation',
    'ecological-restoration-projects': 'Schedule Restoration Consultation',
    'promotion-of-native-species': 'Schedule Native Species Consultation',
    'schedule-a-meeting': 'Schedule A Meeting'
  }
  
  return (
    <ServiceCalendarButton 
      calLink={calLink}
      buttonText={buttonTextMap[serviceName] || 'Schedule A Meeting'}
      className={className}
    />
  )
} 