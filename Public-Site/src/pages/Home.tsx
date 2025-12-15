import React, { useEffect } from 'react';
import { Navigation } from '../components/ui/Navigation.tsx';
import { Hero } from '../components/ui/Hero.tsx';
import { About } from '../components/ui/About.tsx';
import { Products } from '../components/ui/Products.tsx';
import { Contact } from '../components/ui/Contact.tsx';
import { Footer } from '../components/ui/Footer.tsx';

export function Home() {
    useEffect(() => {
        document.title = 'DAZEL® - Quality Detergents & Skin Care Products in Kenya | Where Clean Meets Care';
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

        updateMetaTag('description', 'DAZEL® offers high-quality detergents and skin care products in Kenya. From multipurpose bar soap to body lotions and baby jelly. Made with love in Kibwezi, Kenya. Order now!');
        updateMetaTag('keywords', 'DAZEL, detergents Kenya, skin care products Kenya, bar soap, body lotion, baby jelly, powder detergent, Kibwezi Kenya, cleaning products, personal care');
        updateMetaTag('author', 'DAZEL Detergents & Skin Care');
        updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
        updateMetaTag('og:title', 'DAZEL® - Quality Detergents & Skin Care Products in Kenya');
        updateMetaTag('og:description', 'Discover DAZEL®\'s complete range of affordable, high-quality detergents and skin care products. Made with love for your family in Kibwezi, Kenya.');
        updateMetaTag('og:type', 'website');
        updateMetaTag('og:url', 'https://www.dazelworld.co.ke');
        updateMetaTag('og:image', 'https://www.dazelworld.co.ke/logo.jpg');
        updateMetaTag('og:site_name', 'DAZEL®');
        updateMetaTag('og:locale', 'en_KE');
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', 'DAZEL® - Quality Detergents & Skin Care Products in Kenya');
        updateMetaTag('twitter:description', 'High-quality detergents and skin care products made with love for Kenyan families.');
        updateMetaTag('twitter:image', 'https://www.dazelworld.co.ke/logo.jpg');
        updateMetaTag('twitter:site', '@dazelworld');
        updateMetaTag('geo.region', 'KE-30');
        updateMetaTag('geo.placename', 'Kibwezi');
        updateMetaTag('geo.position', '-2.4167;37.9667');
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DAZEL Detergents & Skin Care",
            "alternateName": "DAZEL®",
            "url": "https://www.dazelworld.co.ke",
            "logo": "https://www.dazelworld.co.ke/logo.jpg",
            "description": "DAZEL® offers high-quality detergents and skin care products in Kenya. Made with love for the family.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kibwezi",
                "addressCountry": "KE"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254-112-430-829",
                "contactType": "customer service",
                "email": "info@dazelworld.co.ke",
                "availableLanguage": ["en", "sw"]
            },
            "sameAs": [
                "https://www.facebook.com/share/1Cjofjtmez/",
                "https://www.instagram.com/dazelworld",
                "https://x.com/dazelworld",
                "https://www.tiktok.com/@dazelworld"
            ]
        };
        const productsData = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "DAZEL® Products",
            "itemListElement": [
                {
                    "@type": "Product",
                    "position": 1,
                    "name": "DAZEL® Cream Multipurpose Bar Soap",
                    "description": "Rich, stable lather. Effective cleansing action. Gentle on skin and fabrics. Suitable for both bathing and laundry.",
                    "brand": {
                        "@type": "Brand",
                        "name": "DAZEL®"
                    },
                    "offers": {
                        "@type": "AggregateOffer",
                        "availability": "https://schema.org/InStock",
                        "priceCurrency": "KES"
                    }
                },
                {
                    "@type": "Product",
                    "position": 2,
                    "name": "DAZEL® Fresh Powder Detergent",
                    "description": "Fine, free-flowing texture. Effective cleansing of dirt and stains. Gentle on skin and fabric.",
                    "brand": {
                        "@type": "Brand",
                        "name": "DAZEL®"
                    },
                    "offers": {
                        "@type": "AggregateOffer",
                        "availability": "https://schema.org/InStock",
                        "priceCurrency": "KES"
                    }
                },
                {
                    "@type": "Product",
                    "position": 3,
                    "name": "DAZEL® Elūra Body Lotion",
                    "description": "Smooth, easily absorbed texture. Moisturizes and softens skin. Gentle for daily use.",
                    "brand": {
                        "@type": "Brand",
                        "name": "DAZEL®"
                    },
                    "offers": {
                        "@type": "AggregateOffer",
                        "availability": "https://schema.org/InStock",
                        "priceCurrency": "KES"
                    }
                },
                {
                    "@type": "Product",
                    "position": 4,
                    "name": "DAZEL® SkinDew Baby Jelly",
                    "description": "Soft, smooth, non-greasy. Moisturizes and keeps skin supple. Suitable for all skin types.",
                    "brand": {
                        "@type": "Brand",
                        "name": "DAZEL®"
                    },
                    "offers": {
                        "@type": "AggregateOffer",
                        "availability": "https://schema.org/InStock",
                        "priceCurrency": "KES"
                    }
                }
            ]
        };
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
        addStructuredData('products-schema', productsData);
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