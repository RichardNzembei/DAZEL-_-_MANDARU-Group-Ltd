import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return <footer className="bg-[#1A1A1A] text-white pt-12 md:pt-16 pb-6 md:pb-8">
    <div className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
        <div className="space-y-3 md:space-y-4 sm:col-span-2 lg:col-span-1">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight">
            DAZEL<span className="text-[#088395]">®</span>
          </h3><br/>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            Where Clean Meets Care. Bringing high-quality detergents and skin
            care products to every Kenyan home. Made With Love.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#hero" className="hover:text-[#088395] transition-colors inline-block py-1">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#088395] transition-colors inline-block py-1">
                About Us
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#088395] transition-colors inline-block py-1">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#088395] transition-colors inline-block py-1">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="py-1">Kibwezi, Kenya</li>
            <li className="py-1">
              <a
                  href="tel:+254112430829"
                  className="hover:text-[#088395] transition-colors"
              >
                +254 112 430 829
              </a>
            </li>
            <li className="py-1 break-all">
              <a
                  href="mailto:info@dazelworld.co.ke"
                  className="hover:text-[#088395] transition-colors"
              >
                info@dazelworld.co.ke
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">
            Follow Us
          </h4>
          <div className="flex gap-3 md:gap-4">
            <a
                href="https://www.facebook.com/share/1Cjofjtmez/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2.5 md:p-3 rounded-full hover:bg-[#088395] transition-colors"
                aria-label="Facebook"
            >
              <Facebook size={18} className="md:w-5 md:h-5" />
            </a>
            <a
                href="https://www.instagram.com/dazelworld"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2.5 md:p-3 rounded-full hover:bg-[#088395] transition-colors"
                aria-label="Instagram"
            >
              <Instagram size={18} className="md:w-5 md:h-5" />
            </a>
            <a
                href="https://x.com/dazelworld"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2.5 md:p-3 rounded-full hover:bg-[#088395] transition-colors"
                aria-label="Twitter"
            >
              <Twitter size={18} className="md:w-5 md:h-5" />
            </a>
            <a
                href="https://www.tiktok.com/@dazelworld?_r=1&_t=ZM-92C5K6BXY4a"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2.5 md:p-3 rounded-full hover:bg-[#088395] transition-colors"
                aria-label="TikTok"
            >
              <svg width="18" height="18" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-gray-500 text-xs md:text-sm">
        <p>
          &copy; {new Date().getFullYear()} DAZEL Detergents & Skin Care. All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>;
}