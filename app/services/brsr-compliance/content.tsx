'use client'

import { motion } from 'framer-motion'
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
  BookCheck,
  FileSearch,
  ClipboardCheck,
  FileBarChart,
  FileQuestion
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import ServiceHero from '@/components/ServiceHero'
import ServiceScheduleButton from '@/components/ServiceScheduleButton'

export default function BRSRComplianceContent() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <ServiceHero 
        title="BRSR Compliance and Reporting"
        description="Expert guidance in aligning with SEBI's Business Responsibility and Sustainability Reporting framework"
        imageSrc="/images/services/brsr-compliance.jpg"
        actionButton={
          <ServiceScheduleButton 
            serviceName="brsr-compliance-and-reporting" 
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
                  Comprehensive BRSR Support
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We assist organizations in aligning with SEBI&apos;s Business Responsibility and Sustainability Reporting (BRSR) framework, ensuring comprehensive compliance and effective reporting of sustainability practices.
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
                    icon: <GraduationCap className="h-8 w-8 text-emerald-700" />,
                    title: "BRSR Training",
                    description: "Comprehensive workshops on navigating SEBI's BRSR framework and effective reporting strategies",
                    bgColor: "bg-emerald-50",
                    hoverBg: "hover:bg-emerald-100",
                    iconColor: "text-emerald-700"
                  },
                  {
                    icon: <Database className="h-8 w-8 text-blue-700" />,
                    title: "Data Strategy",
                    description: "Developing robust data collection strategies for ESG practices",
                    bgColor: "bg-blue-50",
                    hoverBg: "hover:bg-blue-100",
                    iconColor: "text-blue-700"
                  },
                  {
                    icon: <ScrollText className="h-8 w-8 text-teal-700" />,
                    title: "Report Drafting",
                    description: "Expert guidance in preparing comprehensive BRSR reports",
                    bgColor: "bg-teal-50",
                    hoverBg: "hover:bg-teal-100",
                    iconColor: "text-teal-700"
                  },
                  {
                    icon: <FileCheck className="h-8 w-8 text-purple-700" />,
                    title: "Quality Assurance",
                    description: "Thorough review and validation of report accuracy",
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

            {/* Right Column - Process & Monitoring */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-emerald-50 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:bg-emerald-100/50"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Training & Implementation
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      text: "Tailored BRSR Workshops",
                      icon: <BookCheck className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Guidelines Interpretation",
                      icon: <FileSearch className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Best Practices Training",
                      icon: <GraduationCap className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Data Collection Framework",
                      icon: <ClipboardCheck className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Performance Assessment",
                      icon: <FileBarChart className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Gap Analysis",
                      icon: <FileQuestion className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
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
                  Report Development
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      text: "Format Compliance",
                      icon: <CheckCircle className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Data Validation",
                      icon: <Shield className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Content Review",
                      icon: <FileText className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Quality Assurance",
                      icon: <ClipboardList className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
                    },
                    {
                      text: "Final Recommendations",
                      icon: <Lightbulb className="h-5 w-5 text-emerald-600 mt-1 mr-3 flex-shrink-0 transition-transform duration-300 hover:rotate-12" />
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
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to enhance your BRSR compliance?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Schedule a consultation with our BRSR experts to discuss your organization's specific needs and how we can help you achieve compliance.
            </p>
            <ServiceScheduleButton 
              serviceName="brsr-compliance-and-reporting" 
              className="mx-auto"
            />
          </motion.div>
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