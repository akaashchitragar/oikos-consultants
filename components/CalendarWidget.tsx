'use client'

import { useEffect, useState } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import { Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

interface CalendarWidgetProps {
  calLink?: string
  className?: string
  buttonText?: string
  buttonVariant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive'
}

export default function CalendarWidget({
  calLink = 'oikos-consultants/schedule-a-meeting',
  className = '',
  buttonText = 'Schedule a Meeting',
  buttonVariant = 'default'
}: CalendarWidgetProps) {
  const [isCalOpen, setIsCalOpen] = useState(false)

  useEffect(() => {
    (async function () {
      const cal = await getCalApi()
      // @ts-ignore - Cal.com types are not fully defined
      cal.on?.('open', () => {
        setIsCalOpen(true)
      })
      // @ts-ignore - Cal.com types are not fully defined
      cal.on?.('close', () => {
        setIsCalOpen(false)
      })
    })()
  }, [])

  return (
    <div className={`cal-widget ${className}`}>
      {/* @ts-ignore - Cal.com types are not fully defined */}
      <Cal
        calLink={calLink}
        style={{ width: '100%', height: '100%', minHeight: '600px', overflow: 'hidden', borderRadius: '12px' }}
        config={{
          // @ts-ignore - Cal.com types are not fully defined
          name: 'Oikos Consultants',
          // @ts-ignore - Cal.com types are not fully defined
          theme: 'light',
          // @ts-ignore - Cal.com types are not fully defined
          hideEventTypeDetails: false,
          // @ts-ignore - Cal.com types are not fully defined
          layout: 'month_view',
          // @ts-ignore - Cal.com types are not fully defined
          styles: {
            branding: {
              brandColor: '#2E7D32',
            },
            enabledDateButton: {
              backgroundColor: '#2E7D32',
            },
            selectedDateButton: {
              backgroundColor: '#1B5E20',
            }
          }
        }}
      />
    </div>
  )
} 