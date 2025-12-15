import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Droplets, Sparkles, Baby, Package } from 'lucide-react';
import { Button } from './Button';

const products = [{
  name: 'DAZEL® Cream Multipurpose Bar Soap',
  sizes: ['1kg', '600g'],
  icon: Sparkles,
  color: 'bg-[#088395]',
  features: ['Rich, stable lather', 'Effective cleansing action', 'Gentle on skin and fabrics', 'Suitable for both bathing and laundry'],
  image: '/img/creamBarSoap.jpeg',
  featured: true
}, {
  name: 'DAZEL® Naturals',
  subtitle: 'Body Oils, Hair Oils & Exotic Soaps',
  icon: Droplets,
  color: 'bg-gradient-to-br from-purple-600 to-pink-500',
  features: ['Purely natural ingredients', 'Carefully crafted formulations', 'Healthy, glowing skin', 'Vibrant, nourished hair', 'Safe for family use (babies 3+ months)'],
  image: '/img/velvetnaurish.jpeg',
  featured: false,
  special: true
}, {
  name: 'DAZEL® Fresh Powder Detergent',
  sizes: ['100g', '250g', '500g', '1kg', '5kg', '10kg'],
  icon: Package,
  color: 'bg-blue-600',
  features: ['Fine, free-flowing texture', 'Effective cleansing of dirt and stains', 'Gentle on skin and fabric', 'Fresh, pleasant fragrance'],
  image: '/img/powderDetergent.png'
}, {
  name: 'DAZEL® Elūra Body Lotion',
  sizes: ['150ml', '250ml'],
  icon: Droplets,
  color: 'bg-purple-500',
  features: ['Smooth, easily absorbed texture', 'Moisturizes and softens skin', 'Gentle for daily use', 'Light, pleasant fragrance'],
  image: '/img/eluraLotion.png'
}, {
  name: 'DAZEL® SkinDew Baby Jelly',
  sizes: ['50g', '100g', '200g'],
  icon: Baby,
  color: 'bg-pink-500',
  features: ['Soft, smooth, non-greasy', 'Moisturizes and keeps skin supple', 'Suitable for all skin types', 'Mild, pleasant fragrance'],
  image: '/img/skinDew.png'
}];

export function Products() {
  const featuredProduct = products.find(p => p.featured);
  const otherProducts = products.filter(p => !p.featured);

  const handleImageError = (e, IconComponent) => {
    const img = e.currentTarget;
    const parent = img.parentElement;
    if (parent) {
      img.style.display = 'none';
      const fallback = parent.querySelector('.fallback-content, .fallback-icon');
      if (fallback) {
        fallback.style.display = 'flex';
      }
    }
  };
  return (
      <section id="products" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-3 md:mb-4"
            >
              Our Products
            </motion.h2>
            <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: '80px' }}
                viewport={{ once: true }}
                className="h-1 bg-[#088395] mx-auto mb-4 md:mb-6"
            />
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base md:text-lg text-gray-600 px-4"
            >
              Discover our complete range of quality detergents and skin care products, Made With Love.
            </motion.p>
          </div>
          {featuredProduct && (
              <div className="bg-[#0A4D68] rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 mb-12 md:mb-16 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                  <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="relative order-2 lg:order-1"
                  >
                    <div className="relative z-10 rounded-2xl md:rounded-3xl p-6 md:p-8">
                      <div className="aspect-[4/3] bg-gray-100 rounded-lg md:rounded-xl overflow-hidden flex items-center justify-center relative">
                        <img
                            src={featuredProduct.image}
                            alt={featuredProduct.name}
                            className="w-full h-full object-cover"
                            onError={(e) => handleImageError(e, featuredProduct.icon)}
                        />
                        <div className="fallback-content absolute inset-0 bg-gradient-to-br from-blue-100 to-white" style={{ display: 'none' }}>
                          <div className="text-center p-4 md:p-8 relative z-10 flex flex-col items-center justify-center h-full">
                            <div className="w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-32 bg-[#088395] rounded-lg shadow-lg mx-auto mb-3 md:mb-4 flex items-center justify-center">
                              {React.createElement(featuredProduct.icon, { size: 48, className: "text-white" })}
                            </div>
                            <p className="text-[#0A4D68] font-medium text-xs sm:text-sm">
                              Product Image Placeholder
                            </p>
                          </div>
                        </div>
                        <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-[#F59E0B] text-white text-xs font-bold px-2.5 py-1 md:px-3 rounded-full shadow-md z-20">
                          FEATURED
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#088395] rounded-full opacity-20 blur-3xl -z-10" />
                  </motion.div>
                  <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="order-1 lg:order-2"
                  >
                    <div className="flex items-center gap-2 text-[#088395] bg-white/10 w-fit px-3 py-1.5 rounded-full mb-4 md:mb-6">
                      <Star size={14} className="fill-current" />
                      <span className="text-xs sm:text-sm font-medium text-white">
                    Featured Product
                  </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                      {featuredProduct.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                      {featuredProduct.sizes.map(size => (
                          <span key={size} className="px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm font-medium">
                      {size}
                    </span>
                      ))}
                    </div>
                    <ul className="space-y-3 mb-6 md:mb-8">
                      {featuredProduct.features.map((feature, i) => (
                          <motion.li
                              key={i}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-3"
                          >
                            <div className="bg-[#088395] p-1 rounded-full flex-shrink-0">
                              <Check size={14} className="text-white" />
                            </div>
                            <span className="text-blue-50 text-sm md:text-base">
                        {feature}
                      </span>
                          </motion.li>
                      ))}
                    </ul>
                    <Button
                        variant="secondary"
                        size="lg"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full sm:w-auto bg-white text-[#0A4D68] hover:bg-gray-100"
                    >
                      Order Now
                    </Button>
                  </motion.div>
                </div>
              </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherProducts.map((product, index) => (
                <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden flex items-center justify-center relative">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={(e) => handleImageError(e, product.icon)}
                    />
                    <div className="fallback-icon absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 items-center justify-center" style={{ display: 'none' }}>
                      {React.createElement(product.icon, { size: 64, className: "text-[#088395]" })}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg md:text-xl font-bold mb-1 text-gray-900">
                      {product.name}
                    </h3>
                    {product.subtitle && (
                        <p className="text-sm text-[#088395] font-medium mb-4">
                          {product.subtitle}
                        </p>
                    )}
                    {product.sizes && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {product.sizes.map(size => (
                              <span key={size} className="px-2.5 py-1 bg-[#088395]/10 text-[#088395] rounded text-xs font-medium">
                            {size}
                          </span>
                          ))}
                        </div>
                    )}
                    <ul className="space-y-2.5 mb-6 flex-grow">
                      {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check size={16} className="text-[#088395] flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                      ))}
                    </ul>
                    <Button
                        variant="outline"
                        className="w-full mt-auto"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
}