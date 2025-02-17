'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
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
          className="w-full relative bg-[#F3F8F1] -mt-10 z-10"
          role="region" 
          aria-labelledby="contact-section-title"
        >
          <div className="absolute inset-x-0 top-0 h-32 bg-[#F3F8F1]" style={{ clipPath: 'ellipse(75% 100% at 50% 0%)' }} />
          {/* Enhanced layered background patterns */}
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1]" />
          <div className="absolute inset-0 bg-[radial-gradient(#1B5E20_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.1]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#1B5E20_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.08]" />
          <div className="absolute inset-0 bg-[radial-gradient(#2E7D32_2px,transparent_2px)] [background-size:40px_40px] opacity-[0.06]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F3F8F1]/50 via-[#F3F8F1] to-[#F3F8F1]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-24 pb-20">
            <div className="text-center mb-20">
              <motion.h1
                id="main-heading"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                tabIndex={0}
              >
                Get in Touch
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                tabIndex={0}
              >
                We&apos;re here to help with your environmental consulting needs. Reach out to us through any of the following channels.
              </motion.p>
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
                className="relative group"
                tabIndex={0}
              >
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#E8F5E9] mb-6" aria-hidden="true">
                    <MapPin className="w-8 h-8 text-[#2E7D32]" />
                  </div>
                  <h3 id="visit-title" className="text-xl font-semibold mb-4">Visit Us</h3>
                  <address className="text-gray-600 dark:text-gray-300 not-italic">
                    #27, Nehru Nagar, Gokul Road,<br />
                    Hubballi, Karnataka 580030
                  </address>
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
                className="relative group"
                tabIndex={0}
              >
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#E8F5E9] mb-6" aria-hidden="true">
                    <Mail className="w-8 h-8 text-[#2E7D32]" />
                  </div>
                  <h3 id="email-title" className="text-xl font-semibold mb-4">Email Us</h3>
                  <a 
                    href="mailto:info@oikosconsultants.com" 
                    className="text-[#2E7D32] hover:text-[#1B5E20] transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:ring-offset-2 rounded-sm"
                    aria-label="Send email to info@oikosconsultants.com"
                  >
                    info@oikosconsultants.com
                  </a>
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
                className="relative group"
                tabIndex={0}
              >
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#E8F5E9] mb-6" aria-hidden="true">
                    <Phone className="w-8 h-8 text-[#2E7D32]" />
                  </div>
                  <h3 id="call-title" className="text-xl font-semibold mb-4">Call Us</h3>
                  <a 
                    href="tel:+919049006216" 
                    className="text-[#2E7D32] hover:text-[#1B5E20] transition-colors duration-300 font-medium focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:ring-offset-2 rounded-sm"
                    aria-label="Call us at +91 90490 06216"
                  >
                    +91 90490 06216
                  </a>
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