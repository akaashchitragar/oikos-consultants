'use client'

import { useEffect } from 'react'

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div 
      className="calendly-inline-widget" 
      data-url="https://calendly.com/oikos-consultants/30min?hide_gdpr_banner=1&primary_color=2e7d32"
      style={{ minWidth: '400px', height: '800px' }}
    />
  )
} 