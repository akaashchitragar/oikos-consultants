'use client'

import { Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface CalendarButtonProps {
  className?: string
  variant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link' | 'destructive'
  buttonText?: string
}

export default function CalendarButton({ 
  className, 
  variant = 'default',
  buttonText = 'Schedule A Meeting'
}: CalendarButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <Link href="/contact#calendar">
        <Button 
          className={`flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-white transition-colors duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-[#2E7D32] ${className}`}
          variant={variant}
        >
          <Calendar className="h-4 w-4" />
          {buttonText}
        </Button>
      </Link>
    </motion.div>
  )
} 