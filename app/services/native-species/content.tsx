'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Leaf, Sprout, TreePine, Bird, Flower2, ClipboardCheck, Trees, ThermometerSun, Target, Clock, Shield, Sprout as SproutIcon, Workflow, Mountain, Flower, CloudSun, Wind } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ServiceHero from '@/components/ServiceHero'
import ServiceScheduleButton from '@/components/ServiceScheduleButton'

export default function NativeSpeciesContent() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <ServiceHero 
        title="Promotion of Native Species"
        description="Preserving and promoting indigenous plant and animal species for ecological balance and biodiversity"
        imageSrc="/images/services/native-species.jpg"
        actionButton={
          <ServiceScheduleButton 
            serviceName="promotion-of-native-species" 
            className="mt-6"
          />
        }
      />

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Promoting Native Species Conservation
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We support the promotion and conservation of native species through targeted strategies that enhance biodiversity and maintain ecological balance. Our comprehensive approach combines scientific expertise with practical implementation, ensuring the preservation of indigenous flora and fauna for future generations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  {
                    icon: <TreePine className="h-8 w-8 text-emerald-700" />,
                    title: "Species Assessment",
                    description: "Comprehensive inventory and assessment of native species in their natural habitats",
                    bgColor: "bg-emerald-50",
                    hoverBg: "hover:bg-emerald-100",
                    iconColor: "text-emerald-700"
                  },
                  {
                    icon: <Bird className="h-8 w-8 text-blue-700" />,
                    title: "Nursery Development",
                    description: "Expert propagation of native plants and nursery establishment services",
                    bgColor: "bg-blue-50",
                    hoverBg: "hover:bg-blue-100",
                    iconColor: "text-blue-700"
                  },
                  {
                    icon: <Sprout className="h-8 w-8 text-teal-700" />,
                    title: "Sapling Supply",
                    description: "Supply of native trees and shrubs tailored to specific forest types and agro-climatic zones",
                    bgColor: "bg-teal-50",
                    hoverBg: "hover:bg-teal-100",
                    iconColor: "text-teal-700"
                  },
                  {
                    icon: <Flower2 className="h-8 w-8 text-purple-700" />,
                    title: "Ecological Integration",
                    description: "Strategic selection and placement for optimal growth and ecosystem compatibility",
                    bgColor: "bg-purple-50",
                    hoverBg: "hover:bg-purple-100",
                    iconColor: "text-purple-700"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`p-6 ${item.bgColor} rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${item.hoverBg}`}
                  >
                    <div className={`transform transition-transform duration-300 hover:scale-110 ${item.iconColor}`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mt-4 mb-2 transition-colors duration-300">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Benefits & Process */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-emerald-50 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:bg-emerald-100/50"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Specialized Services
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      text: "Native species inventory and detailed ecological assessment",
                      icon: <ClipboardCheck className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Professional nursery development and management",
                      icon: <Trees className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Native plant propagation and cultivation expertise",
                      icon: <Sprout className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Climate-appropriate species selection and matching",
                      icon: <ThermometerSun className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Sustainable ecosystem development strategies",
                      icon: <Target className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Long-term conservation planning and implementation",
                      icon: <Clock className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                      {item.icon}
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="border border-gray-200 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:border-emerald-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Environmental Impact
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      text: "Maintained ecological integrity",
                      icon: <Shield className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Enhanced biodiversity preservation",
                      icon: <SproutIcon className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Sustainable ecosystem development",
                      icon: <Workflow className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Improved habitat restoration",
                      icon: <Mountain className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Local species conservation",
                      icon: <Flower className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Climate resilience enhancement",
                      icon: <CloudSun className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    }
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start transform transition-all duration-300 hover:translate-x-2">
                      {benefit.icon}
                      <span className="text-gray-700">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Animation Keyframes */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(3deg); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        .delay-150 { animation-delay: 1.5s; }
        .delay-200 { animation-delay: 2s; }
        .delay-300 { animation-delay: 3s; }
        .delay-400 { animation-delay: 4s; }
        .delay-450 { animation-delay: 4.5s; }
      `}</style>
    </main>
  )
} 