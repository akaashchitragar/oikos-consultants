'use client'

import ServiceScheduleButton from '@/components/ServiceScheduleButton'

export default function TestCalendarPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-3xl font-bold">Test Calendar Buttons</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">BRSR Compliance</h2>
          <ServiceScheduleButton serviceName="brsr-compliance-and-reporting" />
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Sustainability Audits</h2>
          <ServiceScheduleButton serviceName="sustainability-audits" />
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Biodiversity Assessment</h2>
          <ServiceScheduleButton serviceName="biodiversity-assessment-surveys" />
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Wildlife Conservation</h2>
          <ServiceScheduleButton serviceName="wildlife-conservation-and-planning" />
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">GHG Inventorisation</h2>
          <ServiceScheduleButton serviceName="greenhouse-gas-ghg-inventorisation" />
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Ecological Restoration</h2>
          <ServiceScheduleButton serviceName="ecological-restoration-projects" />
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Native Species</h2>
          <ServiceScheduleButton serviceName="promotion-of-native-species" />
        </div>
        
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">General Meeting</h2>
          <ServiceScheduleButton serviceName="schedule-a-meeting" />
        </div>
      </div>
    </div>
  )
} 