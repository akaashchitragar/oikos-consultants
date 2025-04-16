'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  BarChart3,
  FileCheck,
  Target,
  LineChart,
  Leaf,
  Users,
  Building2,
  Scale,
  FileText,
  PieChart,
  Workflow,
  Activity,
  Database,
  Presentation,
  CheckCircle,
  Globe,
  Lightbulb,
  Recycle,
  Shield,
  Calendar,
  ClipboardCheck,
  ChevronRight,
  Search
} from 'lucide-react'
import ServiceHero from '@/components/ServiceHero'
import ServiceScheduleButton from '@/components/ServiceScheduleButton'

export default function SustainabilityAuditsContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero 
        title="Sustainability Audits"
        description="Evaluating performance for lasting environmental and social impact"
        imageSrc="/images/services/sustainability-audit.jpg"
        actionButton={
          <ServiceScheduleButton 
            serviceName="sustainability-audits" 
            className="mt-6"
          />
        }
      />

      {/* Introduction Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-amber-100/30 rounded-bl-[200px]"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-teal-50/40 rounded-tr-[300px]"></div>
          <svg className="absolute -left-16 top-1/4 w-64 h-64 text-amber-100 opacity-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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
              <div className="mb-6 inline-flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-teal-700 shadow-lg shadow-amber-200">
                <ClipboardCheck className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                Thorough <span className="text-amber-600">Sustainability Evaluation</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
                Our sustainability audits provide a thorough evaluation of an organization's environmental, social, and governance (ESG) practices. By assessing current performance and benchmarking against industry standards, we identify gaps and opportunities for improvement.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600/90 to-teal-800/90 opacity-80"></div>
              <div className="relative z-10 grid md:grid-cols-3 gap-8 p-8 sm:p-10 md:p-12">
                {[
                  { 
                    icon: <BarChart3 className="w-8 h-8 text-white" />,
                    title: "ESG Performance Review", 
                    description: "Analyzing sustainability efforts to measure impact and compliance"
                  },
                  { 
                    icon: <Search className="w-8 h-8 text-white" />,
                    title: "Benchmarking & Gap Analysis", 
                    description: "Comparing practices with industry leaders to highlight areas for growth"
                  },
                  { 
                    icon: <Target className="w-8 h-8 text-white" />,
                    title: "Strategy Development", 
                    description: "Recommending tailored solutions to enhance sustainability performance"
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
              <div className="absolute inset-0 bg-[url('/images/services/sustainability-pattern.png')] opacity-10 mix-blend-overlay"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is a Sustainability Audit Section */}
      <section className="relative py-24 bg-gradient-to-b from-white to-amber-50/50 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-6">
                  <FileCheck className="w-5 h-5 text-amber-600" />
                  <span>Definition</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  What is a Sustainability Audit?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  A sustainability audit evaluates a company's environmental, social, and governance (ESG) performance, assessing energy use, waste, carbon footprint, and resource efficiency. It identifies risks, ensures regulatory compliance, and helps businesses develop actionable strategies for long-term sustainability. By conducting regular audits, companies can improve efficiency, transparency, and their overall impact on the planet.
                </p>
                
                <div className="flex flex-col space-y-4 mt-8">
                  {[
                    { icon: <Leaf className="w-6 h-6 text-teal-600" />, title: "Environmental Assessment", description: "Evaluating resource use, emissions, and ecological impact" },
                    { icon: <Users className="w-6 h-6 text-amber-600" />, title: "Social Performance", description: "Analyzing community engagement and workplace practices" },
                    { icon: <Building2 className="w-6 h-6 text-amber-600" />, title: "Governance Review", description: "Examining policies, transparency, and ethical standards" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="p-2 bg-amber-50 rounded-lg">
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
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-100 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal-200 rounded-full"></div>
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                    <Image
                      src="/images/services/sustainability-audit-process.jpg"
                      alt="Sustainability Audit Process"
                      width={600}
                      height={450}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-6 h-6 text-amber-700" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-amber-800">Regular Assessment</h3>
                            <p className="text-sm text-gray-600">Schedule periodic audits for continuous improvement</p>
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
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-teal-100/50 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/images/services/sustainability-bg.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-teal-900/75"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <Lightbulb size={18} className="text-amber-200" />
              <span>Key Benefits</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Why Conduct a Sustainability Audit?
            </h2>
            <p className="text-lg text-teal-50/90 max-w-3xl mx-auto">
              A well-executed sustainability audit helps organizations refine their strategies, reduce risks, and create a lasting positive impact
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/95 backdrop-blur rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-teal-800/20 transition-all duration-500"
              >
                <div className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                    <Scale className="w-7 h-7 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ensures compliance with evolving ESG regulations and requirements, helping organizations stay ahead of legal obligations.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/95 backdrop-blur rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-teal-800/20 transition-all duration-500"
              >
                <div className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                    <Recycle className="w-7 h-7 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Operational Efficiency</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Enhances operational efficiency and resource management by identifying waste and implementing sustainable practices.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/95 backdrop-blur rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-teal-800/20 transition-all duration-500"
              >
                <div className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                    <Building2 className="w-7 h-7 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Reputation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Strengthens corporate reputation and stakeholder confidence through transparent and responsible business practices.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/95 backdrop-blur rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-teal-800/20 transition-all duration-500"
              >
                <div className="p-6 sm:p-8">
                  <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors duration-300">
                    <Workflow className="w-7 h-7 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Long-term Resilience</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Drives long-term business resilience and sustainability goals by creating a foundation for continuous environmental and social improvement.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 