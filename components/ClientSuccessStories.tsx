'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const successStories = [
  {
    title: "Wildlife Conservation Impact",
    description: "Protected 50+ endangered species through habitat restoration",
    metric: "2,000+ acres",
    image: "/images/success/wildlife.jpg",
    className: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Carbon Footprint Reduction",
    description: "Helped major corporation achieve carbon neutrality",
    metric: "-75% emissions",
    image: "/images/success/carbon.jpg",
  },
  {
    title: "Water Conservation",
    description: "Implemented water recycling systems",
    metric: "500M gallons saved",
    image: "/images/success/water.jpg",
  },
  {
    title: "Sustainable Agriculture",
    description: "Transformed traditional farming practices",
    metric: "30% yield increase",
    image: "/images/success/agriculture.jpg",
    className: "md:col-span-2"
  },
  {
    title: "Renewable Energy",
    description: "Solar implementation for industrial client",
    metric: "100% renewable",
    image: "/images/success/renewable.jpg",
  }
]

export default function ClientSuccessStories() {
  return (
    <section className="py-24 bg-[#F8FAF9]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 text-[#1A1C1B]">
            Success Stories
          </h2>
          <p className="text-xl text-[#2C302E] max-w-2xl mx-auto">
            Real impact through sustainable solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {successStories.map((story, index) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-xl transition-all duration-300 ${story.className || ''}`}
            >
              <div className="absolute inset-0">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60" />
              </div>
              
              <div className="relative p-6 h-full flex flex-col justify-end text-white">
                <div className="absolute top-4 right-4 bg-green-500 rounded-full px-3 py-1 text-sm font-medium">
                  {story.metric}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#A8C6A1] transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-neutral-200">
                  {story.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1 text-[#A8C6A1] text-sm font-medium">
                    View Case Study <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 