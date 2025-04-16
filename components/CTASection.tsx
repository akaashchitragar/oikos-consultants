'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Sprout, TreePine, Wind, Flower2, Trees, Rocket } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Large Decorative Elements */}
        <div className="absolute inset-0 opacity-[0.07]">
          <Trees className="absolute -top-12 -left-12 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 text-[#A8C6A1] transform rotate-12" />
          <Trees className="absolute -bottom-12 -right-12 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 text-[#A8C6A1] transform -rotate-12" />
        </div>

        {/* Floating Elements - Left Side - Hide on mobile, show on tablet and up */}
        <div className="absolute left-0 inset-y-0 w-1/3 hidden sm:block">
          <Leaf className="absolute top-12 left-12 w-6 sm:w-8 h-6 sm:h-8 text-white opacity-20 animate-float-slow" />
          <Sprout className="absolute top-1/4 left-24 w-8 sm:w-12 h-8 sm:h-12 text-white opacity-15 animate-float-slow delay-200" />
          <Wind className="absolute top-1/2 left-16 w-6 sm:w-10 h-6 sm:h-10 text-white opacity-20 animate-float-slow delay-300 transform rotate-45" />
          <Flower2 className="absolute bottom-1/4 left-20 w-4 sm:w-6 h-4 sm:h-6 text-white opacity-15 animate-float-slow delay-400" />
        </div>

        {/* Floating Elements - Center */}
        <div className="absolute left-1/6 sm:left-1/3 right-1/6 sm:right-1/3 inset-y-0">
          <TreePine className="absolute top-16 left-1/2 w-6 sm:w-10 h-6 sm:h-10 text-white opacity-20 animate-float-medium transform -translate-x-1/2" />
          <Leaf className="absolute top-1/3 left-1/4 w-5 sm:w-8 h-5 sm:h-8 text-white opacity-15 animate-float-medium delay-150" />
          <Sprout className="absolute bottom-1/3 right-1/4 w-8 sm:w-12 h-8 sm:h-12 text-white opacity-20 animate-float-medium delay-300" />
          <Wind className="absolute bottom-24 left-1/2 w-5 sm:w-8 h-5 sm:h-8 text-white opacity-15 animate-float-medium delay-450 transform -translate-x-1/2 rotate-12" />
        </div>

        {/* Floating Elements - Right Side - Hide on mobile, show on tablet and up */}
        <div className="absolute right-0 inset-y-0 w-1/3 hidden sm:block">
          <TreePine className="absolute top-20 right-16 w-6 sm:w-10 h-6 sm:h-10 text-white opacity-20 animate-float-fast" />
          <Flower2 className="absolute top-1/3 right-24 w-5 sm:w-8 h-5 sm:h-8 text-white opacity-15 animate-float-fast delay-150" />
          <Leaf className="absolute bottom-1/2 right-12 w-8 sm:w-12 h-8 sm:h-12 text-white opacity-20 animate-float-fast delay-300" />
          <Sprout className="absolute bottom-32 right-20 w-4 sm:w-6 h-4 sm:h-6 text-white opacity-15 animate-float-fast delay-450" />
        </div>

        {/* Additional Scattered Elements */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute top-1/4 left-1/2 w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full opacity-30"
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
            className="absolute bottom-1/3 right-1/3 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full opacity-20"
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

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div 
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-block"
          >
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full hover:bg-white/15 transition-all duration-300">
              <Rocket className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-white" />
              <span className="text-white text-xs sm:text-sm font-medium">Get Started</span>
            </div>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 mt-4 sm:mt-6">
            Start Your <span className="text-[#A8C6A1]">Journey</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-neutral-100">
            Join us in creating sustainable solutions for a better future. Schedule a consultation today.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-white text-[#2E7D32] rounded-full font-semibold hover:bg-neutral-100 transition-all group shadow-lg hover:shadow-xl text-sm sm:text-base"
          >
            Schedule Consultation
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

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
    </section>
  )
} 