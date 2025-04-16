'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  ArrowDownCircle,
  FileText,
  ClipboardList,
  Calculator,
  CheckCircle,
  Lightbulb,
  Factory,
  LineChart,
  Leaf,
  BarChart3,
  Activity,
  Workflow,
  Globe,
  Layers,
  FileSpreadsheet,
  AlertCircle,
  FileCheck
} from 'lucide-react'
import ServiceHero from '@/components/ServiceHero'
import ServiceScheduleButton from '@/components/ServiceScheduleButton'

export default function GHGInventorisationContent() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <ServiceHero 
        title="Greenhouse Gas (GHG) Inventorisation"
        description="Comprehensive assessment and measurement of greenhouse gas emissions for effective climate action"
        imageSrc="/images/services/ghg-inventory.jpg"
        actionButton={
          <ServiceScheduleButton 
            serviceName="greenhouse-gas-ghg-inventorisation" 
            className="mt-6"
          />
        }
      />

      {/* Introduction Section */}
      <section className="py-16 relative overflow-hidden">
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center mb-16">
              <div className="mb-6 inline-flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-teal-700 shadow-lg shadow-green-200">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                Understanding and <span className="text-green-600">Managing</span> Greenhouse Gas Emissions
              </h2>
              <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
                Understanding and managing greenhouse gas (GHG) emissions is crucial for organizations aiming to reduce their carbon footprint and meet sustainability goals. We provide comprehensive GHG inventorisation services, helping businesses identify, quantify, and report emissions in line with global standards.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50/50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              <Activity size={18} className="text-green-600" />
              <span>Our Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive GHG Assessment Process
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our systematic methodology delivers accurate emissions measurement and actionable strategies for reduction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Layers className="w-12 h-12 text-white" />,
                title: "Scope Definition",
                description: "Defining emission boundaries under Scope 1, 2, and 3 categories."
              },
              {
                icon: <FileSpreadsheet className="w-12 h-12 text-white" />,
                title: "Data Collection",
                description: "Gathering relevant operational data to ensure accurate reporting."
              },
              {
                icon: <Calculator className="w-12 h-12 text-white" />,
                title: "Emission Calculation",
                description: "Applying internationally recognized methodologies to quantify emissions."
              },
              {
                icon: <AlertCircle className="w-12 h-12 text-white" />,
                title: "Verification & Quality Assurance",
                description: "Ensuring data accuracy and compliance with reporting frameworks."
              },
              {
                icon: <FileCheck className="w-12 h-12 text-white" />,
                title: "Reporting & Recommendations",
                description: "Providing structured reports with actionable insights."
              },
              {
                icon: <Leaf className="w-12 h-12 text-white" />,
                title: "Emission Reduction & Offsetting",
                description: "Developing strategies for emission mitigation and carbon offsetting."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="p-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-600 to-teal-700 flex items-center justify-center shadow-lg group-hover:shadow-green-200/50 transition-all duration-300 mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-100 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-200 rounded-full"></div>
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="/images/services/ghg-process.jpg"
                    alt="GHG Assessment Process"
                    width={600}
                    height={450}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-green-900/70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <BarChart3 className="w-6 h-6 text-green-700" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-green-800">Data-Driven Approach</h3>
                          <p className="text-sm text-gray-600">Precise measurement for effective reduction</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                  <LineChart className="w-5 h-5 text-green-600" />
                  <span>Business Value</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Enhance Sustainability Performance
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  With our expertise, businesses can enhance transparency, comply with regulations, and contribute to a low-carbon future.
                </p>
                
                <div className="space-y-4">
                  {[
                    {
                      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
                      title: "Regulatory Compliance",
                      description: "Meet evolving emission disclosure requirements and reporting standards"
                    },
                    {
                      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
                      title: "Cost Reduction",
                      description: "Identify energy inefficiencies and operational improvements that lower costs"
                    },
                    {
                      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
                      title: "Reputation Enhancement",
                      description: "Demonstrate environmental commitment to stakeholders and consumers"
                    },
                    {
                      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
                      title: "Risk Management",
                      description: "Prepare for carbon pricing and mitigate climate-related business risks"
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
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