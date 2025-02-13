'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const logos = [
  { src: '/images/clients/kci.png', alt: 'KCI' },
  { src: '/images/clients/kiocl.png', alt: 'KIOCL' },
  { src: '/images/clients/essar.png', alt: 'Essar' },
  { src: '/images/clients/geer.png', alt: 'GEER Foundation' },
  { src: '/images/clients/powergrid.png', alt: 'Powergrid' },
  { src: '/images/clients/forest.png', alt: 'Forest Department' },
  { src: '/images/clients/isl.png', alt: 'ISL' },
  { src: '/images/clients/kci-2.png', alt: 'KCI' },
]

export default function LogoScroll() {
  return (
    <div className="relative w-full overflow-hidden bg-white/5 backdrop-blur-sm py-8">
      <div className="flex gap-8 items-center">
        {/* First set of logos */}
        <motion.div
          className="flex gap-8 items-center"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative w-32 h-16 flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain p-2 filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Duplicate set of logos for seamless loop */}
        <motion.div
          className="flex gap-8 items-center absolute left-full"
          animate={{
            x: [-1920, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="relative w-32 h-16 flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-colors duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain p-2 filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
} 