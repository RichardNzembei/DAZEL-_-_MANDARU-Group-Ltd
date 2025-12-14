import React from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Products } from '../components/Products';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
export function Home() {
  return <div className="min-h-screen bg-white font-sans text-[#1A1A1A]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>;
}