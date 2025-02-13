'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  service: {
    title: string
    description: string
    image: string
    tag: string
    features: string[]
    link: string
  }
  isExpanded: boolean
  onExpand: () => void
  index: number
}

export default function ServiceCard({ service, isExpanded, onExpand, index }: ServiceCardProps) {
  return (
    <motion.div
      layout
      onClick={onExpand}
      className={`bg-white rounded-3xl overflow-hidden cursor-pointer ${
        isExpanded ? 'min-w-[800px]' : 'min-w-[400px]'
      } snap-start group`}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={isExpanded ? {} : { scale: 1.02 }}
    >
      <motion.div layout className="relative h-full">
        <div className={`relative ${isExpanded ? 'h-80' : 'h-64'} transition-all duration-500`}>
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-[#2E7D32]">
              {service.tag}
            </span>
          </div>
        </div>
        
        <motion.div layout className="p-8 relative">
          <motion.h3 layout className="text-2xl font-semibold mb-4 text-[#1A1C1B] group-hover:text-[#2E7D32] transition-colors">
            {service.title}
          </motion.h3>
          
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <p className="text-[#2C302E] leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-[#1A1C1B]">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-[#2C302E]">
                        <div className="w-2 h-2 rounded-full bg-[#2E7D32] mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[#2E7D32] font-medium group/link bg-[#F8FAF9] px-6 py-3 rounded-full hover:bg-[#2E7D32]/10 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <p className="text-[#2C302E] mb-6 line-clamp-2">
                  {service.description}
                </p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center gap-2 text-[#2E7D32] font-medium group/link"
                >
                  View Service
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  )
} 