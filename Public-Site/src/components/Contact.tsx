import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from './ui/Button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  return <section id="contact" className="py-12 md:py-16 lg:py-20 bg-gray-50">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-3 md:mb-4">
          Get in Touch
        </h2>
        <div className="h-1 bg-[#088395] w-20 mx-auto mb-4 md:mb-6" />
        <p className="text-base md:text-lg text-gray-600 px-4">
          Have questions about our products or want to place an order? We'd
          love to hear from you.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        <div className="space-y-4 md:space-y-6 lg:col-span-1">
          <motion.div whileHover={{
            y: -5
          }} className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3 md:gap-4">
            <div className="bg-blue-50 p-2.5 md:p-3 rounded-lg text-[#0A4D68] flex-shrink-0">
              <Phone size={20} className="md:w-6 md:h-6" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-[#1A1A1A] mb-1 text-sm md:text-base">
                Call Us
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mb-1">
                Mon-Fri from 8am to 5pm
              </p>
              <a
                  href="tel:+254112430829"
                  className="text-[#088395] font-semibold hover:underline text-sm md:text-base break-all block"
              >
                +254 112 430 829
              </a>
            </div>
          </motion.div>
          <motion.div whileHover={{
            y: -5
          }} className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3 md:gap-4">
            <div className="bg-blue-50 p-2.5 md:p-3 rounded-lg text-[#0A4D68] flex-shrink-0">
              <Mail size={20} className="md:w-6 md:h-6" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-[#1A1A1A] mb-1 text-sm md:text-base">
                Email Us
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mb-1">
                For inquiries and orders
              </p>
              <a
                  href="mailto:info@dazelworld.co.ke"
                  className="text-[#088395] font-semibold hover:underline text-sm md:text-base break-all block"
              >
                info@dazelworld.co.ke
              </a>
            </div>
          </motion.div>
          <motion.div whileHover={{
            y: -5
          }} className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-gray-100 flex items-start gap-3 md:gap-4">
            <div className="bg-blue-50 p-2.5 md:p-3 rounded-lg text-[#0A4D68] flex-shrink-0">
              <MapPin size={20} className="md:w-6 md:h-6" />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-[#1A1A1A] mb-1 text-sm md:text-base">
                Visit Us
              </h3>
              <p className="text-gray-600 text-xs md:text-sm">
                Kibwezi, Kenya
              </p>
              <p className="text-gray-400 text-xs mt-1">
                P.O. Box coming soon
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="lg:col-span-2 bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8">
          <div className="space-y-5 md:space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 md:py-3.5 rounded-lg border border-gray-200 focus:border-[#088395] focus:ring-2 focus:ring-[#088395]/20 outline-none transition-all text-base"
                    placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 md:py-3.5 rounded-lg border border-gray-200 focus:border-[#088395] focus:ring-2 focus:ring-[#088395]/20 outline-none transition-all text-base"
                    placeholder="+254..."
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 md:py-3.5 rounded-lg border border-gray-200 focus:border-[#088395] focus:ring-2 focus:ring-[#088395]/20 outline-none transition-all text-base"
                  placeholder="john@example.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 md:py-3.5 rounded-lg border border-gray-200 focus:border-[#088395] focus:ring-2 focus:ring-[#088395]/20 outline-none transition-all resize-none text-base"
                  placeholder="How can we help you?"
              />
            </div>
            <Button
                onClick={handleSubmit}
                className="w-full sm:w-auto min-w-[160px]"
            >
              Send Message
              <Send size={16} className="ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
}