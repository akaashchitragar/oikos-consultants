'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { 
  Mail, Phone, MapPin, Clock, Send,
  Leaf, TreePine, Wind, Flower2, Globe,
  Recycle, Sprout, Cloud, Droplets, Sun
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import CalendlyEmbed from '@/components/CalendlyEmbed'
import CustomMap from '@/components/CustomMap'
import Script from 'next/script'

// Add Schema.org JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Oikos Consultants',
  description: 'Leading environmental consulting firm specializing in sustainability solutions and ecological services.',
  url: 'https://oikosconsultants.com',
  logo: 'https://oikosconsultants.com/images/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+919049006216',
    contactType: 'customer service',
    email: 'info@oikosconsultants.com',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi', 'kn']
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '#27, Nehru Nagar, Gokul Road',
    addressLocality: 'Hubballi',
    addressRegion: 'Karnataka',
    postalCode: '580030',
    addressCountry: 'IN'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 15.352333,
    longitude: 75.098639
  },
  sameAs: [
    'https://www.linkedin.com/company/oikos-consultants',
    'https://twitter.com/oikosconsultants'
  ],
  potentialAction: {
    '@type': 'ScheduleAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://calendly.com/oikos-consultants',
      actionPlatform: [
        'http://schema.org/DesktopWebPlatform',
        'http://schema.org/MobileWebPlatform'
      ]
    },
    result: {
      '@type': 'Schedule',
      scheduleTimezone: 'Asia/Kolkata'
    }
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  ],
  areaServed: {
    '@type': 'Country',
    name: 'India'
  }
}

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you soon.",
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive"
      })
    }
  }

  return (
    <>
      <Script
        id="schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col items-center pt-[70px]" role="main" aria-labelledby="main-heading">
        {/* Google Maps Section */}
        <div className="w-full relative z-20">
          <div className="h-[400px] shadow-lg" role="region" aria-label="Office location on map">
            <CustomMap location={{ lat: 15.352333, lng: 75.098639 }} />
          </div>
        </div>

        {/* Contact Information Cards */}
        <section 
          className="w-full relative bg-gradient-to-br from-green-100 via-green-50/80 to-transparent -mt-10 z-10 overflow-hidden"
          role="region" 
          aria-labelledby="contact-section-title"
        >
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.06]" />
          <div className="absolute inset-0 bg-[radial-gradient(#3b8249_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.06]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#3b8249_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.04]" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/20 to-white/90" />

          {/* Existing background patterns with reduced opacity */}
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1] dark:opacity-[0.05]" />
          <div className="absolute inset-0 bg-[radial-gradient(#1B5E20_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.08]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#1B5E20_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.06]" />
          <div className="absolute inset-0 bg-[radial-gradient(#2E7D32_2px,transparent_2px)] [background-size:40px_40px] opacity-[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-100/50 via-gray-100 to-gray-100" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-24 pb-20">
            <div className="text-center mb-20">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1B5E20] bg-opacity-10 mb-6 border border-[#4ADE80]/20 shadow-sm hover:shadow-md hover:bg-[#1B5E20]/20 hover:border-[#4ADE80]/30 transition-all duration-300 group cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <Mail className="w-3.5 h-3.5 text-[#2E7D32] transition-transform duration-300 group-hover:scale-110" />
                </motion.div>
                <span className="text-[#2E7D32] text-sm font-medium group-hover:translate-x-0.5 transition-all duration-300">Contact Us</span>
              </motion.div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="relative"
                >
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1A1C1B] tracking-tight leading-[1.1]">
                    Get in <span className="relative inline-block text-[#2E7D32]">
                      <span className="relative z-10 px-2">Touch</span>
                      <div className="absolute -inset-x-3 -inset-y-2 bg-[#2E7D32]/10 rounded-2xl transform -rotate-1"></div>
                    </span>
                  </h1>
                </motion.div>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg md:text-xl text-[#2C302E]/80 max-w-2xl mx-auto leading-relaxed font-light mt-6"
                >
                  We&apos;re here to help with your environmental consulting needs. Reach out to us through any of the following channels.
                </motion.p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20" role="list">
              {/* Visit Us Card */}
              <motion.div
                role="listitem"
                aria-labelledby="visit-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative group h-full"
                tabIndex={0}
              >
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-green-100 hover:border-green-200 overflow-hidden h-full">
                  {/* Enhanced Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-50" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-200 to-green-100" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500">
                        <MapPin className="w-8 h-8 text-[#2E7D32]" />
                      </div>
                      <h3 id="visit-title" className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
                      <address className="text-gray-600 not-italic text-base leading-relaxed mb-6">
                        #27, Nehru Nagar, Gokul Road,<br />
                        Hubballi, Karnataka 580030
                      </address>
                      
                      <a 
                        href="https://maps.google.com/?q=15.352333,75.098639" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-4 py-2 bg-[#2E7D32] text-white rounded-full text-sm font-medium hover:bg-[#1B5E20] transition-colors duration-300 group/link shadow-md hover:shadow-lg"
                      >
                        Get Directions
                        <svg className="w-4 h-4 ml-2 transform transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Email Us Card */}
              <motion.div
                role="listitem"
                aria-labelledby="email-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative group h-full"
                tabIndex={0}
              >
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-green-100 hover:border-green-200 overflow-hidden h-full">
                  {/* Enhanced Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-50" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-200 to-green-100" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500">
                        <Mail className="w-8 h-8 text-[#2E7D32]" />
                      </div>
                      <h3 id="email-title" className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
                      <a 
                        href="mailto:info@oikosconsultants.com"
                        className="text-gray-600 text-base hover:text-[#2E7D32] transition-colors duration-300 mb-6"
                      >
                        info@oikosconsultants.com
                      </a>
                      
                      <a 
                        href="mailto:info@oikosconsultants.com" 
                        className="inline-flex items-center px-4 py-2 bg-[#2E7D32] text-white rounded-full text-sm font-medium hover:bg-[#1B5E20] transition-colors duration-300 group/link shadow-md hover:shadow-lg"
                      >
                        Send Email
                        <svg className="w-4 h-4 ml-2 transform transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Call Us Card */}
              <motion.div
                role="listitem"
                aria-labelledby="call-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative group h-full"
                tabIndex={0}
              >
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-green-100 hover:border-green-200 overflow-hidden h-full">
                  {/* Enhanced Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-50" />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-200 to-green-100" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] p-4 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500">
                        <Phone className="w-8 h-8 text-[#2E7D32]" />
                      </div>
                      <h3 id="call-title" className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                      <a 
                        href="tel:+919049006216"
                        className="text-gray-600 text-base hover:text-[#2E7D32] transition-colors duration-300 mb-6"
                      >
                        +91 90490 06216
                      </a>
                      
                      <a 
                        href="tel:+919049006216" 
                        className="inline-flex items-center px-4 py-2 bg-[#2E7D32] text-white rounded-full text-sm font-medium hover:bg-[#1B5E20] transition-colors duration-300 group/link shadow-md hover:shadow-lg"
                      >
                        Call Now
                        <svg className="w-4 h-4 ml-2 transform transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form and Calendly Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="grid gap-8"
              >
                <Card className="bg-white dark:bg-gray-800 shadow-xl overflow-hidden">
                  <div className="h-2 bg-gradient-to-r from-[#1B5E20] to-[#66BB6A]" aria-hidden="true" />
                  <CardContent className="p-8">
                    <h2 id="contact-form-title" className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                    <form 
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                      role="form"
                      aria-labelledby="contact-form-title"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label 
                            htmlFor="name" 
                            className="text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Your Name <span className="text-red-500" aria-hidden="true">*</span>
                          </label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="w-full transition-all duration-300 focus:ring-2 focus:ring-[#2E7D32]"
                            placeholder="John Doe"
                            aria-required="true"
                            aria-invalid={!formData.name}
                          />
                        </div>
                        <div className="space-y-2">
                          <label 
                            htmlFor="email" 
                            className="text-sm font-medium text-gray-700 dark:text-gray-300"
                          >
                            Your Email <span className="text-red-500" aria-hidden="true">*</span>
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="w-full transition-all duration-300 focus:ring-2 focus:ring-[#2E7D32]"
                            placeholder="john@example.com"
                            aria-required="true"
                            aria-invalid={!formData.email}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label 
                          htmlFor="subject" 
                          className="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Subject <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <Input
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                          className="w-full transition-all duration-300 focus:ring-2 focus:ring-[#2E7D32]"
                          placeholder="How can we help?"
                          aria-required="true"
                          aria-invalid={!formData.subject}
                        />
                      </div>
                      <div className="space-y-2">
                        <label 
                          htmlFor="message" 
                          className="text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          Message <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          className="w-full min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-[#2E7D32]"
                          placeholder="Your message here..."
                          aria-required="true"
                          aria-invalid={!formData.message}
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white transition-colors duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-[#2E7D32]"
                        aria-label="Send message"
                      >
                        <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Business Hours Card */}
                <Card className="bg-white dark:bg-gray-800 shadow-xl overflow-hidden group">
                  <div className="h-2 bg-gradient-to-r from-[#1B5E20] to-[#66BB6A]" aria-hidden="true" />
                  <CardContent className="p-8">
                    <div className="text-center relative">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#E8F5E9] mb-6" aria-hidden="true">
                        <motion.div
                          animate={{
                            rotate: 360
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                          className="relative"
                        >
                          <Clock className="w-8 h-8 text-[#2E7D32]" />
                        </motion.div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                      >
                        <h3 id="business-hours-title" className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] bg-clip-text text-transparent">Business Hours</h3>
                        <dl className="space-y-3">
                          <div className="flex items-center justify-center space-x-2">
                            <dt className="text-gray-600 dark:text-gray-300 font-medium">Monday - Friday:</dt>
                            <dd className="text-[#2E7D32] font-semibold">9:00 AM - 6:00 PM IST</dd>
                          </div>
                          <div className="flex items-center justify-center space-x-2">
                            <dt className="text-gray-600 dark:text-gray-300 font-medium">Saturday - Sunday:</dt>
                            <dd className="text-[#2E7D32] font-semibold">Closed</dd>
                          </div>
                        </dl>
                        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            For urgent inquiries outside business hours, please email us and we&apos;ll respond as soon as possible.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Calendly Widget */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Card className="bg-white dark:bg-gray-800 shadow-xl overflow-hidden h-full">
                  <div className="h-2 bg-gradient-to-r from-[#66BB6A] to-[#1B5E20]" aria-hidden="true" />
                  <CardContent className="p-8">
                    <h2 id="schedule-title" className="text-2xl font-semibold mb-6">Schedule a Meeting</h2>
                    <div role="complementary" aria-labelledby="schedule-title">
                      <CalendlyEmbed />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 