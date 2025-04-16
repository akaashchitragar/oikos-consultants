'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  FileText,
  Map,
  Leaf,
  Users,
  TreePine,
  Ruler,
  ClipboardCheck,
  Shield,
  Workflow,
  Landmark,
  Calendar,
  FileCheck,
  Globe
} from 'lucide-react'
import ServiceHero from '@/components/ServiceHero'
import ServiceScheduleButton from '@/components/ServiceScheduleButton'

export default function ForestClearanceServicesContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <ServiceHero 
        title="Forest Clearance Services"
        description="Navigating regulatory approvals with expertise and efficiency"
        imageSrc="/images/services/forest-clearance.jpg"
        actionButton={
          <ServiceScheduleButton 
            serviceName="forest-clearance-services" 
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
                <TreePine className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                Simplifying <span className="text-green-600">Regulatory Approvals</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
                Navigating forest clearance regulations can be complex, but we simplify the process for you. Our expert team ensures seamless compliance with the Ministry of Environment, Forest & Climate Change (MoEF&CC) guidelines, helping businesses secure necessary approvals efficiently.
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
                    icon: <FileText className="w-8 h-8 text-white" />,
                    title: "Application Preparation", 
                    description: "End-to-end FC application preparation per MoEF&CC guidelines"
                  },
                  { 
                    icon: <Map className="w-8 h-8 text-white" />,
                    title: "Site Assessment", 
                    description: "Detailed surveys and mapping to facilitate clearance process"
                  },
                  { 
                    icon: <Landmark className="w-8 h-8 text-white" />,
                    title: "Regulatory Navigation", 
                    description: "Expert guidance through complex approval frameworks"
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
              <div className="absolute inset-0 bg-[url('/images/services/forest-clearance-pattern.png')] opacity-10 mix-blend-overlay"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Section */}
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
                  <ClipboardCheck className="w-5 h-5 text-green-600" />
                  <span>Our Services</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Comprehensive Forest Clearance Solutions
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our specialized team provides end-to-end support for forest clearance applications, ensuring compliance with all regulatory requirements while maintaining ecological sensitivity. We streamline the approval process while ensuring responsible forest management and ecological balance.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {[
                    { icon: <FileCheck className="w-6 h-6 text-green-600" />, title: "Forest Clearance Application" },
                    { icon: <Map className="w-6 h-6 text-green-600" />, title: "Site Survey & Mapping" },
                    { icon: <Leaf className="w-6 h-6 text-green-600" />, title: "Impact Studies" },
                    { icon: <Users className="w-6 h-6 text-green-600" />, title: "Stakeholder Consultations" },
                    { icon: <TreePine className="w-6 h-6 text-green-600" />, title: "Compensatory Afforestation" },
                    { icon: <Shield className="w-6 h-6 text-green-600" />, title: "Regulatory Compliance" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="p-2 bg-green-50 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{item.title}</h3>
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
                      src="/images/services/forest-clearance-process.jpg"
                      alt="Forest Clearance Process"
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
                            <h3 className="text-lg font-semibold text-green-800">Efficient Approvals</h3>
                            <p className="text-sm text-gray-600">Streamlined processes for faster clearances</p>
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

      {/* Services Detail Section */}
      <section className="relative py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              <Leaf size={18} className="text-green-600" />
              <span>Detailed Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Our Forest Clearance Offerings
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide a comprehensive suite of services to navigate the complex forest clearance process
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                {
                  icon: <FileText className="w-10 h-10 text-white" />,
                  title: "Forest Clearance (FC) Application",
                  description: "End-to-end preparation of forest clearance applications as per MoEF&CC guidelines, ensuring all documentation meets regulatory standards."
                },
                {
                  icon: <Map className="w-10 h-10 text-white" />,
                  title: "Site Survey & Mapping",
                  description: "Detailed assessment of the proposed site, including comprehensive mapping and documentation to facilitate the clearance process."
                },
                {
                  icon: <Leaf className="w-10 h-10 text-white" />,
                  title: "Forest & Environmental Impact Studies",
                  description: "Thorough evaluation of potential ecological impacts and development of effective mitigation strategies to minimize environmental footprint."
                },
                {
                  icon: <Users className="w-10 h-10 text-white" />,
                  title: "Stakeholder Consultations",
                  description: "Facilitating engagement with State Forest Departments and relevant authorities to ensure alignment and support for the project."
                },
                {
                  icon: <TreePine className="w-10 h-10 text-white" />,
                  title: "Compensatory Afforestation Plan (CAP)",
                  description: "Development of strategic afforestation initiatives as per regulatory requirements to offset ecological impact."
                },
                {
                  icon: <Globe className="w-10 h-10 text-white" />,
                  title: "Forest Diversion Proposal (FDP)",
                  description: "Preparation of comprehensive proposals for land-use conversion while ensuring sustainability and minimal ecological disruption."
                },
                {
                  icon: <Shield className="w-10 h-10 text-white" />,
                  title: "Regulatory Compliance",
                  description: "Ensuring adherence to the Forest Conservation Act and the Forest Rights Act (FRA) throughout the project lifecycle."
                },
                {
                  icon: <Landmark className="w-10 h-10 text-white" />,
                  title: "Wildlife Clearances",
                  description: "Assistance in securing approvals from the National Board of Wildlife (NBWL), when applicable for projects near protected areas."
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-600 to-teal-700 flex items-center justify-center shadow-lg group-hover:shadow-green-200/50 transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 