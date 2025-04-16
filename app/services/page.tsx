'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Settings, Leaf, Globe, Brain, TreePine, Flower2, Wind, Shield } from 'lucide-react'
import Script from 'next/script'

const services = [
  {
    title: 'BRSR Compliance',
    badge: 'Compliance',
    slug: 'brsr-compliance',
    image: '/images/services/brsr-compliance.jpg',
    icon: <Shield className="w-6 h-6" />,
    color: 'from-emerald-500/20 to-emerald-600/20',
    description: 'Expert guidance in aligning with SEBI mandated Business Responsibility and Sustainability Reporting (BRSR) framework.',
    features: [
      'In-depth BRSR guidelines training',
      'Data collection strategy development',
      'Report drafting and validation',
      'Quality assurance and review',
    ],
  },
  {
    title: 'Sustainability Audits',
    badge: 'Assessment',
    slug: 'sustainability-audits',
    image: '/images/services/sustainability-audit.jpg',
    icon: <Brain className="w-6 h-6" />,
    color: 'from-green-500/20 to-green-600/20',
    description: 'Comprehensive evaluation and optimization of organizational sustainability practices.',
    features: [
      'Environmental performance analysis',
      'Social impact assessment',
      'Governance structure review',
      'Regulatory compliance check',
    ],
  },
  {
    title: 'Biodiversity Assessment',
    badge: 'Research',
    slug: 'biodiversity-assessment',
    image: '/images/services/biodiversity.jpg',
    icon: <Leaf className="w-6 h-6" />,
    color: 'from-lime-500/20 to-lime-600/20',
    description: 'Comprehensive evaluation of ecosystems and biodiversity through detailed surveys.',
    features: [
      'Species inventory analysis',
      'Habitat assessment',
      'Ecological health evaluation',
      'Environmental impact studies',
    ],
  },
  {
    title: 'Wildlife Conservation',
    badge: 'Conservation',
    slug: 'wildlife-conservation',
    image: '/images/services/wildlife.jpg',
    icon: <TreePine className="w-6 h-6" />,
    color: 'from-teal-500/20 to-teal-600/20',
    description: 'Protecting ecosystems and ensuring species survival through strategic interventions.',
    features: [
      'Species population monitoring',
      'Habitat assessment & protection',
      'Wildlife movement tracking',
      'Community engagement programs',
    ],
  },
  {
    title: 'GHG Inventorisation',
    badge: 'Analysis',
    slug: 'ghg-inventorisation',
    image: '/images/services/ghg-inventory.jpg',
    icon: <Globe className="w-6 h-6" />,
    color: 'from-green-500/20 to-green-600/20',
    description: 'Comprehensive assessment and management of organizational GHG emissions.',
    features: [
      'Scope definition & boundaries',
      'Data collection & analysis',
      'Emission calculations',
      'Quality assurance checks',
    ],
  },
  {
    title: 'Ecological Restoration',
    badge: 'Restoration',
    slug: 'ecological-restoration',
    image: '/images/services/ecological-restoration.jpg',
    icon: <Flower2 className="w-6 h-6" />,
    color: 'from-emerald-500/20 to-emerald-600/20',
    description: 'Rehabilitating degraded ecosystems and promoting biodiversity through expert restoration.',
    features: [
      'Site assessment & planning',
      'Restoration strategy design',
      'Invasive species management',
      'Habitat reconstruction',
    ],
  },
  {
    title: 'Native Species Promotion',
    badge: 'Conservation',
    slug: 'native-species',
    image: '/images/services/native-species.jpg',
    icon: <Wind className="w-6 h-6" />,
    color: 'from-teal-500/20 to-teal-600/20',
    description: 'Supporting the promotion and conservation of native species through targeted strategies.',
    features: [
      'Species assessment',
      'Nursery development',
      'Sapling supply',
      'Ecological integration',
    ],
  },
  {
    title: 'Forest Clearance Services',
    badge: 'Regulatory',
    slug: 'forest-clearance-services',
    image: '/images/services/forest-clearance.jpg',
    icon: <TreePine className="w-6 h-6" />,
    color: 'from-green-500/20 to-green-600/20',
    description: 'Simplifying the complex process of obtaining forest clearances in compliance with MoEF&CC guidelines.',
    features: [
      'Forest clearance application preparation',
      'Site survey & mapping',
      'Environmental impact studies',
      'Compensatory afforestation planning',
    ],
  },
]

// Add animation keyframes using Framer Motion
const floatingAnimation = {
  slow: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  medium: {
    y: [-8, 8, -8],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  fast: {
    y: [-6, 6, -6],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Add Schema.org JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Oikos Consultants',
  url: 'https://oikosconsultants.com',
  logo: 'https://oikosconsultants.com/images/logo.png',
  description: 'Leading environmental consulting firm specializing in sustainability solutions and ecological services.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Environmental Consulting Services',
    itemListElement: services.map((service, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: 'Oikos Consultants'
        },
        serviceType: service.badge
      },
      position: index + 1
    }))
  }
}

export default function ServicesPage() {
  return (
    <>
      <Script
        id="schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#03221C]">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#FCFCFC]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32]/10 via-[#2E7D32]/5 to-transparent" />
          
          {/* Enhanced Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-[#2E7D32]/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#2E7D32]/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-[#2E7D32]/5 rounded-full blur-[80px] animate-pulse delay-500" />
          </div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1B5E20] bg-opacity-10 mb-4 border border-[#4ADE80]/20 shadow-sm hover:shadow-md hover:bg-[#1B5E20]/20 hover:border-[#4ADE80]/30 transition-all duration-300 group cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Settings className="w-3.5 h-3.5 text-[#2E7D32] transition-transform duration-300 group-hover:scale-110" />
                </motion.div>
                <span className="text-[#2E7D32] text-sm font-medium group-hover:translate-x-0.5 transition-all duration-300">Our Services</span>
              </motion.div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative"
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1C1B] tracking-tight leading-[1.1]">
                    <span className="block mb-3">Comprehensive</span>
                    <span className="relative inline-block text-[#2E7D32] px-4">
                      <span className="relative z-10">Environmental</span>
                      <div className="absolute inset-0 bg-[#2E7D32]/10 rounded-2xl transform -rotate-1"></div>
                    </span>
                    <span className="block mt-3">Solutions</span>
                  </h1>
                </motion.div>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg md:text-xl text-[#2C302E]/80 max-w-2xl mx-auto leading-relaxed font-light mt-6"
                >
                  Expert services tailored to help organizations achieve their sustainability goals and make a positive impact on our planet.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-16 md:py-20 relative overflow-hidden">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0">
            {/* Large Decorative Elements */}
            <div className="absolute inset-0 opacity-[0.07]">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 -left-12 w-96 h-96"
              >
                <TreePine className="w-full h-full text-[#A8C6A1]" />
              </motion.div>
              <motion.div
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-12 -right-12 w-96 h-96"
              >
                <TreePine className="w-full h-full text-[#A8C6A1]" />
              </motion.div>
            </div>

            {/* Floating Elements - Left Side */}
            <div className="absolute left-0 inset-y-0 w-1/3">
              <motion.div animate="slow" variants={floatingAnimation} className="absolute top-12 left-12">
                <Leaf className="w-8 h-8 text-[#A8C6A1] opacity-20" />
              </motion.div>
              <motion.div animate="medium" variants={floatingAnimation} className="absolute top-1/4 left-24">
                <TreePine className="w-12 h-12 text-[#A8C6A1] opacity-15" />
              </motion.div>
              <motion.div animate="slow" variants={floatingAnimation} className="absolute top-1/2 left-16">
                <Wind className="w-10 h-10 text-[#A8C6A1] opacity-20" />
              </motion.div>
              <motion.div animate="fast" variants={floatingAnimation} className="absolute bottom-1/4 left-20">
                <Flower2 className="w-6 h-6 text-[#A8C6A1] opacity-15" />
              </motion.div>
              <motion.div animate="medium" variants={floatingAnimation} className="absolute bottom-16 left-32">
                <Shield className="w-8 h-8 text-[#A8C6A1] opacity-20" />
              </motion.div>
              <motion.div animate="fast" variants={floatingAnimation} className="absolute top-1/3 left-8">
                <Brain className="w-10 h-10 text-[#A8C6A1] opacity-15" />
              </motion.div>
            </div>

            {/* Floating Elements - Center */}
            <div className="absolute left-1/3 right-1/3 inset-y-0">
              <motion.div animate="medium" variants={floatingAnimation} className="absolute top-16 left-1/2 -translate-x-1/2">
                <Globe className="w-10 h-10 text-[#A8C6A1] opacity-20" />
              </motion.div>
              <motion.div animate="slow" variants={floatingAnimation} className="absolute top-1/3 left-1/4">
                <Leaf className="w-8 h-8 text-[#A8C6A1] opacity-15" />
              </motion.div>
              <motion.div animate="medium" variants={floatingAnimation} className="absolute bottom-1/3 right-1/4">
                <Brain className="w-12 h-12 text-[#A8C6A1] opacity-20" />
              </motion.div>
              <motion.div animate="fast" variants={floatingAnimation} className="absolute bottom-24 left-1/2">
                <Shield className="w-8 h-8 text-[#A8C6A1] opacity-15" />
              </motion.div>
              <motion.div animate="slow" variants={floatingAnimation} className="absolute top-1/4 right-1/3">
                <TreePine className="w-10 h-10 text-[#A8C6A1] opacity-20" />
              </motion.div>
              <motion.div animate="medium" variants={floatingAnimation} className="absolute top-2/3 left-1/3">
                <Flower2 className="w-8 h-8 text-[#A8C6A1] opacity-15" />
              </motion.div>
            </div>

            {/* Floating Elements - Right Side */}
            <div className="absolute right-0 inset-y-0 w-1/3">
              <motion.div animate="fast" variants={floatingAnimation} className="absolute top-20 right-16">
                <TreePine className="w-10 h-10 text-[#A8C6A1] opacity-20" />
              </motion.div>
              <motion.div animate="medium" variants={floatingAnimation} className="absolute top-1/3 right-24">
                <Leaf className="w-8 h-8 text-[#A8C6A1] opacity-15" />
              </motion.div>
              <motion.div animate="slow" variants={floatingAnimation} className="absolute bottom-1/2 right-12">
                <Wind className="w-12 h-12 text-[#A8C6A1] opacity-20" />
              </motion.div>
              <motion.div animate="fast" variants={floatingAnimation} className="absolute bottom-32 right-20">
                <Flower2 className="w-6 h-6 text-[#A8C6A1] opacity-15" />
              </motion.div>
              <motion.div animate="medium" variants={floatingAnimation} className="absolute top-1/4 right-8">
                <Globe className="w-9 h-9 text-[#A8C6A1] opacity-20" />
              </motion.div>
            </div>

            {/* Additional Scattered Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div 
                className="absolute top-1/4 left-1/2 w-3 h-3 bg-[#A8C6A1] rounded-full opacity-30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.15, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-[#A8C6A1] rounded-full opacity-20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.1, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div 
                className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-[#A8C6A1] rounded-full opacity-25"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.25, 0.15, 0.25],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              />
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,198,161,0.05)_0%,transparent_50%)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#03221C] via-transparent to-[#03221C]" />
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link 
                    href={`/services/${service.slug}`}
                    className="group block h-full"
                  >
                    <div className="relative h-full bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#2E7D32]/20 hover:border-[#2E7D32]/40 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                      {/* Image Container */}
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70" />
                        
                        {/* Badge */}
                        <div className="absolute top-4 left-4">
                          <div className={`px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-sm border border-[#2E7D32]/20`}>
                            <div className="flex items-center gap-1.5">
                              <div className="text-[#2E7D32]">
                                {service.icon}
                              </div>
                              <span className="text-[#2E7D32] text-xs font-medium">{service.badge}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-4 bg-white/10 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold text-white group-hover:text-[#4ADE80] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-sm text-white/90 line-clamp-2">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-2">
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-white/80">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#4ADE80]/60" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* Learn More Button */}
                        <div className="pt-4">
                          <div className="inline-flex items-center gap-1.5 text-[#4ADE80] text-sm font-medium group/btn">
                            Learn More
                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                          </div>
                        </div>
                      </div>

                      {/* Hover Gradient Overlay */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${service.color} mix-blend-soft-light transition-opacity duration-500 pointer-events-none`} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 