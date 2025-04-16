'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Microscope,
  ClipboardList,
  FileCheck,
  Shield,
  TreePine,
  Leaf,
  Sprout,
  Bird,
  Globe,
  Map,
  Camera,
  Mountain,
  Search,
  RefreshCw,
  Users,
  ChevronRight,
  Workflow
} from 'lucide-react'
import ServiceHero from '@/components/ServiceHero'
import ServiceScheduleButton from '@/components/ServiceScheduleButton'

export default function WildlifeConservationContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero 
        title="Wildlife Conservation"
        description="Protecting Biodiversity for the Future"
        imageSrc="/images/services/wildlife.jpg"
        actionButton={
          <ServiceScheduleButton 
            serviceName="wildlife-conservation-and-planning" 
            className="mt-6"
          />
        }
      />

      {/* Introduction Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-100/30 rounded-bl-[200px]"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-50/40 rounded-tr-[300px]"></div>
          <svg className="absolute -left-16 top-1/4 w-64 h-64 text-green-100 opacity-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M41.3,-69.4C53.6,-63.5,63.6,-53.1,70.5,-40.5C77.3,-27.9,81.1,-13.9,78.9,-1.3C76.8,11.4,68.7,22.8,61.7,35.2C54.8,47.6,49,60.9,38.7,69.2C28.5,77.5,14.2,80.7,-0.4,81.4C-15,82.1,-30.1,80.3,-41.6,72.6C-53.1,64.9,-61.1,51.4,-68.1,37.7C-75,24.1,-80.9,10.5,-80.9,-3.1C-80.9,-16.7,-75,-33.3,-64.9,-44.9C-54.8,-56.4,-40.5,-62.9,-27.4,-68.1C-14.2,-73.3,-2.1,-77.2,10.4,-76.5C22.8,-75.8,45.7,-70.6,41.3,-69.4Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute -right-16 bottom-1/4 w-64 h-64 text-green-200 opacity-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M38.5,-65.6C47.9,-60.5,52.1,-45.6,58.9,-32.1C65.7,-18.6,75,-6.5,76.2,6.9C77.4,20.3,70.4,35,59.1,42.7C47.8,50.4,32.2,51.2,19.2,56.8C6.2,62.4,-4.2,72.9,-14.8,74C-25.5,75.1,-36.3,66.8,-44.1,56.8C-51.9,46.7,-56.7,34.9,-61.1,22.4C-65.5,9.9,-69.5,-3.2,-67.8,-15.6C-66.1,-28,-58.7,-39.5,-48.3,-44.5C-37.9,-49.5,-24.4,-47.9,-12.3,-51.7C-0.2,-55.4,10.6,-64.6,23,-68.4C35.4,-72.3,49.4,-71,38.5,-65.6Z" transform="translate(100 100)" />
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
              <div className="mb-6 inline-flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-700 shadow-lg shadow-green-200">
                <Bird className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                Protecting <span className="text-green-600">Wildlife & Habitats</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
                Wildlife conservation starts with surveying and mapping biodiversity to identify key habitats, endangered and endemic species, and areas of ecological importance. It also involves assessing current impacts on wildlife and developing strategies to reduce threats. Through long-term conservation planning and habitat enhancement, we create wildlife-friendly landscapes that support thriving ecosystems.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/90 to-emerald-800/90 opacity-80"></div>
              <div className="relative z-10 grid md:grid-cols-3 gap-8 p-8 sm:p-10 md:p-12">
                {[
                  { 
                    icon: <Globe className="w-8 h-8 text-white" />,
                    title: "Habitat Protection", 
                    description: "Preserving critical ecosystems for wildlife to thrive"
                  },
                  { 
                    icon: <Bird className="w-8 h-8 text-white" />,
                    title: "Species Conservation", 
                    description: "Safeguarding endangered and endemic wildlife populations"
                  },
                  { 
                    icon: <Sprout className="w-8 h-8 text-white" />,
                    title: "Ecosystem Restoration", 
                    description: "Rebuilding and enhancing natural wildlife habitats"
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
              <div className="absolute inset-0 bg-[url('/images/services/wildlife-pattern.png')] opacity-10 mix-blend-overlay"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Conservation Steps Section */}
      <section id="process" className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              <Workflow size={18} className="text-green-600" />
              <span>Conservation Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Steps Involved in Wildlife Conservation
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach ensures effective protection and management of wildlife and their habitats
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Assessing Wildlife & Habitat",
                icon: <Search className="h-8 w-8 text-white" />,
                iconBg: "bg-green-600",
                description: "Establishing baseline understanding of species and habitats",
                items: [
                  "Conduct thorough biodiversity surveys to identify species, including endangered and endemic ones, within operational areas.",
                  "Use GIS mapping and ecological studies to establish a baseline understanding of habitat conditions and ecological connectivity."
                ]
              },
              {
                step: "02",
                title: "Identifying & Mitigating Impacts",
                icon: <Shield className="h-8 w-8 text-white" />,
                iconBg: "bg-green-600",
                description: "Addressing threats to wildlife populations and habitats",
                items: [
                  "Assess impacts from industrial activities like land clearing, pollution, and resource extraction that can disrupt wildlife.",
                  "Implement mitigation strategies such as buffer zones, controlled lighting, and noise management to minimize harm."
                ]
              },
              {
                step: "03",
                title: "Regulatory Compliance & Sustainability",
                icon: <FileCheck className="h-8 w-8 text-white" />,
                iconBg: "bg-green-600",
                description: "Meeting legal requirements and conservation standards",
                items: [
                  "Align with environmental laws and international conservation frameworks for responsible operations.",
                  "Integrate biodiversity conservation into Environmental, Social, and Governance (ESG) policies."
                ]
              },
              {
                step: "04",
                title: "Habitat Restoration & Conservation",
                icon: <Sprout className="h-8 w-8 text-white" />,
                iconBg: "bg-green-600",
                description: "Rebuilding ecosystems for long-term sustainability",
                items: [
                  "Rehabilitate post-operation sites to restore degraded ecosystems through native vegetation reintroduction.",
                  "Improve soil and water quality, and establish wildlife corridors to maintain ecological connectivity."
                ]
              },
              {
                step: "05",
                title: "Managing Human-Wildlife Interactions",
                icon: <Users className="h-8 w-8 text-white" />,
                iconBg: "bg-green-600",
                description: "Creating coexistence strategies for people and wildlife",
                items: [
                  "Implement proactive measures such as fencing, habitat enrichment, and employee training on safe wildlife interactions.",
                  "Foster coexistence strategies to reduce risks while maintaining ecological balance."
                ]
              },
              {
                step: "06",
                title: "Community Engagement & Collaboration",
                icon: <Globe className="h-8 w-8 text-white" />,
                iconBg: "bg-green-600",
                description: "Building partnerships for conservation success",
                items: [
                  "Collaborate with local communities, conservation organizations, and researchers on protection initiatives.",
                  "Create long-term, nature-positive solutions that benefit both the environment and society."
                ]
              },
              {
                step: "07",
                title: "Monitoring, Reporting & Improvement",
                icon: <RefreshCw className="h-8 w-8 text-white" />,
                iconBg: "bg-green-600",
                description: "Ensuring lasting impact through adaptive management",
                items: [
                  "Establish long-term biodiversity monitoring programs and incorporate findings into sustainability reports.",
                  "Apply adaptive management to ensure conservation strategies evolve with new challenges and opportunities."
                ]
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0 group"
              >
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-full ${step.iconBg} flex items-center justify-center shadow-lg z-10 
                    group-hover:shadow-green-300/50 transition-all duration-300`}>
                      {step.icon}
                      <span className="absolute -right-1 -top-1 w-7 h-7 rounded-full bg-white flex items-center justify-center text-xs font-bold text-green-700 shadow-sm border border-green-100">
                        {step.step}
                      </span>
                    </div>
                    {index < 6 && (
                      <div className="w-px h-24 bg-gradient-to-b from-green-500 to-green-300/30 my-2"></div>
                    )}
                  </div>
                  <div className="bg-white rounded-2xl shadow-xl p-8 w-full border border-gray-100 hover:border-green-100 transition-all duration-300 hover:shadow-2xl group-hover:shadow-green-100/20 group-hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-green-600 mb-4">{step.description}</p>
                    <ul className="space-y-3 text-gray-600">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-green-500 mr-3 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-green-100/50 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Case Studies Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/images/services/wildlife-bg.jpg')] bg-cover bg-center"></div>
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
              <Mountain size={18} className="text-green-200" />
              <span>Conservation Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Our Conservation Approach
            </h2>
            <p className="text-lg text-green-50/90 max-w-3xl mx-auto">
              Balancing scientific expertise with practical implementation to protect wildlife and their habitats
            </p>
          </motion.div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/95 backdrop-blur rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-green-800/20 transition-all duration-500"
              >
                <div className="p-8 sm:p-10">
                  <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                    <Camera className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Scientific Surveying
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We employ cutting-edge technologies and methodologies to conduct comprehensive wildlife surveys, capturing accurate data on species distribution, population dynamics, and habitat conditions.
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                        Data-Driven
                      </span>
                      <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                        High Precision
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/95 backdrop-blur rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-green-800/20 transition-all duration-500"
              >
                <div className="p-8 sm:p-10">
                  <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                    <Map className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Strategic Planning
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Our conservation strategies are built on solid scientific foundations and tailored to address specific challenges, ensuring effective and sustainable wildlife protection measures that balance ecological needs with human activities.
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                        Customized
                      </span>
                      <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                        Evidence-Based
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/95 backdrop-blur rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-green-800/20 transition-all duration-500 md:col-span-2 lg:col-span-1"
              >
                <div className="p-8 sm:p-10">
                  <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-green-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Community Integration
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We engage local communities and stakeholders in conservation initiatives, recognizing that successful wildlife protection requires collaborative approaches that respect traditional knowledge and address socioeconomic needs.
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                        Inclusive
                      </span>
                      <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                        Sustainable
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 