'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Leaf,
  Award,
  Recycle,
  Lightbulb,
  Shield,
  Users,
  TreePine,
  Wind,
  Sprout,
  CheckCircle2,
  Zap,
  Trees,
  Flower2,
  Plus
} from 'lucide-react'

const teamMembers = [
  {
    name: 'Ms. Seema Subhash Mali',
    role: 'Co-founder & Director',
    description: 'Conservation Biologist & Biodiversity Expert',
    image: '/images/team/seema-mali.jpg'
  },
  {
    name: 'Dr. Arun Mani Dixit',
    role: 'Co-founder & Director',
    description: 'Ecologist',
    image: '/images/team/arun-dixit.jpg'
  },
  {
    name: 'Dr. Satyasiba Bedamatta',
    role: 'Environmental Economist',
    description: 'Expert in environmental economics and sustainable development',
    image: '/images/team/satyasiba-bedamatta.jpg'
  },
  {
    name: 'Mr. Pramod Pokharkar',
    role: 'Environmental Scientist',
    description: 'Specializes in environmental impact assessment and management',
    image: '/images/team/pramod-pokharkar.jpg'
  },
  {
    name: 'Mr. N. Arun Kumar',
    role: 'Plant Taxonomist',
    description: 'Expert in plant classification and biodiversity assessment',
    image: '/images/team/arun-kumar.jpg'
  },
  {
    name: 'Mr. Aalam Tamboli',
    role: 'Environmental Expert',
    description: 'Environmental and Watershed Management Expert',
    image: '/images/team/aalam-tamboli.jpg'
  },
  {
    name: 'Mr. Deepak Phashi',
    role: 'Wildlife Biologist',
    description: 'Specializes in wildlife conservation and habitat management',
    image: '/images/team/deepak-phashi.jpg'
  },
  {
    name: 'Dr. Vyankatesh Ghodke',
    role: 'Technical Expert',
    description: 'Hydrogeologist and GIS Expert',
    image: '/images/team/vyankatesh-ghodke.jpg'
  }
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section with Video Background */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about-banner.jpg"
            alt="Nature background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="relative h-full flex items-center justify-center text-white px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              Making Our Planet 
              <span className="text-green-500 block">Better Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Leading the way in environmental consulting and conservation for a sustainable future
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full">
                Discover Our Mission
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* About Section with Image */}
      <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200 rounded-full opacity-50 blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-300 rounded-full opacity-50 blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src="/images/innovation-box.png"
                  alt="Our work in nature"
                  width={550}
                  height={650}
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-4xl font-bold leading-tight group">
                    Committed to Environmental
                    <span className="text-green-600 block group-hover:translate-x-1 transition-transform">Excellence & Innovation</span>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-4">
                    Oikos Consultants is a leading environmental consulting firm specializing in sustainability solutions, 
                    biodiversity conservation, and ecological services.
                  </p>
                </div>

                {/* Mission & Certifications */}
                <div className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 p-4 rounded-xl border border-white/20 dark:border-gray-700/30 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <TreePine className="w-5 h-5 text-green-600 animate-pulse" />
                    <h3 className="font-semibold text-green-700 dark:text-green-400">Our Mission</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 italic text-sm mb-4">
                    &ldquo;Creating a sustainable future by bridging the gap between environmental responsibility 
                    and business success.&rdquo;
                  </p>
                  <div className="flex flex-wrap gap-3 pt-3 border-t border-green-100 dark:border-green-900/30">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/30 rounded-full border border-green-200 dark:border-green-700/30 group hover:bg-green-100 dark:hover:bg-green-800/30 transition-all duration-300">
                      <Shield className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">ISO 14001 Certified</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/30 rounded-full border border-green-200 dark:border-green-700/30 group hover:bg-green-100 dark:hover:bg-green-800/30 transition-all duration-300">
                      <Award className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">Environmental Excellence</span>
                    </div>
                  </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="group p-3 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-gray-700/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Leaf className="w-5 h-5 text-green-600 group-hover:rotate-12 transition-transform" />
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-green-600 transition-colors">Sustainable Solutions</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Eco-friendly approaches</p>
                      </div>
                    </div>
                  </div>
                  <div className="group p-3 backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-gray-700/30">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Zap className="w-5 h-5 text-green-600 group-hover:rotate-12 transition-transform" />
                      </div>
                      <div>
                        <h3 className="font-semibold group-hover:text-green-600 transition-colors">Innovative Methods</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Cutting-edge practices</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-24 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {/* Large Decorative Elements */}
          <div className="absolute inset-0 opacity-[0.07]">
            <Trees className="absolute -top-12 -left-12 w-96 h-96 text-[#A8C6A1] transform rotate-12" />
            <Trees className="absolute -bottom-12 -right-12 w-96 h-96 text-[#A8C6A1] transform -rotate-12" />
          </div>

          {/* Left Side Leaves */}
          <div className="absolute left-0 inset-y-0 w-1/3">
            <Leaf className="absolute top-12 left-12 w-8 h-8 text-[#A8C6A1] opacity-20 animate-float-slow" />
            <TreePine className="absolute top-1/4 left-24 w-12 h-12 text-[#A8C6A1] opacity-15 animate-float-slow delay-200" />
            <Sprout className="absolute top-1/2 left-16 w-10 h-10 text-[#A8C6A1] opacity-20 animate-float-slow delay-300" />
            <Flower2 className="absolute bottom-1/4 left-20 w-6 h-6 text-[#A8C6A1] opacity-15 animate-float-slow delay-400" />
          </div>

          {/* Center Pattern */}
          <div className="absolute left-1/3 right-1/3 inset-y-0">
            <TreePine className="absolute top-16 left-1/2 w-10 h-10 text-[#A8C6A1] opacity-20 animate-float-medium transform -translate-x-1/2" />
            <Leaf className="absolute top-1/3 left-1/4 w-8 h-8 text-[#A8C6A1] opacity-15 animate-float-medium delay-150" />
            <Sprout className="absolute bottom-1/3 right-1/4 w-12 h-12 text-[#A8C6A1] opacity-20 animate-float-medium delay-300" />
            <Wind className="absolute bottom-24 left-1/2 w-8 h-8 text-[#A8C6A1] opacity-15 animate-float-medium delay-450" />
          </div>

          {/* Right Side Leaves */}
          <div className="absolute right-0 inset-y-0 w-1/3">
            <TreePine className="absolute top-20 right-16 w-10 h-10 text-[#A8C6A1] opacity-20 animate-float-fast" />
            <Leaf className="absolute top-1/3 right-24 w-8 h-8 text-[#A8C6A1] opacity-15 animate-float-fast delay-150" />
            <Sprout className="absolute bottom-1/2 right-12 w-12 h-12 text-[#A8C6A1] opacity-20 animate-float-fast delay-300" />
            <Flower2 className="absolute bottom-32 right-20 w-6 h-6 text-[#A8C6A1] opacity-15 animate-float-fast delay-450" />
          </div>

          {/* Additional Scattered Elements */}
          <div className="absolute inset-0">
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
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#A8C6A1]/20 backdrop-blur-sm border border-[#A8C6A1]/40 rounded-full hover:bg-[#A8C6A1]/30 transition-all duration-300 group">
              <TreePine className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span className="text-white text-sm font-semibold">Our Principles</span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-white mt-6">Our Core Values</h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8">Guiding principles that shape our commitment to environmental excellence and sustainable innovation.</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Excellence', desc: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.' },
              { icon: Recycle, title: 'Sustainability', desc: 'We are committed to promoting sustainable practices that benefit both the environment and society.' },
              { icon: Lightbulb, title: 'Innovation', desc: 'We embrace innovative approaches and technologies to solve complex environmental challenges.' },
              { icon: Shield, title: 'Integrity', desc: 'We maintain the highest standards of professional integrity and ethical conduct in all our work.' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group backdrop-blur-sm bg-white/10 dark:bg-white/5 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:bg-white/20 dark:hover:bg-white/10"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#A8C6A1]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:bg-[#A8C6A1]/20">
                  <value.icon className="w-8 h-8 text-white/90 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-white group-hover:text-[#A8C6A1] transition-colors">{value.title}</h3>
                <p className="text-gray-200 text-center group-hover:text-white transition-colors">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
            <Trees className="absolute -top-12 -left-12 w-96 h-96 text-green-800 transform rotate-12" />
            <Trees className="absolute -bottom-12 -right-12 w-96 h-96 text-green-800 transform -rotate-12" />
          </div>
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(46,125,50,0.05)_0%,transparent_50%)]" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={fadeIn}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-600/10 backdrop-blur-sm border border-green-600/20 rounded-full hover:bg-green-600/20 transition-all duration-300 group mb-6">
              <Users className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />
              <span className="text-green-600 text-sm font-semibold">Our Team</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate professionals dedicated to environmental conservation and sustainability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                  <div className="relative h-[280px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Hover Content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-white text-sm leading-relaxed">
                        {member.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-green-600 dark:text-green-400 font-medium mb-2">{member.role}</p>
                      <div className="h-1 w-12 bg-green-600/20 group-hover:w-full transition-all duration-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 w-full bg-gradient-to-br from-[#1a472a] to-[#2d3b2d] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          {/* Geometric Patterns */}
          <div className="absolute inset-0 opacity-[0.07]">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,198,161,0.1)_0%,transparent_50%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(168,198,161,0.05)_0%,transparent_50%)]" />
          </div>

          {/* Decorative Lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#A8C6A1] to-transparent" />
            <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#A8C6A1] to-transparent" />
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A8C6A1] to-transparent" />
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A8C6A1] to-transparent" />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0">
            <Leaf className="absolute top-20 left-[15%] w-6 h-6 text-[#A8C6A1] opacity-20 animate-float-slow" />
            <TreePine className="absolute bottom-32 left-[10%] w-8 h-8 text-[#A8C6A1] opacity-15 animate-float-medium" />
            <Sprout className="absolute top-40 right-[15%] w-6 h-6 text-[#A8C6A1] opacity-20 animate-float-fast" />
            <Flower2 className="absolute bottom-24 right-[10%] w-8 h-8 text-[#A8C6A1] opacity-15 animate-float-slow" />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#A8C6A1]/10 backdrop-blur-sm border border-[#A8C6A1]/30 rounded-full hover:bg-[#A8C6A1]/20 transition-all duration-300 group mb-6">
              <TreePine className="w-4 h-4 text-[#A8C6A1] group-hover:scale-110 transition-transform" />
              <span className="text-[#A8C6A1] text-sm font-semibold">FAQ</span>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions about our environmental consulting services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'What makes your environmental consulting approach unique?',
                answer: 'Our approach combines scientific expertise with innovative methodologies. We utilize advanced technologies and data-driven insights while maintaining a strong focus on sustainability and practical implementation.',
                icon: Lightbulb
              },
              {
                question: 'How do you ensure compliance with environmental regulations?',
                answer: 'We maintain up-to-date knowledge of environmental regulations and standards, utilizing ISO 14001 certified methodologies. Our team of experts conducts thorough assessments and provides detailed documentation to ensure full compliance.',
                icon: Shield
              },
              {
                question: 'What types of environmental assessments do you offer?',
                answer: 'We offer comprehensive environmental assessments including biodiversity assessments, carbon footprint analysis, ecological restoration planning, and ESG reporting. Each assessment is tailored to meet specific client needs and regulatory requirements.',
                icon: CheckCircle2
              },
              {
                question: 'How do you support businesses in achieving sustainability goals?',
                answer: 'We provide strategic guidance, implement sustainable practices, and develop customized action plans. Our team helps businesses integrate environmental considerations into their operations while maintaining operational efficiency.',
                icon: Recycle
              },
              {
                question: 'What is your experience in ecological restoration projects?',
                answer: 'Our team has extensive experience in ecological restoration, from habitat rehabilitation to ecosystem recovery. We employ scientific methodologies and monitor long-term success through detailed performance indicators.',
                icon: Sprout
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <button
                  className="w-full p-6 backdrop-blur-sm bg-white/5 hover:bg-white/10 rounded-2xl border border-[#A8C6A1]/10 hover:border-[#A8C6A1]/30 transition-all duration-300 text-left shadow-lg hover:shadow-xl"
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling;
                    const isExpanded = content?.classList.contains('max-h-96');
                    
                    // Reset all FAQ items
                    document.querySelectorAll('.faq-content').forEach(el => {
                      el.classList.remove('max-h-96', 'opacity-100', 'py-6');
                      el.classList.add('max-h-0', 'opacity-0', 'py-0');
                    });
                    
                    document.querySelectorAll('.faq-icon').forEach(el => {
                      el.classList.remove('rotate-45');
                    });
                    
                    // Toggle current FAQ item
                    if (!isExpanded) {
                      content?.classList.remove('max-h-0', 'opacity-0', 'py-0');
                      content?.classList.add('max-h-96', 'opacity-100', 'py-6');
                      e.currentTarget.querySelector('.faq-icon')?.classList.add('rotate-45');
                    }
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#A8C6A1]/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:bg-[#A8C6A1]/20">
                      <faq.icon className="w-5 h-5 text-[#A8C6A1]" />
                    </div>
                    <div className="flex-1 flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-white group-hover:text-[#A8C6A1] transition-colors pr-4">
                        {faq.question}
                      </h3>
                      <Plus className="w-5 h-5 text-[#A8C6A1] transition-transform duration-300 faq-icon flex-shrink-0" />
                    </div>
                  </div>
                </button>
                <div className="faq-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="px-20 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
} 