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
          description: "We&apos;ll get back to you soon.",
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
    <main className="flex min-h-screen flex-col items-center pt-[70px]">
      {/* Google Maps Section */}
      <div className="w-full relative z-20">
        <div className="h-[400px] shadow-lg">
          <CustomMap location={{ lat: 15.352333, lng: 75.098639 }} />
        </div>
      </div>

      {/* Contact Information Cards */}
      <section className="w-full relative bg-[#F3F8F1] -mt-10 z-10">
        <div className="absolute inset-x-0 top-0 h-32 bg-[#F3F8F1]" style={{ clipPath: 'ellipse(75% 100% at 50% 0%)' }}></div>
        {/* Enhanced layered background patterns */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.1]" />
        <div className="absolute inset-0 bg-[radial-gradient(#1B5E20_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.1]" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#1B5E20_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.08]" />
        <div className="absolute inset-0 bg-[radial-gradient(#2E7D32_2px,transparent_2px)] [background-size:40px_40px] opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F3F8F1]/50 via-[#F3F8F1] to-[#F3F8F1]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-24 pb-20">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center mb-4"
            >
              <motion.span 
                className="px-4 py-2 rounded-full text-sm font-semibold bg-[#E8F5E9] text-[#2E7D32] border border-[#2E7D32]/20 flex items-center gap-2 group hover:shadow-lg hover:shadow-[#2E7D32]/10"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "#E8F5E9",
                  transition: { type: "spring", stiffness: 400, damping: 10 }
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="relative"
                >
                  <Mail className="w-4 h-4 text-[#2E7D32]" />
                </motion.div>
                Contact Us
              </motion.span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              We&apos;re here to help with your environmental consulting needs. Reach out to us through any of the following channels.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-[#E8F5E9] via-[#C8E6C9] to-[#1B5E20] rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#E8F5E9] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-8 h-8 text-[#2E7D32]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  #27, Nehru Nagar, Gokul Road,<br />
                  Hubballi, Karnataka 580030
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-[#E8F5E9] via-[#C8E6C9] to-[#1B5E20] rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#E8F5E9] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-[#2E7D32]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Email Us</h3>
                <a 
                  href="mailto:info@oikosconsultants.com" 
                  className="text-[#2E7D32] hover:text-[#1B5E20] transition-colors duration-300 font-medium"
                >
                  info@oikosconsultants.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tl from-[#E8F5E9] via-[#C8E6C9] to-[#1B5E20] rounded-2xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#E8F5E9] mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-[#2E7D32]" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Call Us</h3>
                <a 
                  href="tel:+919049006216" 
                  className="text-[#2E7D32] hover:text-[#1B5E20] transition-colors duration-300 font-medium"
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
                <div className="h-2 bg-gradient-to-r from-[#1B5E20] to-[#66BB6A]"></div>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full transition-all duration-300 focus:ring-2 focus:ring-[#2E7D32]"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Your Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="w-full transition-all duration-300 focus:ring-2 focus:ring-[#2E7D32]"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-[#2E7D32]"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="w-full min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-[#2E7D32]"
                        placeholder="Your message here..."
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#2E7D32] hover:bg-[#1B5E20] text-white transition-colors duration-300"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Business Hours Card */}
              <Card className="bg-white dark:bg-gray-800 shadow-xl overflow-hidden group">
                <div className="h-2 bg-gradient-to-r from-[#1B5E20] to-[#66BB6A]"></div>
                <CardContent className="p-8">
                  <div className="text-center relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[#E8F5E9] mb-6 group-hover:scale-105 transition-transform duration-300">
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
                      <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-[#2E7D32] to-[#66BB6A] bg-clip-text text-transparent">Business Hours</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-gray-600 dark:text-gray-300 font-medium">Monday - Friday:</span>
                          <span className="text-[#2E7D32] font-semibold">9:00 AM - 6:00 PM IST</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-gray-600 dark:text-gray-300 font-medium">Saturday - Sunday:</span>
                          <span className="text-[#2E7D32] font-semibold">Closed</span>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          For urgent inquiries outside business hours, please email us and we&apos;ll respond as soon as possible.
                        </p>
                      </div>
                    </motion.div>
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-[#E8F5E9] rounded-full opacity-20 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-32 h-32 bg-[#66BB6A] rounded-full opacity-10 blur-3xl"></div>
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
                <div className="h-2 bg-gradient-to-r from-[#66BB6A] to-[#1B5E20]"></div>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6">Schedule a Meeting</h2>
                  <CalendlyEmbed />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 