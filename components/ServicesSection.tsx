'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Settings } from 'lucide-react'

const services = [
  {
    title: 'BRSR Compliance and Reporting',
    badge: 'Compliance',
    image: '/images/services/brsr-compliance.jpg',
    link: '/services/brsr-compliance'
  },
  {
    title: 'Sustainability Audits',
    badge: 'Assessment',
    image: '/images/services/sustainability-audit.jpg',
    link: '/services/sustainability-audits'
  },
  {
    title: 'Biodiversity Assessment',
    badge: 'Research',
    image: '/images/services/biodiversity.jpg',
    link: '/services/biodiversity-assessment'
  },
  {
    title: 'Wildlife Conservation',
    badge: 'Conservation',
    image: '/images/services/wildlife.jpg',
    link: '/services/wildlife-conservation'
  },
  {
    title: 'GHG Inventorisation',
    badge: 'Analysis',
    image: '/images/services/ghg-inventory.jpg',
    link: '/services/ghg-inventory'
  },
  {
    title: 'Ecological Restoration',
    badge: 'Restoration',
    image: '/images/services/ecological-restoration.jpg',
    link: '/services/ecological-restoration'
  },
  {
    title: 'Forest Clearance Services',
    badge: 'Regulatory',
    image: '/images/services/forest-clearance.jpg',
    link: '/services/forest-clearance-services'
  }
]

export default function ServicesSection() {
  return (
    <section className="relative py-24 bg-[#03221C] overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/images/service-pattern.png')`,
          backgroundSize: '1200px auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom left',
          opacity: 1.0,
          transform: 'rotate(180deg)'
        }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <motion.div 
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="inline-block"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B5E20] bg-opacity-10 mb-4 border border-[#4ADE80]/20">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Settings className="w-4 h-4 text-green-400" />
                </motion.div>
                <span className="text-green-400 text-sm font-medium">OUR SERVICES</span>
              </div>
            </motion.div>
            <h2 className="text-5xl font-bold text-white mt-6">
              We Provide <span className="text-green-400">Several Services</span><br />
              That Will Help You
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Expert environmental consulting solutions tailored to your organization&apos;s needs
            </p>
          </motion.div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <Link 
                href={service.link}
                className="group relative overflow-hidden rounded-3xl transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.4)] block"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Enhanced overlay with animation */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#03221C]/90 group-hover:via-black/20 transition-all duration-300" />
                  
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-500/0" />
                  </div>
                </div>
                
                {/* Content Container with enhanced animations */}
                <div className="absolute inset-x-0 bottom-0 p-6 backdrop-blur-sm bg-white/10 border-t border-white/20 transform translate-y-0 group-hover:border-white/30 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4">
                    <div className="transform group-hover:translate-y-[-2px] transition-all duration-300">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                        {service.title}
                      </h3>
                      <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/10 border border-white/20 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300">
                        <span className="text-white/70 text-xs font-medium group-hover:text-white/90">{service.badge}</span>
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-white/10 border border-white/20 group-hover:bg-green-400/20 group-hover:border-green-400/30 group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-white group-hover:text-green-400 transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* View All Services Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5,
              delay: services.length * 0.1,
              ease: "easeOut"
            }}
          >
            <Link 
              href="/services"
              className="group relative overflow-hidden rounded-3xl aspect-square bg-[#03221C] transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 ease-out shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.4)] ring-1 ring-white/20 hover:ring-white/30 block"
            >
              {/* Enhanced glass effect layers */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
              <div className="absolute inset-0 backdrop-blur-[2px] bg-black/5" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              
              {/* Animated decorative elements */}
              <div className="absolute inset-0">
                <div className="absolute top-6 left-6 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-6 right-6 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse delay-700" />
              </div>

              {/* Content container */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 transform group-hover:scale-[1.02] transition-transform duration-300">
                {/* Title with animation */}
                <h3 className="text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-12 transform group-hover:translate-y-[-2px] transition-transform duration-300">
                  View<br />All Services
                </h3>

                {/* Explore More Button with enhanced effects */}
                <div className="group/button relative">
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-sm transform group-hover/button:blur-md transition-all" />
                  <div className="relative flex items-center gap-3 px-6 py-2.5 bg-white/10 backdrop-blur-md rounded-full ring-1 ring-white/20 transform hover:translate-y-[-1px] transition-all group-hover:ring-white/40 group-hover:bg-white/20 overflow-hidden">
                    {/* Shimmer effect container */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer opacity-0 group-hover:opacity-100" />
                    
                    <span className="text-white/90 text-lg group-hover:text-white transition-colors relative z-10">Explore More</span>
                    <div className="p-1.5 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors ring-1 ring-white/10 group-hover:ring-white/30 relative z-10">
                      <ArrowUpRight className="w-4 h-4 text-white/90 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced hover overlay with animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/0 to-green-600/0 group-hover:from-green-600/5 group-hover:to-green-600/10 transition-all duration-500" />
            </Link>

            {/* Add keyframes for shimmer animation */}
            <style jsx global>{`
              @keyframes shimmer {
                0% {
                  transform: translateX(-200%);
                }
                100% {
                  transform: translateX(200%);
                }
              }
              .animate-shimmer {
                animation: shimmer 2s infinite;
              }
            `}</style>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 