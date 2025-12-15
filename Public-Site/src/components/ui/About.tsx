import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Award, Shield, Leaf, Users } from 'lucide-react';
const coreValues = [{
  icon: Target,
  title: 'Intentional Excellence',
  description: 'Every formulation, process, and decision is purpose-driven.'
}, {
  icon: Shield,
  title: 'Product Integrity',
  description: 'Safety, performance, and compliance are non-negotiable.'
}, {
  icon: Leaf,
  title: 'Responsible Manufacturing',
  description: 'We operate ethically, efficiently, and with environmental responsibility.'
}, {
  icon: Users,
  title: 'Professional Discipline',
  description: 'Structure, accountability, and consistency guide our operations.'
}];
export function About() {
  return <section id="about" className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-3 md:mb-4">
            About DAZEL®
          </motion.h2>
          <motion.div initial={{
          opacity: 0,
          width: 0
        }} whileInView={{
          opacity: 1,
          width: '80px'
        }} viewport={{
          once: true
        }} className="h-1 bg-[#088395] mx-auto mb-4 md:mb-6" />
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="text-base md:text-lg text-gray-600 leading-relaxed px-4">
            DAZEL® is the registered flagship brand of all Dazel Detergents &
            Skin Care products, offering a full range of affordable,
            high-quality hygiene, cleaning and personal care solutions. We
            deliver effective products that enhance daily life and provide
            consistent value to consumers.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16 max-w-5xl mx-auto">
          {/* Vision */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="bg-gradient-to-br from-[#0A4D68] to-[#088395] rounded-xl md:rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Compass size={24} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-blue-50 leading-relaxed">
                To be the leading brand in regional hygiene and personal care,
                delivering affordable, high-quality and effective products that
                enhance daily life.
              </p>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }} className="bg-gradient-to-br from-[#088395] to-[#0A4D68] rounded-xl md:rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Our Mission
              </h3>
              <p className="text-blue-50 leading-relaxed">
                To manufacture and distribute high-quality products through
                intentional formulation, operational excellence, and responsible
                practices.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="max-w-6xl mx-auto">
          <motion.h3 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-2xl md:text-3xl font-bold text-center text-[#1A1A1A] mb-8 md:mb-12">
            Our Core Values
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreValues.map((value, index) => <motion.div key={value.title} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="p-5 md:p-6 rounded-xl md:rounded-2xl bg-blue-50/50 border border-blue-100/50 text-center group hover:bg-blue-50 hover:border-blue-100 transition-all duration-300">
                <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm text-[#0A4D68] mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={24} />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-[#1A1A1A] mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </div>
    </section>;
}