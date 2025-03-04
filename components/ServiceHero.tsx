'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import CalendarButton from '@/components/CalendarButton'
import { ReactNode } from 'react'

interface ServiceHeroProps {
  title: string
  description: string
  imageSrc: string
  actionButton?: ReactNode
}

export default function ServiceHero({ title, description, imageSrc, actionButton }: ServiceHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Link href="/services" className="inline-flex items-center text-white hover:text-emerald-400 transition-all duration-300 mb-6 hover:translate-x-[-4px] group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:transform group-hover:translate-x-[-4px]" />
          Back to Services
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            {description}
          </p>
          
          {/* Action Button */}
          {actionButton || (
            <CalendarButton 
              className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transform transition-all duration-300 hover:translate-y-[-2px]"
            />
          )}
        </motion.div>
      </div>
    </section>
  )
} 