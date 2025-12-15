import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './Button.tsx';
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#hero'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Products',
    href: '#products'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 md:py-3' : 'bg-transparent py-4 md:py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" onClick={e => {
          e.preventDefault();
          scrollToSection('#hero');
        }} className="flex items-center gap-2">
            <span className={`text-xl sm:text-2xl font-bold tracking-tight ${isScrolled ? 'text-[#0A4D68]' : 'text-[#0A4D68]'}`}>
              DAZEL<span className="text-[#088395]">®</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => {
            e.preventDefault();
            scrollToSection(link.href);
          }} className="text-sm font-medium text-gray-700 hover:text-[#088395] transition-colors py-2">
                {link.name}
              </a>)}
            <Button variant="primary" size="sm" onClick={() => scrollToSection('#contact')}>
              Get in Touch
            </Button>
          </nav>
          <button className="md:hidden p-2 text-gray-700 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-white border-t shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map(link => <a key={link.name} href={link.href} onClick={e => {
            e.preventDefault();
            scrollToSection(link.href);
          }} className="text-base font-medium text-gray-700 hover:text-[#088395] py-3 min-h-[44px] flex items-center">
                  {link.name}
                </a>)}
              <Button variant="primary" className="w-full justify-center mt-2 min-h-[44px]" onClick={() => scrollToSection('#contact')}>
                Get in Touch
              </Button>
            </div>
          </motion.div>}
      </AnimatePresence>
    </header>;
}