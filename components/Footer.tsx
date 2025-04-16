'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Clock, Globe2 } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-[#0A1F14] text-white safe-padding-bottom">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 py-10 lg:py-16">
          {/* Company Info */}
          <div className="lg:col-span-4 space-y-6 md:space-y-8">
            <Link href="/" className="block">
              <div className="relative w-[180px] h-[54px] sm:w-[200px] sm:h-[60px]">
                <Image
                  src="/main-white.png"
                  alt="Oikos Consultants Logo"
                  fill
                  sizes="(max-width: 640px) 180px, 200px"
                  priority
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>
            <p className="text-neutral-300 max-w-xs text-sm sm:text-base leading-relaxed">
              Leading environmental consulting firm specializing in sustainability solutions and ecological services.
            </p>
            <div className="flex flex-col gap-1">
              <a 
                href="mailto:info@oikosconsultants.com"
                className="text-neutral-300 hover:text-[#A8C6A1] transition-colors inline-flex items-center gap-3 text-xs sm:text-sm bg-[#0A2A1B] hover:bg-[#0F3524] px-4 sm:px-6 py-3 sm:py-3.5 w-full"
              >
                <Mail size={16} className="text-[#A8C6A1] flex-shrink-0" />
                <span className="truncate">info@oikosconsultants.com</span>
              </a>
              <a 
                href="tel:+919049006216"
                className="text-neutral-300 hover:text-[#A8C6A1] transition-colors inline-flex items-center gap-3 text-xs sm:text-sm bg-[#0A2A1B] hover:bg-[#0F3524] px-4 sm:px-6 py-3 sm:py-3.5 w-full"
              >
                <Phone size={16} className="text-[#A8C6A1] flex-shrink-0" />
                <span>+91 90490 06216</span>
              </a>
            </div>
          </div>

          {/* Services and Quick Links */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 md:gap-12">
            {/* Our Services */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Globe2 size={18} className="text-[#A8C6A1]" />
                Our Services
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { label: 'BRSR Compliance', path: '/services/brsr-compliance' },
                  { label: 'Sustainability Audits', path: '/services/sustainability-audits' },
                  { label: 'Biodiversity Assessment', path: '/services/biodiversity-assessment' },
                  { label: 'Wildlife Conservation', path: '/services/wildlife-conservation' },
                  { label: 'GHG Inventorisation', path: '/services/ghg-inventorisation' },
                  { label: 'Ecological Restoration', path: '/services/ecological-restoration' },
                  { label: 'Forest Clearance Services', path: '/services/forest-clearance-services' }
                ].map((service) => (
                  <li key={service.label}>
                    <Link 
                      href={service.path}
                      className="text-neutral-300 hover:text-[#A8C6A1] transition-colors text-sm sm:text-base flex items-center gap-2 group"
                    >
                      <span className="text-[#A8C6A1] transition-transform group-hover:translate-x-1">›</span>
                      {service.label} 
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Globe2 size={18} className="text-[#A8C6A1]" />
                Quick Links
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'About Us', path: '/about' },
                  { label: 'Contact Us', path: '/contact' },
                  { label: 'Projects', path: '/projects' }
                ].map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.path}
                      className="text-neutral-300 hover:text-[#A8C6A1] transition-colors text-sm sm:text-base flex items-center gap-2 group"
                    >
                      <span className="text-[#A8C6A1] transition-transform group-hover:translate-x-1">›</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                <Globe2 size={18} className="text-[#A8C6A1]" />
                Contact Info
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-neutral-300">
                  <Clock size={18} className="text-[#A8C6A1] flex-shrink-0" />
                  <p>Open Hours: 9:00 am - 6:00 pm</p>
                </div>
                <div className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-neutral-300">
                  <MapPin size={18} className="text-[#A8C6A1] flex-shrink-0 mt-1" />
                  <address className="not-italic leading-relaxed">
                    #27, Nehru Nagar, Gokul Road,<br />
                    Hubballi, Karnataka, Bharat 580030
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1A2F23] py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm md:text-base">
          <p className="text-neutral-300">
            © Copyright {currentYear}. All rights reserved.
          </p>
          <p className="text-neutral-300">
            <Link href="/" className="text-[#A8C6A1] hover:text-white transition-colors">Oikos Consultants</Link>
            . Designed by <a href="https://webart4u.com" target="_blank" rel="noopener noreferrer" className="text-[#A8C6A1] hover:text-white transition-colors">Webart4U</a>
          </p>
        </div>
      </div>
    </footer>
  )
} 