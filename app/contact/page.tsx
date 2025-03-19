'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { 
  Mail, Phone, MapPin, Clock, Send, Calendar, ArrowRight, ExternalLink, Zap, Globe2, Leaf, TreePine, Plus, Award, Factory, Trees
} from 'lucide-react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'

// Add custom styles for text shadows
const customStyles = `
  .text-shadow-sm {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  .text-shadow-md {
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }
  
  .text-shadow-lg {
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  }
`

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
    addressLocality: 'Hubli',
    addressRegion: 'Karnataka',
    postalCode: '580030',
    addressCountry: 'IN'
  }
}

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Use full URL to ensure it works in all environments
      const apiUrl = `${window.location.origin}/api/contact`
      console.log('Submitting form to:', apiUrl)
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const responseData = await response.json()
      
      if (response.ok) {
        console.log('Form submission successful:', responseData)
        toast({
          title: "Message Sent Successfully!",
          description: (
            <div className="flex items-center">
              <div className="mr-3 h-8 w-8 flex-shrink-0 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="animate-check h-6 w-6 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                      className="opacity-0 animate-check-stroke"
                    />
                  </svg>
                  <div className="absolute inset-0 animate-circle">
                    <div className="h-full w-full rounded-full border-2 border-green-500 opacity-0" />
                  </div>
                </div>
              </div>
              <p>Thank you for reaching out! We'll get back to you soon.</p>
            </div>
          ),
          variant: "default",
          className: "bg-green-50 border-green-200",
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        console.error('Form submission failed:', responseData)
        throw new Error(responseData.error || 'Failed to send message')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Script
        id="schema-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Add custom styles */}
      <style jsx global>{`
        ${customStyles}
        
        @keyframes check {
          from {
            transform: scale(0);
            opacity: 1;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes check-stroke {
          from {
            stroke-dashoffset: 24;
            opacity: 0;
          }
          to {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }
        
        @keyframes circle {
          from {
            transform: scale(0);
            opacity: 1;
          }
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-check {
          animation: check 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
        
        .animate-check-stroke {
          animation: check-stroke 0.3s cubic-bezier(0.65, 0, 0.35, 1) 0.2s forwards;
          stroke-dasharray: 24;
        }
        
        .animate-circle {
          animation: circle 0.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }
      `}</style>
      
      <main className="min-h-screen bg-white">
        {/* Modern Split Hero Section */}
        <section className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content Column */}
            <div className="bg-white py-16 lg:py-24 px-6 lg:px-12 xl:px-16 flex items-center">
              <div className="max-w-xl mx-auto lg:mx-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-8 hover:bg-green-200 transition-all duration-300 hover:shadow-md"
                >
                  <MapPin className="w-3.5 h-3.5 mr-1.5" />
                  <span>Hubli, Karnataka, India</span>
                </motion.div>
                
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6"
                >
                  Let's discuss your <span className="text-[#1B5E20] relative group">
                    environmental goals
                    <span className="absolute left-0 right-0 bottom-1 h-0.5 bg-[#2E7D32] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                  </span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed"
                >
                  We're committed to providing sustainable solutions for your environmental challenges. Reach out to start a conversation.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4 mb-8"
                >
                  <a 
                    href="mailto:info@oikosconsultants.com" 
                    className="inline-flex items-center justify-center px-5 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md group hover:border-[#2E7D32]"
                  >
                    <Mail className="w-4 h-4 mr-2 group-hover:text-[#2E7D32] transition-colors duration-300" />
                    <span className="group-hover:text-[#2E7D32] transition-colors duration-300">info@oikosconsultants.com</span>
                  </a>
                  <a 
                    href="tel:+919049006216" 
                    className="inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-white rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md relative group overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      <Phone className="w-4 h-4 mr-2" />
                      +91 90490 06216
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E20] to-[#2E7D32] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex items-center text-sm text-gray-500 group hover:text-[#2E7D32] transition-colors duration-300"
                >
                  <Clock className="w-4 h-4 mr-2 text-[#2E7D32] group-hover:scale-110 transition-transform duration-300" />
                  <span>Mon-Fri: 9:00 AM - 6:00 PM IST</span>
                </motion.div>
              </div>
            </div>
            
            {/* Right Image Column */}
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                <Image
                  src="/images/contact-hero.jpg"
                  alt="Environmental Consulting"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Contact Form and Info Section */}
        <section className="py-16 bg-[#E8F0E8]">
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-10"
            >
              {/* Calendar Widget */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="px-6 pt-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#A8C6A1]/10 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-[#2E7D32]" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 relative inline-block">
                          Schedule a Meeting With Us
                          <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#2E7D32] transform origin-left scale-x-100" />
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">Select a date and time that works for you</p>
                      </div>
                    </div>

                    <div className="h-[597px] overflow-hidden rounded-lg border border-gray-100">
                      <div style={{width:"100%", height:"100%", overflow:"hidden"}} id="my-cal-inline"></div>
                      <Script id="cal-inline-script" type="text/javascript">
                        {`
                          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
                          Cal("init", "schedule-a-meeting", {origin:"https://cal.com"});

                          Cal.ns["schedule-a-meeting"]("inline", {
                            elementOrSelector:"#my-cal-inline",
                            config: {"layout":"month_view"},
                            calLink: "oikos-consultants/schedule-a-meeting",
                          });

                          Cal.ns["schedule-a-meeting"]("ui", {
                            "hideEventTypeDetails": false,
                            "layout":"month_view",
                            "hideBranding": true,
                            styles: {
                              branding: {
                                brandColor: "#2E7D32",
                              },
                              enabledDateButton: {
                                backgroundColor: "#2E7D32",
                              },
                              selectedDateButton: {
                                backgroundColor: "#1B5E20",
                              }
                            }
                          });

                          // Add custom CSS to hide the Cal.com footer and enhance the widget
                          setTimeout(() => {
                            const style = document.createElement('style');
                            style.textContent = \`
                              /* Hide Cal.com footer */
                              #my-cal-inline iframe {
                                height: calc(100% + 50px) !important;
                                margin-bottom: -50px !important;
                              }
                              #my-cal-inline [data-cal-namespace="schedule-a-meeting"] > div:last-child {
                                display: none !important;
                              }
                              /* Hide any Cal.com branding elements */
                              #my-cal-inline [data-cal-namespace="schedule-a-meeting"] [aria-label="Powered by Cal.com"],
                              #my-cal-inline [data-cal-namespace="schedule-a-meeting"] a[href*="cal.com"] {
                                display: none !important;
                              }
                              /* Ensure the calendar takes full height */
                              #my-cal-inline [data-cal-namespace="schedule-a-meeting"] > div:first-child {
                                height: 100% !important;
                              }
                              /* Enhance buttons and interactive elements */
                              #my-cal-inline button {
                                transition: all 0.3s ease !important;
                                font-weight: 500 !important;
                              }
                              #my-cal-inline button:hover {
                                transform: translateY(-2px) !important;
                                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
                              }
                              /* Improve form fields */
                              #my-cal-inline input, #my-cal-inline select, #my-cal-inline textarea {
                                transition: all 0.3s ease !important;
                                border-color: #e5e7eb !important;
                                border-radius: 0.5rem !important;
                              }
                              #my-cal-inline input:focus, #my-cal-inline select:focus, #my-cal-inline textarea:focus {
                                border-color: #2E7D32 !important;
                                box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.2) !important;
                              }
                              /* Enhance calendar day hover states */
                              #my-cal-inline [role="gridcell"] button:hover {
                                background-color: rgba(46, 125, 50, 0.1) !important;
                              }
                              /* Add subtle animation to the calendar */
                              #my-cal-inline [data-cal-namespace="schedule-a-meeting"] {
                                animation: calFadeIn 0.5s ease-in-out;
                              }
                              @keyframes calFadeIn {
                                from { opacity: 0; transform: translateY(10px); }
                                to { opacity: 1; transform: translateY(0); }
                              }
                              /* Style the submit button to match website theme */
                              #my-cal-inline button[type="submit"], 
                              #my-cal-inline button[data-testid="confirm-button"] {
                                background: linear-gradient(to right, #2E7D32, #1B5E20) !important;
                                transition: all 0.3s ease !important;
                                border-radius: 0.5rem !important;
                                font-weight: 600 !important;
                                padding: 0.75rem 1.5rem !important;
                              }
                              #my-cal-inline button[type="submit"]:hover, 
                              #my-cal-inline button[data-testid="confirm-button"]:hover {
                                background: linear-gradient(to right, #1B5E20, #2E7D32) !important;
                                transform: translateY(-2px) !important;
                                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
                              }
                              /* Add a subtle border to the calendar container */
                              #my-cal-inline [data-cal-namespace="schedule-a-meeting"] > div:first-child {
                                border: none !important;
                                border-radius: 0.5rem !important;
                              }
                              /* Enhance the month navigation */
                              #my-cal-inline [data-testid="calendar-header"] {
                                padding: 1rem !important;
                                background: #F8FAF8 !important;
                                border-bottom: 1px solid rgba(46, 125, 50, 0.1) !important;
                              }
                              #my-cal-inline [data-testid="calendar-header"] button {
                                color: #2E7D32 !important;
                                font-weight: 600 !important;
                              }
                              /* Style the time slots */
                              #my-cal-inline [data-testid="time-slots-wrapper"] {
                                padding: 1rem !important;
                              }
                              #my-cal-inline [data-testid="time-slots-wrapper"] button {
                                border-radius: 0.5rem !important;
                                border: 1px solid rgba(46, 125, 50, 0.1) !important;
                                padding: 0.75rem 1rem !important;
                                margin-bottom: 0.5rem !important;
                              }
                              #my-cal-inline [data-testid="time-slots-wrapper"] button:hover {
                                border-color: #2E7D32 !important;
                                color: #2E7D32 !important;
                              }
                              /* Style the selected date */
                              #my-cal-inline [aria-selected="true"] {
                                background: #2E7D32 !important;
                                color: white !important;
                                font-weight: 600 !important;
                              }
                              /* Add hover effect to navigation arrows */
                              #my-cal-inline [data-testid="calendar-header"] button:hover {
                                background: rgba(46, 125, 50, 0.1) !important;
                                transform: translateY(0) !important;
                              }
                              /* Style the current month text */
                              #my-cal-inline [data-testid="calendar-header"] h2 {
                                font-weight: 600 !important;
                                color: #1B5E20 !important;
                              }
                              /* Style the weekday headers */
                              #my-cal-inline [role="row"]:first-child {
                                color: #2E7D32 !important;
                                font-weight: 600 !important;
                              }
                              /* Add subtle hover effect to available dates */
                              #my-cal-inline [role="gridcell"] button:not([disabled]):hover {
                                background: rgba(46, 125, 50, 0.1) !important;
                                color: #2E7D32 !important;
                              }
                            \`;
                            document.head.appendChild(style);
                            
                            // Additional check to hide footer elements that might load later
                            const observer = new MutationObserver((mutations) => {
                              const footerElements = document.querySelectorAll('[data-cal-namespace="schedule-a-meeting"] [aria-label="Powered by Cal.com"], [data-cal-namespace="schedule-a-meeting"] a[href*="cal.com"]');
                              footerElements.forEach(el => {
                                el.style.display = 'none';
                              });
                              
                              // Add hover animations to buttons that might be added dynamically
                              const buttons = document.querySelectorAll('[data-cal-namespace="schedule-a-meeting"] button');
                              buttons.forEach(button => {
                                if (!button.classList.contains('hover-enhanced')) {
                                  button.classList.add('hover-enhanced');
                                  button.addEventListener('mouseenter', () => {
                                    button.style.transform = 'translateY(-2px)';
                                    button.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
                                  });
                                  button.addEventListener('mouseleave', () => {
                                    button.style.transform = 'translateY(0)';
                                    button.style.boxShadow = 'none';
                                  });
                                }
                              });
                            });
                            
                            const calContainer = document.querySelector('#my-cal-inline');
                            if (calContainer) {
                              observer.observe(calContainer, { childList: true, subtree: true });
                            }
                          }, 1000);
                        `}
                      </Script>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:max-w-xl w-full"
              >
                <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <div className="p-6 sm:p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 relative inline-block">
                      Send us a message
                      <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#2E7D32] transform origin-left scale-x-100" />
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full border-gray-300 focus:border-[#2E7D32] focus:ring-[#2E7D32] transition-all duration-300 hover:border-[#A8C6A1]"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full border-gray-300 focus:border-[#2E7D32] focus:ring-[#2E7D32] transition-all duration-300 hover:border-[#A8C6A1]"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border-gray-300 focus:border-[#2E7D32] focus:ring-[#2E7D32] transition-all duration-300 hover:border-[#A8C6A1]"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="How can we help you?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full border-gray-300 focus:border-[#2E7D32] focus:ring-[#2E7D32] transition-all duration-300 hover:border-[#A8C6A1]"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Please provide details about your inquiry..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="min-h-[150px] border-gray-300 focus:border-[#2E7D32] focus:ring-[#2E7D32] transition-all duration-300 hover:border-[#A8C6A1]"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] hover:from-[#1B5E20] hover:to-[#2E7D32] text-white py-3 rounded-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md relative group overflow-hidden"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center relative z-10">
                            Send Message
                            <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        )}
                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Button>
                    </form>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-[#E8F0E8]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#A8C6A1]/10 backdrop-blur-sm border border-[#A8C6A1]/30 rounded-full hover:bg-[#A8C6A1]/20 transition-all duration-300 group mb-6">
                <TreePine className="w-4 h-4 text-[#2E7D32] group-hover:scale-110 transition-transform" />
                <span className="text-[#2E7D32] text-sm font-semibold">FAQ</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our environmental consulting services
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: 'What services do you offer?',
                  answer: 'We provide comprehensive environmental consulting services including environmental impact assessments, sustainability planning, ecological restoration, and compliance management.',
                  icon: Leaf
                },
                {
                  question: 'How quickly can you start a new project?',
                  answer: 'Typically, we can begin work on new projects within 1-2 weeks of contract finalization, depending on the scope and our current workload.',
                  icon: Zap
                },
                {
                  question: 'What is your typical project timeline?',
                  answer: 'Project timelines vary based on complexity and scope. Small assessments may take 2-4 weeks, while comprehensive environmental impact studies can span 3-6 months.',
                  icon: Clock
                },
                {
                  question: 'What makes you different?',
                  answer: 'Our unique blend of local expertise, innovative solutions, and commitment to sustainability sets us apart. We focus on practical, long-term environmental solutions.',
                  icon: Award
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <button
                    className="w-full p-6 bg-white hover:bg-gray-50 rounded-2xl border border-[#A8C6A1]/10 hover:border-[#A8C6A1]/30 transition-all duration-300 text-left shadow-sm hover:shadow-md"
                    onClick={(e) => {
                      const content = e.currentTarget.nextElementSibling;
                      const isExpanded = content?.classList.contains('max-h-96');
                      
                      // Reset all FAQ items
                      document.querySelectorAll('.faq-content').forEach(el => {
                        el.classList.remove('max-h-96', 'opacity-100', 'py-6');
                        el.classList.add('max-h-0', 'opacity-0', 'py-0');
                      });
                      
                      document.querySelectorAll('.faq-icon').forEach(el => {
                        el.classList.remove('rotate-45');
                      });
                      
                      // Toggle current FAQ item
                      if (!isExpanded) {
                        content?.classList.remove('max-h-0', 'opacity-0', 'py-0');
                        content?.classList.add('max-h-96', 'opacity-100', 'py-6');
                        e.currentTarget.querySelector('.faq-icon')?.classList.add('rotate-45');
                      }
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#A8C6A1]/10 flex items-center justify-center group-hover:scale-110 transition-all duration-300 group-hover:bg-[#A8C6A1]/20">
                        <faq.icon className="w-5 h-5 text-[#2E7D32]" />
                      </div>
                      <div className="flex-1 flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#2E7D32] transition-colors pr-4">
                          {faq.question}
                        </h3>
                        <Plus className="w-5 h-5 text-[#2E7D32] transition-transform duration-300 faq-icon flex-shrink-0" />
                      </div>
                    </div>
                  </button>
                  <div className="faq-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out">
                    <div className="px-20 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 