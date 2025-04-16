'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  FileCheck,
  ClipboardList,
  FileText,
  Database,
  GraduationCap,
  CheckCircle,
  Lightbulb,
  ScrollText,
  Shield,
  BarChart,
  LineChart,
  ArrowUpRight,
  Building2,
  Book,
  PieChart,
  AreaChart,
  TrendingUp,
  DollarSign,
  ChevronRight
} from 'lucide-react'
import ServiceHero from '@/components/ServiceHero'
import ServiceScheduleButton from '@/components/ServiceScheduleButton'

export default function BRSRComplianceContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero 
        title="BRSR Compliance and Reporting"
        description="Meeting sustainability reporting requirements with strategic insight"
        imageSrc="/images/services/brsr-compliance.jpg"
        actionButton={
          <ServiceScheduleButton 
            serviceName="brsr-compliance-and-reporting" 
            className="mt-6"
          />
        }
      />

      {/* Introduction Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100/30 rounded-bl-[200px]"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-50/40 rounded-tr-[300px]"></div>
          <svg className="absolute -left-16 top-1/4 w-64 h-64 text-blue-100 opacity-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.8,-76.7C59.4,-69.8,73.3,-59.8,83.7,-46.4C94.1,-33,101,-16.5,99.2,-1.1C97.4,14.4,86.8,28.7,76.9,42.9C66.9,57.1,57.6,71.1,44.6,78.4C31.5,85.8,15.8,86.4,0.8,85.1C-14.2,83.9,-28.3,80.8,-41.9,74.2C-55.5,67.7,-68.5,57.8,-75.3,44.7C-82.1,31.5,-82.7,15.8,-83.2,-0.3C-83.7,-16.3,-84.2,-32.6,-76.9,-44.9C-69.7,-57.1,-54.7,-65.4,-40.1,-72.3C-25.5,-79.2,-12.8,-84.7,0.9,-86.4C14.7,-88,29.3,-85.7,44.8,-76.7Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute -right-16 bottom-1/4 w-64 h-64 text-indigo-200 opacity-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M39.6,-69.1C51.1,-62.2,60.1,-50.8,67.4,-37.9C74.7,-25.1,80.3,-12.5,81.2,0.5C82.1,13.6,78.2,27.2,70.8,38.6C63.3,50,52.1,59.3,39.6,65.5C27.1,71.8,13.6,75,0.7,73.8C-12.1,72.7,-24.2,67,-35.1,59.6C-46,52.1,-55.7,42.8,-62.3,31.2C-68.9,19.6,-72.5,5.8,-72.2,-8.1C-71.9,-21.9,-67.8,-35.8,-59.3,-45.8C-50.9,-55.7,-38.2,-61.9,-25.7,-68C-13.3,-74,-6.6,-80,3.3,-85.8C13.3,-91.7,26.5,-97.5,39.6,-69.1Z" transform="translate(100 100)" />
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
              <div className="mb-6 inline-flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 shadow-lg shadow-blue-200">
                <FileCheck className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                Understanding <span className="text-blue-600">BRSR Compliance</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
                SEBI's Business Responsibility and Sustainability Reporting (BRSR) framework is a crucial requirement for companies to disclose their environmental, social, and governance (ESG) impact. Aligning with this framework enhances transparency, accountability, and long-term business resilience.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-800/90 opacity-80"></div>
              <div className="relative z-10 grid md:grid-cols-3 gap-8 p-8 sm:p-10 md:p-12">
                {[
                  { 
                    icon: <ClipboardList className="w-8 h-8 text-white" />,
                    title: "Regulatory Compliance", 
                    description: "Meeting SEBI's BRSR disclosure requirements with accuracy and efficiency"
                  },
                  { 
                    icon: <Database className="w-8 h-8 text-white" />,
                    title: "Data Collection", 
                    description: "Gathering relevant ESG data and evaluating sustainability performance"
                  },
                  { 
                    icon: <ScrollText className="w-8 h-8 text-white" />,
                    title: "Structured Reporting", 
                    description: "Preparing detailed reports that effectively communicate initiatives"
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
              <div className="absolute inset-0 bg-[url('/images/services/brsr-pattern.png')] opacity-10 mix-blend-overlay"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits of BRSR Integration */}
      <section className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <BarChart size={18} className="text-blue-600" />
              <span>Strategic Benefits</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Benefits of BRSR Integration
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Embedding BRSR into corporate strategy provides both regulatory compliance and strategic advantages
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Building2 className="h-10 w-10 text-blue-600" />,
                title: "Enhanced Reputation",
                description: "Build stronger stakeholder trust through transparent and structured ESG reporting"
              },
              {
                icon: <Shield className="h-10 w-10 text-blue-600" />,
                title: "Regulatory Compliance",
                description: "Stay ahead of evolving sustainability regulations with proactive reporting practices"
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
                title: "Strategic Integration",
                description: "Strengthen long-term business strategy by embedding ESG principles into operations"
              },
              {
                icon: <PieChart className="h-10 w-10 text-blue-600" />,
                title: "Sustainable Development",
                description: "Drive meaningful progress toward creating positive environmental and social impact"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:border-blue-100 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-100/20 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-indigo-100/50 rounded-full blur-3xl opacity-50"></div>
      </section>

      {/* Our Approach Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/images/services/brsr-bg.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-indigo-900/80"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <LineChart size={18} className="text-blue-200" />
              <span>Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive BRSR Solutions
            </h2>
            <p className="text-lg text-blue-50/90 max-w-3xl mx-auto">
              By embedding BRSR into corporate strategy, businesses can not only meet regulatory expectations but also build a more responsible and resilient future
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white/95 backdrop-blur rounded-3xl overflow-hidden p-8 sm:p-10"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-auto">
                    <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                      <GraduationCap className="w-8 h-8 text-blue-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Training & Assessment
                    </h3>
                    <ul className="space-y-4 mb-8">
                      {[
                        "Expert workshops on BRSR framework and requirements",
                        "Assessment of current ESG practices and reporting gaps",
                        "Tailored roadmap for compliance and implementation",
                        "Identification of key performance indicators",
                        "Benchmarking against industry standards"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <a href="/contact" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors group">
                      <span>Learn more about our training programs</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-white/95 backdrop-blur rounded-3xl overflow-hidden p-8 sm:p-10"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-auto">
                    <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                      <AreaChart className="w-8 h-8 text-blue-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Reporting & Implementation
                    </h3>
                    <ul className="space-y-4 mb-8">
                      {[
                        "Comprehensive data collection and analysis",
                        "Development of structured BRSR reports",
                        "Integration of BRSR into business strategy",
                        "Stakeholder communication planning",
                        "Ongoing guidance for continuous improvement"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <a href="/contact" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-800 transition-colors group">
                      <span>Explore our reporting solutions</span>
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
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