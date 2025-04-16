'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Leaf,
  Sprout,
  TreePine, 
  Mountain,
  Droplets,
  Fish,
  Bird,
  Microscope,
  Map,
  Shovel,
  Ruler,
  FlowerIcon,
  Database,
  BookOpen,
  BarChart4,
  CheckCircle2,
  Users,
  Workflow,
  Globe,
  Milestone,
  Calendar,
  ClipboardCheck
} from 'lucide-react'
import ServiceHero from '@/components/ServiceHero'
import ServiceScheduleButton from '@/components/ServiceScheduleButton'

export default function EcologicalRestorationContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section - Keeping as is */}
      <ServiceHero 
        title="Ecological Restoration"
        description="Revitalizing ecosystems through science-driven approaches"
        imageSrc="/images/services/ecological-restoration.jpg"
        actionButton={
          <ServiceScheduleButton 
            serviceName="ecological-restoration" 
            className="mt-6"
          />
        }
      />

      {/* Introduction Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-100/30 rounded-bl-[200px]"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-teal-50/40 rounded-tr-[300px]"></div>
          <svg className="absolute -left-16 top-1/4 w-64 h-64 text-green-100 opacity-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M55.1,-69C70.6,-55.8,82.1,-37,85.2,-17.5C88.3,2.1,83.1,22.5,71.3,36.1C59.6,49.8,41.2,56.7,22.7,64.8C4.1,72.9,-14.5,82.3,-33.3,79.8C-52.1,77.2,-71.1,62.7,-80.4,43C-89.7,23.3,-89.3,-1.5,-81.2,-23.1C-73.2,-44.7,-57.5,-63.1,-39.7,-75.2C-21.9,-87.4,-2.1,-93.3,15.3,-89.6C32.7,-85.8,39.5,-82.3,55.1,-69Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute -right-16 bottom-1/4 w-64 h-64 text-teal-200 opacity-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M29.9,-51.3C39.5,-42.2,48.5,-35,57.2,-24.5C65.9,-14,74.2,-0.2,73.8,13C73.3,26.3,64.1,38.9,52,45.9C40,52.9,25.1,54.3,10.9,57.2C-3.3,60.1,-17,64.5,-29.2,62.1C-41.5,59.8,-52.2,50.7,-59.5,38.9C-66.8,27,-70.8,12.4,-70.4,-1.8C-70,-16,-65.3,-29.8,-56.3,-38.9C-47.3,-48,-34.1,-52.4,-22.5,-60.3C-10.9,-68.3,-0.9,-79.9,7.2,-77.9C15.3,-75.9,20.2,-60.4,29.9,-51.3Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center mb-16">
              <div className="mb-6 inline-flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-teal-700 shadow-lg shadow-green-200">
                <Sprout className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                Comprehensive <span className="text-green-600">Ecosystem Restoration</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
                Our ecological restoration services focus on revitalizing degraded ecosystems through scientific approaches and sustainable practices. We help restore biodiversity, enhance ecosystem functions, and create resilient landscapes that benefit both nature and communities.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-teal-800/90 opacity-80"></div>
              <div className="relative z-10 grid md:grid-cols-3 gap-8 p-8 sm:p-10 md:p-12">
                {[
                  { 
                    icon: <Leaf className="w-8 h-8 text-white" />,
                    title: "Habitat Restoration", 
                    description: "Revitalizing degraded ecosystems to support native biodiversity"
                  },
                  { 
                    icon: <Droplets className="w-8 h-8 text-white" />,
                    title: "Soil & Water Conservation", 
                    description: "Implementing techniques to prevent erosion and improve water quality"
                  },
                  { 
                    icon: <TreePine className="w-8 h-8 text-white" />,
                    title: "Sustainable Land Management", 
                    description: "Developing long-term strategies for ecological balance"
                  }
                ].map((item, i) => (
                  <div key={i} className="text-white text-center">
                    <div className="inline-flex justify-center items-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-5 shadow-inner">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-white/90">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-[url('/images/services/ecological-pattern.png')] opacity-10 mix-blend-overlay"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is Ecological Restoration Section */}
      <section className="relative py-24 bg-gradient-to-b from-white to-green-50/50 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                  <BookOpen className="w-5 h-5 text-green-600" />
                  <span>Definition</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  What is Ecological Restoration?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Ecological restoration is the process of assisting the recovery of ecosystems that have been degraded, damaged, or destroyed. It involves reestablishing the structure, function, diversity, and dynamics of specified ecosystems. Our approach combines scientific research, community engagement, and sustainable practices to create lasting ecological benefits.
                </p>
                
                <div className="flex flex-col space-y-4 mt-8">
                  {[
                    { icon: <Globe className="w-6 h-6 text-green-600" />, title: "Ecosystem Recovery", description: "Restoring biodiversity and ecological functions" },
                    { icon: <Mountain className="w-6 h-6 text-teal-600" />, title: "Landscape Rehabilitation", description: "Revitalizing degraded lands and natural habitats" },
                    { icon: <Users className="w-6 h-6 text-green-600" />, title: "Community Integration", description: "Involving local stakeholders in restoration projects" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="p-2 bg-green-50 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-100 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal-200 rounded-full"></div>
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                    <Image
                      src="/images/services/restoration-process.jpg"
                      alt="Ecological Restoration Process"
                      width={600}
                      height={450}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-green-700" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-green-800">Long-term Commitment</h3>
                            <p className="text-sm text-gray-600">Restoration requires monitoring and adaptive management</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-teal-100/50 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/images/services/restoration-bg.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-green-900/75"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Leaf size={18} className="text-green-200" />
              <span>Key Benefits</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              The Importance of Ecological Restoration
            </h2>
            <p className="text-lg text-teal-50/90 max-w-3xl mx-auto">
              Restoration projects provide multiple benefits for ecosystems, communities, and businesses committed to environmental stewardship
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/95 backdrop-blur rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-green-800/20 transition-all duration-500"
              >
                <div className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <TreePine className="w-7 h-7 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Biodiversity Enhancement</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Increases habitat quality and species diversity, supporting ecosystem resilience and functioning.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/95 backdrop-blur rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-green-800/20 transition-all duration-500"
              >
                <div className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <Droplets className="w-7 h-7 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Water Quality Improvement</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Reduces erosion and runoff, improving water quality and supporting aquatic ecosystems.
                  </p>
                    </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/95 backdrop-blur rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-green-800/20 transition-all duration-500"
              >
                <div className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <BarChart4 className="w-7 h-7 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Carbon Sequestration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Enhances carbon storage in vegetation and soils, contributing to climate change mitigation.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/95 backdrop-blur rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-green-800/20 transition-all duration-500"
              >
                <div className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <Users className="w-7 h-7 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Community Engagement</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Fosters community participation and education, creating shared value and long-term stewardship.
                  </p>
            </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white/95 backdrop-blur rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-green-800/20 transition-all duration-500"
              >
                <div className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <CheckCircle2 className="w-7 h-7 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Helps meet environmental regulations and corporate sustainability commitments.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white/95 backdrop-blur rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-green-800/20 transition-all duration-500"
              >
                <div className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-lg bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors duration-300">
                    <Workflow className="w-7 h-7 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Long-term Sustainability</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Creates resilient ecosystems that can adapt to environmental changes and sustain themselves over time.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Restoration Process Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              <ClipboardCheck className="w-5 h-5 text-green-600" />
              <span>Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              The Restoration Process
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our science-based approach to ecological restoration follows a comprehensive process to ensure sustainable and measurable outcomes
            </p>
          </motion.div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-200 transform md:translate-x-px"></div>
              
              {/* Process steps */}
              <div className="space-y-20">
                {[
                  {
                    step: 1,
                    title: "Site Assessment & Planning",
                    icon: <Map className="w-6 h-6 text-white" />,
                    description: "Conduct comprehensive ecological surveys to understand baseline conditions, identify degradation causes, and establish specific restoration goals.",
                    position: "left"
                  },
                  {
                    step: 2,
                    title: "Stakeholder Engagement",
                    icon: <Users className="w-6 h-6 text-white" />,
                    description: "Involve local communities, landowners, and regulatory agencies to ensure alignment of objectives and long-term support for the restoration project.",
                    position: "right"
                  },
                  {
                    step: 3,
                    title: "Restoration Design",
                    icon: <Ruler className="w-6 h-6 text-white" />,
                    description: "Develop detailed restoration plans with appropriate native species selections, soil amendments, and hydrological modifications based on site conditions.",
                    position: "left"
                  },
                  {
                    step: 4,
                    title: "Implementation",
                    icon: <Shovel className="w-6 h-6 text-white" />,
                    description: "Execute restoration activities including site preparation, invasive species removal, native plantings, and installation of erosion control measures.",
                    position: "right"
                  },
                  {
                    step: 5,
                    title: "Monitoring & Adaptive Management",
                    icon: <Microscope className="w-6 h-6 text-white" />,
                    description: "Implement systematic monitoring protocols to track ecological indicators and make necessary adjustments to ensure restoration success.",
                    position: "left"
                  },
                  {
                    step: 6,
                    title: "Long-term Stewardship",
                    icon: <Milestone className="w-6 h-6 text-white" />,
                    description: "Establish ongoing maintenance plans and stewardship protocols to ensure the long-term sustainability of the restored ecosystem.",
                    position: "right"
                  }
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <motion.div
                      initial={{ opacity: 0, x: item.position === "left" ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={`flex items-center ${item.position === "left" ? "md:flex-row-reverse" : "md:flex-row"} flex-col`}
                    >
                      {/* Step number and icon */}
                      <div className="absolute left-0 md:left-1/2 top-0 transform md:-translate-x-1/2 flex items-center justify-center z-10">
                        <div className="w-9 h-9 bg-white rounded-full border-4 border-green-200 flex items-center justify-center">
                          <span className="text-xs font-bold text-green-700">{item.step}</span>
                        </div>
                      </div>
                      
                      {/* Step content */}
                      <div className={`md:w-1/2 pl-12 md:pl-0 ${item.position === "left" ? "md:pr-16" : "md:pl-16"}`}>
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                              {item.icon}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                              <p className="text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Placeholder div for spacing on opposite side */}
                      <div className="hidden md:block md:w-1/2"></div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-green-50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl opacity-50"></div>
      </section>
    </main>
  )
} 