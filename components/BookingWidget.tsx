interface BookingWidgetProps {
  className?: string
}

export default function BookingWidget({ className = '' }: BookingWidgetProps) {
  return (
    <div className={`aspect-video w-full ${className}`}>
      <iframe
        src={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/oikosconsultants/30min'}
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  )
} 