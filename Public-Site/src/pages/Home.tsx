import React, { useEffect } from 'react';
import { Navigation } from '../components/ui/Navigation.tsx';
import { Hero } from '../components/ui/Hero.tsx';
import { About } from '../components/ui/About.tsx';
import { Products } from '../components/ui/Products.tsx';
import { Contact } from '../components/ui/Contact.tsx';
import { Footer } from '../components/ui/Footer.tsx';

export function Home() {
    useEffect(() => {
        document.title = 'DAZEL® - Quality Detergents & Skin Care Manufacturer in Kenya | Where Clean Meets Care';

        const updateMetaTag = (property, content) => {
            let meta = document.querySelector(`meta[property="${property}"]`) ||
                document.querySelector(`meta[name="${property}"]`);
            if (!meta) {
                meta = document.createElement('meta');
                if (property.startsWith('og:') || property.startsWith('twitter:')) {
                    meta.setAttribute('property', property);
                } else {
                    meta.setAttribute('name', property);
                }
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        updateMetaTag('description', 'DAZEL® manufactures high-quality detergents and skin care products in Kenya. Wholesale supplier of multipurpose bar soap, body lotions, baby jelly, and powder detergent. Made in Kibwezi, Kenya.');
        updateMetaTag('keywords', 'DAZEL, detergents manufacturer Kenya, skin care products wholesale Kenya, bar soap manufacturer, body lotion supplier, baby jelly, powder detergent, Kibwezi Kenya, cleaning products manufacturer, B2B personal care');
        updateMetaTag('author', 'DAZEL Detergents & Skin Care');
        updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
        updateMetaTag('og:title', 'DAZEL® - Quality Detergents & Skin Care Manufacturer in Kenya');
        updateMetaTag('og:description', 'Leading manufacturer of high-quality detergents and skin care products. Wholesale distribution across East Africa. Made in Kibwezi, Kenya.');
        updateMetaTag('og:type', 'website');
        updateMetaTag('og:url', 'https://www.dazelworld.co.ke');
        updateMetaTag('og:image', 'https://www.dazelworld.co.ke/logo.jpg');
        updateMetaTag('og:site_name', 'DAZEL®');
        updateMetaTag('og:locale', 'en_KE');
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', 'DAZEL® - Quality Detergents & Skin Care Manufacturer in Kenya');
        updateMetaTag('twitter:description', 'High-quality detergents and skin care products manufacturer serving retailers and distributors in Kenya.');
        updateMetaTag('twitter:image', 'https://www.dazelworld.co.ke/logo.jpg');
        updateMetaTag('twitter:site', '@dazelworld');
        updateMetaTag('geo.region', 'KE-30');
        updateMetaTag('geo.placename', 'Kibwezi');
        updateMetaTag('geo.position', '-2.4167;37.9667');

        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Manufacturer",
            "name": "DAZEL Detergents & Skin Care",
            "alternateName": "DAZEL®",
            "url": "https://www.dazelworld.co.ke",
            "logo": "https://www.dazelworld.co.ke/logo.jpg",
            "description": "Leading manufacturer of quality detergents and skin care products in Kenya. Serving retailers, distributors, and wholesalers across East Africa.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kibwezi",
                "addressRegion": "Makueni County",
                "addressCountry": "KE"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254-112-430-829",
                "contactType": "sales",
                "email": "info@dazelworld.co.ke",
                "availableLanguage": ["en", "sw"],
                "areaServed": "KE"
            },
            "sameAs": [
                "https://www.facebook.com/share/1Cjofjtmez/",
                "https://www.instagram.com/dazelworld",
                "https://x.com/dazelworld",
                "https://www.tiktok.com/@dazelworld"
            ],
            "knowsAbout": [
                "Detergent Manufacturing",
                "Skin Care Products",
                "Personal Care Products",
                "Cleaning Products"
            ]
        };
        const productsData = [
            {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "DAZEL® Cream Multipurpose Bar Soap",
                "description": "Rich, stable lather. Effective cleansing action. Gentle on skin and fabrics. Suitable for both bathing and laundry. Available in 1kg and 600g sizes.",
                "image": "https://www.dazelworld.co.ke/img/creamBarSoap.jpeg",
                "sku": "DAZEL-SOAP-001",
                "brand": {
                    "@type": "Brand",
                    "name": "DAZEL®"
                },
                "manufacturer": {
                    "@type": "Organization",
                    "name": "DAZEL® Detergents & Skin Care"
                }
            },
            {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "DAZEL® Fresh Powder Detergent",
                "description": "Fine, free-flowing texture. Effective cleansing of dirt and stains. Gentle on skin and fabric. Fresh, pleasant fragrance. Available in 100g, 250g, 500g, 1kg, 5kg, and 10kg sizes.",
                "image": "https://www.dazelworld.co.ke/img/powder-detergent.jpg",
                "sku": "DAZEL-DET-002",
                "brand": {
                    "@type": "Brand",
                    "name": "DAZEL®"
                },
                "manufacturer": {
                    "@type": "Organization",
                    "name": "DAZEL® Detergents & Skin Care"
                }
            },
            {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "DAZEL® Elūra Body Lotion",
                "description": "Smooth, easily absorbed texture. Moisturizes and softens skin. Gentle for daily use. Light, pleasant fragrance. Available in 150ml and 250ml sizes.",
                "image": "https://www.dazelworld.co.ke/img/body-lotion.jpg",
                "sku": "DAZEL-LOTION-003",
                "brand": {
                    "@type": "Brand",
                    "name": "DAZEL®"
                },
                "manufacturer": {
                    "@type": "Organization",
                    "name": "DAZEL® Detergents & Skin Care"
                }
            },
            {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "DAZEL® SkinDew Baby Jelly",
                "description": "Soft, smooth, non-greasy. Moisturizes and keeps skin supple. Suitable for all skin types. Mild, pleasant fragrance. Available in 50g, 100g, and 200g sizes.",
                "image": "https://www.dazelworld.co.ke/img/baby-jelly.jpg",
                "sku": "DAZEL-JELLY-004",
                "brand": {
                    "@type": "Brand",
                    "name": "DAZEL®"
                },
                "manufacturer": {
                    "@type": "Organization",
                    "name": "DAZEL® Detergents & Skin Care"
                }
            }
        ];

        const addStructuredData = (id, data) => {
            let script = document.getElementById(id);
            if (!script) {
                script = document.createElement('script');
                script.id = id;
                script.type = 'application/ld+json';
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(data);
        };
        addStructuredData('organization-schema', structuredData);
        productsData.forEach((product, index) => {
            addStructuredData(`product-schema-${index}`, product);
        });

        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = 'https://www.dazelworld.co.ke';

    }, []);
    return (
        <div className="min-h-screen bg-white font-sans text-[#1A1A1A]">
            <Navigation />
            <main role="main">
                <Hero />
                <About />
                <Products />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}