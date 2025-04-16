'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  TreePine,
  Leaf,
  Sprout,
  Database,
  Map,
  FileCheck,
  Activity,
  BarChart4,
  Globe,
  LineChart,
  Mountain,
  Bird,
  PlaneTakeoff,
  CheckCircle2,
  ChevronRight,
  ArrowRight
} from 'lucide-react'
import ServiceHero from '@/components/ServiceHero'
import ServiceScheduleButton from '@/components/ServiceScheduleButton'

export default function BiodiversityAssessmentContent() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section - Kept as is */}
      <ServiceHero 
        title="Biodiversity Assessment"
        description="Measuring Your Impact on Nature"
        imageSrc="/images/services/biodiversity.jpg"
        actionButton={
          <ServiceScheduleButton 
            serviceName="biodiversity-assessment-surveys" 
            className="mt-6"
          />
        }
      />

      {/* Introduction Section - Completely Redesigned */}
      <section className="relative py-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-100/30 rounded-bl-[200px]"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-emerald-50/40 rounded-tr-[300px]"></div>
          <svg className="absolute -left-16 top-1/4 w-64 h-64 text-emerald-100 opacity-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M55.2,-60.8C67.8,-45.9,72.3,-25.4,72.6,-5.3C72.9,14.8,69,34.5,57.2,45.9C45.5,57.3,25.8,60.4,5.2,66.2C-15.3,72,-36.7,80.6,-53.6,74.5C-70.5,68.5,-82.8,47.9,-85.8,26.8C-88.8,5.7,-82.4,-15.9,-70.6,-32.1C-58.9,-48.3,-41.9,-59.1,-24.4,-68.6C-7,-78,10.9,-86.2,28.7,-81.4C46.4,-76.5,64,-75.7,55.2,-60.8Z" transform="translate(100 100)" />
          </svg>
          <svg className="absolute -right-16 bottom-1/4 w-64 h-64 text-emerald-200 opacity-40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M30.9,-44.1C40.1,-33.5,47.7,-24.3,50.7,-13.7C53.7,-3,52.1,10.2,46.6,21.2C41.1,32.3,31.6,41.1,20.6,47.6C9.5,54,-3.1,58.1,-16.2,56C-29.4,53.9,-43.1,45.6,-51.5,33.3C-59.9,21,-63,4.7,-59.9,-10.2C-56.9,-25.1,-47.6,-38.6,-35.9,-49C-24.2,-59.4,-10.1,-66.8,0.6,-67.6C11.3,-68.4,21.7,-54.7,30.9,-44.1Z" transform="translate(100 100)" />
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
              <div className="mb-6 inline-flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-lg shadow-emerald-200">
                <Leaf className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
                Impact on <span className="text-emerald-600">Nature & Business</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
                A biodiversity assessment helps organizations understand their interactions with nature—where they occur, how significant they are, and why they matter. By evaluating business impact and dependencies on biodiversity, it reveals risks, opportunities, and pathways toward a nature-positive future.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-emerald-800/90 opacity-80"></div>
              <div className="relative z-10 grid md:grid-cols-3 gap-8 p-8 sm:p-10 md:p-12">
                {[
                  { 
                    icon: <Globe className="w-8 h-8 text-white" />,
                    title: "Global Impact", 
                    description: "Identify your organization's footprint across ecosystems worldwide"
                  },
                  { 
                    icon: <BarChart4 className="w-8 h-8 text-white" />,
                    title: "Data-Driven", 
                    description: "Evidence-based assessment providing actionable insights"
                  },
                  { 
                    icon: <PlaneTakeoff className="w-8 h-8 text-white" />,
                    title: "Future-Ready", 
                    description: "Prepare for emerging regulations and market expectations"
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
              <div className="absolute inset-0 bg-[url('/images/services/biodiversity-pattern.png')] opacity-10 mix-blend-overlay"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What is Assessment Section - Redesigned with Visual Story */}
      <section className="relative py-24 bg-emerald-50/50 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 md:order-1"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
                  <Leaf className="w-5 h-5 text-emerald-600" />
                  <span>Definition</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  What is a Nature/Biodiversity Assessment?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  A nature/biodiversity assessment analyses a company's activities alongside biodiversity data to map and quantify its impact on nature. This evidence-based, adaptable approach helps identify priority areas, assess risks, and develop strategies for mitigation and positive action—benefiting both nature and business.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {[
                    { text: "Evidence-based analysis", icon: <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" /> },
                    { text: "Adaptable methodologies", icon: <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" /> },
                    { text: "Strategic planning focus", icon: <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" /> },
                    { text: "Measurable outcomes", icon: <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0" /> }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                      {item.icon}
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
                
                <div className="relative">
                  <a href="#process" className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800 transition-colors group">
                    <span>Explore Our Assessment Process</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="order-1 md:order-2"
              >
                <div className="relative">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-200 rounded-full"></div>
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                    <Image
                      src="/images/services/biodiversity-assessment.jpg"
                      alt="Biodiversity Assessment"
                      width={600}
                      height={450}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                            <Mountain className="w-6 h-6 text-emerald-700" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-emerald-800">Ecosystem Assessment</h3>
                            <p className="text-sm text-gray-600">Quantifying impact on biodiversity</p>
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
      </section>

      {/* Why Conduct Section - Immersive Design */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[url('/images/services/biodiversity-bg.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-emerald-900/80"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
              <BarChart4 size={18} className="text-emerald-200" />
              <span>Benefits</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Why Conduct a Biodiversity Assessment?
            </h2>
            <p className="text-lg text-emerald-50/90 max-w-3xl mx-auto">
              Understanding biodiversity impact is essential for both ecological preservation and business sustainability
            </p>
          </motion.div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white/95 backdrop-blur rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-emerald-800/20 transition-all duration-500"
              >
                <div className="p-8 sm:p-10">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                    <TreePine className="w-8 h-8 text-emerald-700" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Ecological Importance
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    Biodiversity sustains ecosystems, supports life, and underpins global economies. It regulates climate, renews soil, and provides essential resources like food, medicine, and raw materials. Assessing biodiversity helps track its status, guide sustainable development, and safeguard the genetic diversity vital for agriculture and innovation—ensuring a healthier planet for future generations.
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[...Array(4)].map((_, i) => (
                          <div key={i} className={`w-8 h-8 rounded-full border-2 border-white ${['bg-emerald-400', 'bg-emerald-500', 'bg-emerald-600', 'bg-emerald-700'][i]}`}></div>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">200+ Species Protected</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/95 backdrop-blur rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-emerald-800/20 transition-all duration-500"
              >
                <div className="p-8 sm:p-10">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8 text-emerald-700" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Business Value
                </h3>
                  <p className="text-gray-700 leading-relaxed mb-8">
                    A biodiversity assessment helps businesses align financial goals with environmental responsibility by identifying dependencies on natural resources and risks of depletion. It supports compliance with evolving environmental regulations, informs long-term sustainability strategies, enhances resilience, and builds stakeholder trust—ensuring sustainable growth in a changing world.
                  </p>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-2">
                      {['Risk Management', 'Compliance', 'Innovation', 'Sustainability'].map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Steps Section - Interactive Timeline */}
      <section id="process" className="relative py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium mb-6">
              <Activity size={18} className="text-emerald-600" />
              <span>Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Steps in Our Biodiversity Assessment
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach ensures thorough evaluation and actionable outcomes
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Defining Objectives & Scope",
                icon: <Leaf className="h-8 w-8 text-white" />,
                iconBg: "bg-emerald-600",
                description: "We establish clear objectives and boundaries for your assessment",
                items: [
                  "Identify the purpose of the assessment (e.g., compliance, conservation, risk assessment).",
                  "Determine spatial and temporal boundaries."
                ]
              },
              {
                step: "02",
                title: "Data Collection & Baseline Assessment",
                icon: <Database className="h-8 w-8 text-white" />,
                iconBg: "bg-emerald-600",
                description: "Comprehensive gathering of all relevant biodiversity data",
                items: [
                  "Conduct field surveys to document flora, fauna, and habitat conditions.",
                  "Utilize remote sensing, GIS mapping, and historical biodiversity data.",
                  "Engage with stakeholders for local ecological knowledge."
                ]
              },
              {
                step: "03",
                title: "Identifying Key Biodiversity Areas",
                icon: <Map className="h-8 w-8 text-white" />,
                iconBg: "bg-emerald-600",
                description: "Mapping critical habitats and ecosystem services",
                items: [
                  "Map critical habitats, endemic and endangered species, and ecosystem hotspots.",
                  "Assess ecosystem services and biodiversity dependencies."
                ]
              },
              {
                step: "04",
                title: "Assessing Impacts & Risks",
                icon: <LineChart className="h-8 w-8 text-white" />,
                iconBg: "bg-emerald-600",
                description: "Analyzing potential threats and business activities",
                items: [
                  "Evaluate current and potential threats to biodiversity (e.g., habitat loss, pollution, climate change).",
                  "Analyze the impact of business or development activities on ecosystems."
                ]
              },
              {
                step: "05",
                title: "Benchmarking & Compliance Review",
                icon: <FileCheck className="h-8 w-8 text-white" />,
                iconBg: "bg-emerald-600",
                description: "Comparing findings against industry standards and regulations",
                items: [
                  "Compare findings with industry standards, legal requirements, and conservation frameworks (e.g., IUCN, CBD, BRSR).",
                  "Identify gaps in biodiversity management strategies."
                ]
              },
              {
                step: "06",
                title: "Developing Mitigation & Conservation Strategies",
                icon: <Sprout className="h-8 w-8 text-white" />,
                iconBg: "bg-emerald-600",
                description: "Creating actionable plans for positive biodiversity impact",
                items: [
                  "Recommend sustainable land-use practices and habitat restoration initiatives.",
                  "Propose measures to minimize ecological footprint and enhance biodiversity."
                ]
              },
              {
                step: "07",
                title: "Monitoring, Reporting & Adaptive Management",
                icon: <Activity className="h-8 w-8 text-white" />,
                iconBg: "bg-emerald-600",
                description: "Ongoing assessment and improvement of biodiversity strategies",
                items: [
                  "Establish long-term monitoring programs to track biodiversity changes.",
                  "Implement reporting frameworks for stakeholders and regulatory compliance.",
                  "Adapt strategies based on new findings and evolving ecological conditions."
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
                    group-hover:shadow-emerald-300/50 transition-all duration-300`}>
                      {step.icon}
                      <span className="absolute -right-1 -top-1 w-7 h-7 rounded-full bg-white flex items-center justify-center text-xs font-bold text-emerald-700 shadow-sm border border-emerald-100">
                        {step.step}
                      </span>
                    </div>
                    {index < 6 && (
                      <div className="w-px h-24 bg-gradient-to-b from-emerald-500 to-emerald-300/30 my-2"></div>
                    )}
                  </div>
                  <div className="bg-white rounded-2xl shadow-xl p-8 w-full border border-gray-100 hover:border-emerald-100 transition-all duration-300 hover:shadow-2xl group-hover:shadow-emerald-100/20 group-hover:-translate-y-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-emerald-600 mb-4">{step.description}</p>
                    <ul className="space-y-3 text-gray-600">
                      {step.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <div className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 mr-3 flex-shrink-0"></div>
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
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl opacity-50"></div>
      </section>
    </main>
  )
} 