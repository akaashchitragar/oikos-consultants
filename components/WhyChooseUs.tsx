'use client'

import { motion } from 'framer-motion'
import { Shield, Leaf, LineChart, Users, CheckCircle2 } from 'lucide-react'

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Proven Expertise",
    description: "Over a decade of experience in environmental consulting with a track record of successful projects across India.",
    color: "from-emerald-500/30 via-emerald-500/20 to-emerald-500/5"
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Sustainable Solutions",
    description: "Innovative and practical approaches that balance environmental protection with business growth.",
    color: "from-green-500/30 via-green-500/20 to-green-500/5"
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Data-Driven Approach",
    description: "Comprehensive analysis and reporting using advanced tools and methodologies for accurate results.",
    color: "from-teal-500/30 via-teal-500/20 to-teal-500/5"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Expert Team",
    description: "Multidisciplinary team of environmental scientists, ecologists, and sustainability experts.",
    color: "from-lime-500/30 via-lime-500/20 to-lime-500/5"
  }
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#F5F7F6]">
      {/* Background Patterns */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F7F6] via-[#F8FAF9] to-[#F5F7F6]" />
        
        {/* Circular Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.08]" 
             style={{
               backgroundImage: 'radial-gradient(circle at 1px 1px, #2E7D32 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }} 
        />
        
        {/* Large Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.05]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2E7D32] to-transparent rounded-full blur-3xl" />
        </div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] opacity-[0.05]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2E7D32] to-transparent rounded-full blur-3xl" />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [-20, 20],
            rotate: [0, 10],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 left-[20%] w-32 h-32 border border-[#2E7D32]/10 rounded-full"
        />
        <motion.div
          animate={{
            y: [20, -20],
            rotate: [10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-20 right-[20%] w-40 h-40 border border-[#2E7D32]/10 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-block"
          >
            <div className="px-4 py-1 bg-[#2E7D32]/5 backdrop-blur-sm border border-[#2E7D32]/20 rounded-full shadow-sm hover:shadow transition-all duration-300">
              <div className="inline-flex items-center gap-2">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                </motion.div>
                <span className="text-[#2E7D32] text-sm font-medium">Why Choose Us</span>
              </div>
            </div>
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 text-[#1A1C1B] mt-6">
            Expertise That Makes a <span className="text-[#2E7D32]">Difference</span>
          </h2>
          <p className="text-xl text-[#2C302E]/80 max-w-2xl mx-auto">
            We combine deep environmental knowledge with innovative solutions to deliver lasting impact
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative z-10 h-full p-8 bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-sm border border-[#2E7D32]/10 rounded-2xl 
                            hover:bg-white hover:border-[#2E7D32]/20 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-30 
                                group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                <div className="relative z-10">
                  <div className={`w-12 h-12 mb-4 rounded-xl bg-white/80 flex items-center justify-center
                                text-[#2E7D32] group-hover:scale-110 group-hover:bg-white transition-all duration-300 shadow-sm`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1C1B] group-hover:text-[#2E7D32] transition-colors mb-2">{feature.title}</h3>
                  <p className="text-[#2C302E] leading-relaxed group-hover:text-[#1A1C1B]">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 