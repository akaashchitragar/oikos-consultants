'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Quote, MessageSquare } from 'lucide-react'
import CountUp from 'react-countup'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    quote: "Oikos Consultants transformed our environmental strategy. Their expertise in BRSR compliance was invaluable for our organization's sustainable growth.",
    author: "Rajesh Kumar",
    position: "Sustainability Director",
    company: "PowerGrid Corporation",
    image: "/images/testimonials/testimonial1.jpg",
    className: "md:col-span-3 md:row-span-1"
  },
  {
    quote: "99",
    isMetric: true,
    subText: "Client Satisfaction Rate",
    className: "md:col-span-1 md:row-span-1 flex items-center justify-center"
  },
  {
    quote: "Their biodiversity assessment helped us implement sustainable practices that made a real difference.",
    author: "Dr. Sarah Chen",
    position: "Environmental Lead",
    company: "Global Green Solutions",
    image: "/images/testimonials/testimonial2.jpg",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    quote: "Oikos Consultants provided exceptional support in our sustainability initiatives. Their thorough analysis and innovative strategies enabled us to enhance our environmental impact significantly. They guided us in developing effective waste management systems and promoting renewable energy solutions that have already begun to yield positive outcomes.",
    author: "Amit Patel",
    position: "Project Manager",
    company: "ESSAR Group",
    image: "/images/testimonials/testimonial3.jpg",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    quote: "Their innovative approach to ecological restoration has set new standards in the industry. The results were remarkable.",
    author: "Dr. Maya Singh",
    position: "Research Director",
    company: "EcoTech Solutions",
    image: "/images/testimonials/testimonial7.jpg",
    className: "md:col-span-1 md:row-span-2"
  },
  {
    quote: "Outstanding expertise in sustainability audits. They helped us achieve our environmental goals ahead of schedule.",
    author: "Priya Sharma",
    position: "Chief Sustainability Officer",
    company: "Indian Steel Limited",
    image: "/images/testimonials/testimonial4.jpg",
    className: "md:col-span-2 md:row-span-1"
  },
  {
    quote: "Their GHG inventorisation process was thorough and insightful. The detailed analysis helped us optimize our operations.",
    author: "Michael Zhang",
    position: "Operations Director",
    company: "KCI Industries",
    image: "/images/testimonials/testimonial5.jpg",
    className: "md:col-span-2 md:row-span-1"
  }
]

export default function Testimonials() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="py-16 bg-[#F8FAF9]">
      <div className="container mx-auto px-4">
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
                  <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
                </motion.div>
                <span className="text-[#2E7D32] text-sm font-medium">Client Stories</span>
              </div>
            </div>
          </motion.div>
          <h2 className="text-4xl font-bold mb-4 text-[#1A1C1B] mt-6">
            Our <span className="text-[#2E7D32]">Testimonials</span>
          </h2>
          <p className="text-xl text-[#2C302E] max-w-2xl mx-auto">
            Discover how our clients have successfully met their sustainability objectives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={`testimonial-${index}`}
              initial={isClient ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              whileInView={isClient ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl transition-all duration-300 
                         ${testimonial.className} p-8
                         ${testimonial.isMetric ? 
                           'bg-white text-6xl font-bold text-[#1A1C1B]' : 
                           'bg-white hover:bg-gradient-to-br hover:from-white hover:to-[#E8F5E9]'}
                         border border-neutral-100 hover:border-green-100
                         shadow-sm hover:shadow-lg`}
            >
              {!testimonial.isMetric && (
                <>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                    <Quote className="w-12 h-12 text-[#2E7D32] rotate-180" />
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                    <Quote className="w-12 h-12 text-[#2E7D32]" />
                  </div>
                </>
              )}
              {testimonial.isMetric && isClient ? (
                <div className="text-center relative z-10">
                  <div className="text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] transition-all duration-300 group-hover:from-[#2E7D32] group-hover:to-[#1B5E20]">
                    <CountUp
                      end={parseInt(testimonial.quote)}
                      duration={2.5}
                      suffix="%"
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                  <p className="text-sm text-[#2C302E] group-hover:text-[#1B5E20] transition-colors duration-300">{testimonial.subText}</p>
                </div>
              ) : testimonial.isMetric ? (
                <div className="text-center relative z-10">
                  <div className="text-7xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#1B5E20] to-[#2E7D32]">
                    {testimonial.quote}%
                  </div>
                  <p className="text-sm text-[#2C302E]">{testimonial.subText}</p>
                </div>
              ) : testimonial.author ? (
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-neutral-100 group-hover:border-green-200 transition-colors duration-300">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        fill
                        sizes="48px"
                        priority={index < 2}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A1C1B] group-hover:text-[#1B5E20] transition-colors duration-300">{testimonial.author}</h4>
                      <p className="text-sm text-[#2E7D32]">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-[#2C302E] text-lg leading-relaxed group-hover:text-[#1A1C1B] transition-colors duration-300">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-4">
                    <p className="text-sm text-[#2C302E]/60 group-hover:text-[#2E7D32]/70 transition-colors duration-300">{testimonial.position}</p>
                  </div>
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 