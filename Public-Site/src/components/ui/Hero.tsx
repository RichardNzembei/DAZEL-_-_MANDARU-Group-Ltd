import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button.tsx';
import { ArrowRight, Sparkles } from 'lucide-react';
export function Hero() {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 md:pt-28 md:pb-16 lg:pt-20 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0A4D68]/5 -skew-x-12 translate-x-1/4 hidden md:block" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#088395]/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} className="text-center lg:text-left order-2 lg:order-1">
            <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 text-[#0A4D68] text-xs sm:text-sm font-medium mb-4 md:mb-6">
              <Sparkles size={14} />
              <span>Made with Love, for the Family</span>
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1A1A1A] leading-tight mb-4 md:mb-6">
              Where Clean <br />
              <span className="text-[#0A4D68]">Meets Care.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Experience the perfect balance of gentle skin care and effective
              cleaning with DAZEL® products. Proudly made in Kibwezi, Kenya.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 md:gap-4">
              <Button size="lg" onClick={scrollToProducts} className="w-full sm:w-auto">
                Discover Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('about')?.scrollIntoView({
              behavior: 'smooth'
            })} className="w-full sm:w-auto">
                Our Story
              </Button>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="relative order-1 lg:order-2">
            <div className="relative aspect-square max-w-sm sm:max-w-md mx-auto lg:max-w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A4D68] to-[#088395] rounded-2xl md:rounded-3xl rotate-3 md:rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center border border-gray-100">
                <img src="/logo.jpg" alt="DAZEL Brand Logo" className="w-full h-full object-cover" />
              </div>
              <motion.div initial={{
              y: 20,
              opacity: 0
            }} animate={{
              y: 0,
              opacity: 1
            }} transition={{
              delay: 0.8
            }} className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-xl border border-gray-100 hidden sm:block">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="bg-green-100 p-1.5 md:p-2 rounded-full text-green-700">
                    <Sparkles size={16} className="md:w-5 md:h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">
                      Trusted Brand
                    </p>
                    <p className="text-sm font-bold text-[#0A4D68]">
                      100% Quality
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}