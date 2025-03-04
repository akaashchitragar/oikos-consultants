'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState, memo } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { 
    href: '/services', 
    label: 'Our Services',
    dropdown: [
      { href: '/services/brsr-compliance', label: 'BRSR Compliance' },
      { href: '/services/sustainability-audits', label: 'Sustainability Audits' },
      { href: '/services/biodiversity-assessment', label: 'Biodiversity Assessment' },
      { href: '/services/wildlife-conservation', label: 'Wildlife Conservation' },
      { href: '/services/ghg-inventorisation', label: 'GHG Inventorisation' },
      { href: '/services/ecological-restoration', label: 'Ecological Restoration' },
      { href: '/services/native-species', label: 'Native Species' },
    ]
  },
  { href: '/projects', label: 'Our Projects' },
]

const NavContent = memo(function NavContent({ 
  mounted, 
  scrollProgress, 
  isMenuOpen, 
  setIsMenuOpen 
}: { 
  mounted: boolean
  scrollProgress: number
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void 
}) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <div className="flex ml-0 pl-0">
        <Link 
          href="/" 
          className="flex-shrink-0 flex items-center relative pl-0"
          aria-label="Home"
        >
          <div 
            style={{ 
              width: mounted ? (180 - (scrollProgress * 30)) : 180,
              height: mounted ? (50 - (scrollProgress * 5)) : 50,
              position: 'relative', 
              transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)' 
            }}
          >
            <Image
              src="/main-logo.png"
              alt="Oikos Consultants Logo"
              fill
              sizes="180px"
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <div 
            key={link.href}
            className="relative"
            onMouseEnter={() => setActiveDropdown(link.href)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              href={link.href}
              className="text-[#2C302E] hover:text-[#2E7D32] font-medium transition-all duration-300 text-[15px] antialiased inline-flex items-center gap-1.5 relative group"
            >
              <span className="relative">
                {link.label}
              </span>
              {link.dropdown && link.label !== 'Our Services' && (
                <ChevronDown 
                  size={14} 
                  className={`transform transition-transform duration-300 ${
                    activeDropdown === link.href ? 'rotate-180 text-[#2E7D32]' : ''
                  }`} 
                />
              )}
            </Link>
            {link.dropdown && activeDropdown === link.href && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-72 z-50"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div className="bg-white rounded-2xl shadow-lg border border-[#2E7D32]/10 overflow-hidden">
                  <div className="py-2">
                    {link.dropdown.map((item, idx) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-3 px-5 py-2.5 text-[#2C302E] hover:text-[#2E7D32] hover:bg-[#2E7D32]/5 transition-all duration-200 text-[14px] group relative"
                        role="menuitem"
                      >
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.2, delay: idx * 0.05 }}
                          className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]/40 group-hover:bg-[#2E7D32] transition-colors duration-200"
                        />
                        <motion.span
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                        >
                          {item.label}
                        </motion.span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <Link
          href="/contact"
          className="relative px-5 py-2.5 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 text-[15px] ml-4 antialiased overflow-hidden group"
        >
          <span className="relative z-10">Get In Touch</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </div>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2 text-[#2C302E] hover:text-[#2E7D32] transition-colors relative group"
        aria-expanded={isMenuOpen}
        aria-label="Toggle menu"
      >
        <div className="absolute inset-0 bg-[#2E7D32]/10 rounded-lg scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </>
  )
})

const MobileMenu = memo(function MobileMenu({
  isMenuOpen,
  setIsMenuOpen
}: {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <div 
      className={`
        md:hidden fixed inset-x-0 top-[65px] bg-white
        transition-all duration-500 ease-in-out border-b border-neutral-200
        ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
      `}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
    >
      <div className="px-4 py-6 space-y-4">
        {navLinks.map((link) => (
          <div key={link.href}>
            {link.dropdown ? (
              <div>
                <button
                  onClick={() => setExpandedItem(expandedItem === link.href ? null : link.href)}
                  className="flex items-center justify-between w-full text-[#2C302E] hover:text-[#2E7D32] font-medium py-2 transition-all duration-300 group"
                  aria-expanded={expandedItem === link.href}
                >
                  <span className="relative">
                    {link.label}
                  </span>
                  <ChevronDown 
                    size={16} 
                    className={`transform transition-transform duration-300 ${
                      expandedItem === link.href ? 'rotate-180 text-[#2E7D32]' : ''
                    }`} 
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedItem === link.href ? 'auto' : 0,
                    opacity: expandedItem === link.href ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pl-4 space-y-2 mt-2">
                    {link.dropdown.map((item, idx) => (
                      <motion.div
                        key={item.href}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className="block text-[#2C302E] hover:text-[#2E7D32] py-2 transition-colors text-sm group relative"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="relative">
                            {item.label}
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ) : (
              <Link
                href={link.href}
                className="block text-[#2C302E] hover:text-[#2E7D32] font-medium py-2 transition-all duration-300 group relative"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative">
                  {link.label}
                </span>
              </Link>
            )}
          </div>
        ))}
        <Link
          href="/contact"
          className="block w-full px-6 py-3 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white rounded-full font-medium text-center transition-all duration-300 relative group overflow-hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="relative z-10">Get In Touch</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </div>
    </div>
  )
})

export default function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      const progress = Math.min(Math.max(window.scrollY / 100, 0), 1)
      setScrollProgress(progress)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [])

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <div 
        style={{
          width: 'auto',
          maxWidth: '850px',
          borderRadius: '9999px',
          transform: mounted ? `scale(${1 - (scrollProgress * 0.05)})` : 'scale(1)',
          opacity: 1,
          transition: 'all 700ms cubic-bezier(0.4, 0, 0.2, 1)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          background: '#FFFFFF',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
          paddingLeft: '0.5rem'
        }}
        className={`
          transform-gpu antialiased
          transition-[transform,opacity] duration-700 ease-in-out
          mt-4
        `}
      >
        <div className={`
          px-4 pl-2 mx-auto
          transition-all duration-700 ease-in-out
        `}>
          <div className="h-[65px] flex items-center justify-between">
            <NavContent 
              mounted={mounted}
              scrollProgress={scrollProgress}
              isMenuOpen={isMenuOpen}
              setIsMenuOpen={setIsMenuOpen}
            />
          </div>
        </div>
      </div>
      <MobileMenu 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </div>
  )
} 