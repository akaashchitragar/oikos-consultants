'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Building2 } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

const organizations = [
  { name: 'Partner 1', logo: '/images/partners/partner1.png' },
  { name: 'Partner 2', logo: '/images/partners/partner2.png' },
  { name: 'Partner 3', logo: '/images/partners/partner3.png' },
  { name: 'Partner 4', logo: '/images/partners/partner4.png' },
  { name: 'Partner 5', logo: '/images/partners/partner5.png' },
  { name: 'Partner 6', logo: '/images/partners/partner6.png' },
  { name: 'Partner 7', logo: '/images/partners/partner7.png' },
  { name: 'Partner 8', logo: '/images/partners/partner8.png' },
  { name: 'Partner 9', logo: '/images/partners/partner9.png' },
  { name: 'Partner 10', logo: '/images/partners/partner10.png' },
]

export default function TrustedOrganizations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);
  const scrollSpeed = 0.5; // pixels per frame - adjust for speed
  const logoWidth = 196; // 180px width + 16px gap
  const totalWidth = organizations.length * logoWidth;
  
  useEffect(() => {
    let animationId: number;
    let lastTimestamp: number;
    
    const step = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      
      // Update scroll position
      setScrollX(prevScrollX => {
        let newScrollX = prevScrollX - scrollSpeed * deltaTime / 16; // normalize to ~60fps
        
        // Reset when we've scrolled one full set of logos
        if (Math.abs(newScrollX) >= totalWidth) {
          newScrollX = 0;
        }
        
        return newScrollX;
      });
      
      animationId = requestAnimationFrame(step);
    };
    
    animationId = requestAnimationFrame(step);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [totalWidth]);
  
  // Create three sets of logos for seamless scrolling
  const allLogos = [...organizations, ...organizations, ...organizations];

  return (
    <section className="py-8 sm:py-10 bg-white">
      <div className="container-fluid mx-auto px-4 max-w-[2000px]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8"
        >
          <motion.div 
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="inline-block"
          >
            <div className="px-3 sm:px-4 py-1 bg-[#2E7D32]/5 backdrop-blur-sm border border-[#2E7D32]/20 rounded-full shadow-sm hover:shadow transition-all duration-300">
              <div className="inline-flex items-center gap-1.5 sm:gap-2">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2E7D32]" />
                </motion.div>
                <span className="text-[#2E7D32] text-xs sm:text-sm font-medium">Our Partners</span>
              </div>
            </div>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-[#1A1C1B] mt-4 sm:mt-5">
            Our <span className="text-[#2E7D32]">Partners</span>
          </h2>
          <p className="text-base sm:text-lg text-[#2C302E] max-w-2xl mx-auto px-2">
            We are proud to partner with renowned companies and institutions committed to sustainability.
          </p>
        </motion.div>

        {/* Partners Scroll */}
        <div className="relative w-full overflow-hidden py-6 sm:py-8">
          <div className="absolute left-0 top-6 sm:top-8 bottom-6 sm:bottom-8 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-6 sm:top-8 bottom-6 sm:bottom-8 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex overflow-hidden">
            <div
              ref={containerRef}
              className="flex gap-3 sm:gap-4 items-center py-4 sm:py-6 px-2 sm:px-4"
              style={{
                width: "max-content",
                paddingLeft: '2rem',
                paddingRight: '2rem',
                transform: `translateX(${scrollX}px)`,
                willChange: 'transform', // Optimize for animation performance
              }}
            >
              {allLogos.map((org, index) => (
                <div 
                  key={`${org.name}-${index}`}
                  className="flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px] h-[70px] sm:h-[80px] md:h-[90px] relative bg-white rounded-lg shadow-md hover:shadow-xl p-3 sm:p-4 group hover:-translate-y-1 border border-gray-100 hover:border-green-100 mx-1"
                  style={{ 
                    filter: 'grayscale(100%) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
                    transition: 'all 0.3s ease',
                    margin: '6px sm:8px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))';
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/0 to-green-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  <Image
                    src={org.logo}
                    alt={org.name}
                    fill
                    className="object-contain p-2 sm:p-3 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 140px, (max-width: 768px) 160px, 180px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 