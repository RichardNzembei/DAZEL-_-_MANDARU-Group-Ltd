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
        const manufacturerSchema = {
            "@context": "https://schema.org",
            "@type": "Manufacturer",
            "name": "DAZEL Detergents & Skin Care",
            "alternateName": "DAZEL®",
            "url": "https://www.dazelworld.co.ke",
            "logo": "https://www.dazelworld.co.ke/logo.jpg",
            "image": "https://www.dazelworld.co.ke/logo.jpg",
            "description": "Leading manufacturer of quality detergents and skin care products in Kenya. Serving retailers, distributors, and wholesalers across East Africa.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Kibwezi",
                "addressRegion": "Makueni County",
                "addressCountry": "KE"
            },
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+254-112-430-829",
                    "contactType": "sales",
                    "email": "info@dazelworld.co.ke",
                    "availableLanguage": ["en", "sw"],
                    "areaServed": "KE",
                    "contactOption": "TollFree"
                },
                {
                    "@type": "ContactPoint",
                    "contactType": "customer support",
                    "email": "info@dazelworld.co.ke",
                    "availableLanguage": ["en", "sw"]
                }
            ],
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
                "Cleaning Products",
                "Wholesale Distribution",
                "B2B Supply Chain"
            ],
            "makesOffer": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Product",
                        "name": "DAZEL® Product Line"
                    },
                    "availability": "https://schema.org/InStock",
                    "businessFunction": "http://purl.org/goodrelations/v1#Sell",
                    "eligibleRegion": {
                        "@type": "Country",
                        "name": "Kenya"
                    }
                }
            ]
        };
        const productsData = [
            {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "DAZEL® Cream Multipurpose Bar Soap",
                "description": "Rich, stable lather. Effective cleansing action. Gentle on skin and fabrics. Suitable for both bathing and laundry. Available in 1kg and 600g sizes. Contact us for wholesale pricing and bulk orders.",
                "image": "https://www.dazelworld.co.ke/img/creamBarSoap.jpeg",
                "sku": "DAZEL-SOAP-001",
                "category": "Cleaning Products",
                "brand": {
                    "@type": "Brand",
                    "name": "DAZEL®"
                },
                "manufacturer": {
                    "@type": "Organization",
                    "name": "DAZEL® Detergents & Skin Care",
                    "url": "https://www.dazelworld.co.ke"
                },
                "additionalProperty": [
                    {
                        "@type": "PropertyValue",
                        "name": "Available Sizes",
                        "value": "600g, 1kg"
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "Business Model",
                        "value": "B2B Wholesale"
                    }
                ]
            },
            {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "DAZEL® Fresh Powder Detergent",
                "description": "Fine, free-flowing texture. Effective cleansing of dirt and stains. Gentle on skin and fabric. Fresh, pleasant fragrance. Available in 100g, 250g, 500g, 1kg, 5kg, and 10kg sizes. Bulk wholesale pricing available.",
                "image": "https://www.dazelworld.co.ke/img/powder-detergent.jpg",
                "sku": "DAZEL-DET-002",
                "category": "Cleaning Products",
                "brand": {
                    "@type": "Brand",
                    "name": "DAZEL®"
                },
                "manufacturer": {
                    "@type": "Organization",
                    "name": "DAZEL® Detergents & Skin Care",
                    "url": "https://www.dazelworld.co.ke"
                },
                "additionalProperty": [
                    {
                        "@type": "PropertyValue",
                        "name": "Available Sizes",
                        "value": "100g, 250g, 500g, 1kg, 5kg, 10kg"
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "Business Model",
                        "value": "B2B Wholesale"
                    }
                ]
            },
            {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "DAZEL® Elūra Body Lotion",
                "description": "Smooth, easily absorbed texture. Moisturizes and softens skin. Gentle for daily use. Light, pleasant fragrance. Available in 150ml and 250ml sizes. Wholesale distribution available.",
                "image": "https://www.dazelworld.co.ke/img/body-lotion.jpg",
                "sku": "DAZEL-LOTION-003",
                "category": "Personal Care",
                "brand": {
                    "@type": "Brand",
                    "name": "DAZEL®"
                },
                "manufacturer": {
                    "@type": "Organization",
                    "name": "DAZEL® Detergents & Skin Care",
                    "url": "https://www.dazelworld.co.ke"
                },
                "additionalProperty": [
                    {
                        "@type": "PropertyValue",
                        "name": "Available Sizes",
                        "value": "150ml, 250ml"
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "Business Model",
                        "value": "B2B Wholesale"
                    }
                ]
            },
            {
                "@context": "https://schema.org/",
                "@type": "Product",
                "name": "DAZEL® SkinDew Baby Jelly",
                "description": "Soft, smooth, non-greasy. Moisturizes and keeps skin supple. Suitable for all skin types. Mild, pleasant fragrance. Available in 50g, 100g, and 200g sizes. Contact for distributor pricing.",
                "image": "https://www.dazelworld.co.ke/img/baby-jelly.jpg",
                "sku": "DAZEL-JELLY-004",
                "category": "Personal Care",
                "brand": {
                    "@type": "Brand",
                    "name": "DAZEL®"
                },
                "manufacturer": {
                    "@type": "Organization",
                    "name": "DAZEL® Detergents & Skin Care",
                    "url": "https://www.dazelworld.co.ke"
                },
                "additionalProperty": [
                    {
                        "@type": "PropertyValue",
                        "name": "Available Sizes",
                        "value": "50g, 100g, 200g"
                    },
                    {
                        "@type": "PropertyValue",
                        "name": "Business Model",
                        "value": "B2B Wholesale"
                    }
                ]
            }
        ];
        const breadcrumbSchema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.dazelworld.co.ke"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Products",
                    "item": "https://www.dazelworld.co.ke/#products"
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Contact",
                    "item": "https://www.dazelworld.co.ke/#contact"
                }
            ]
        };
        const faqSchema = {
        // FAQ Schema for Common Questions
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What products does DAZEL manufacture?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DAZEL manufactures a complete range of quality detergents and skin care products including multipurpose bar soap, powder detergent, body lotion, and baby jelly. All products are manufactured in Kibwezi, Kenya."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Does DAZEL offer wholesale pricing?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, DAZEL specializes in wholesale distribution to retailers, distributors, and businesses across Kenya and East Africa. Contact us for wholesale pricing and bulk order information."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Where are DAZEL products manufactured?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "All DAZEL products are proudly manufactured in Kibwezi, Makueni County, Kenya, ensuring quality control and supporting local manufacturing."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What sizes are available for DAZEL products?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "DAZEL offers various sizes to meet different needs: Bar soap (600g, 1kg), Powder detergent (100g to 10kg), Body lotion (150ml, 250ml), and Baby jelly (50g, 100g, 200g)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How can I become a DAZEL distributor?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "To become a DAZEL distributor, please contact us directly at info@dazelworld.co.ke or call +254-112-430-829. We work with retailers, wholesalers, and distributors throughout Kenya and East Africa."
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
        addStructuredData('manufacturer-schema', manufacturerSchema);
        addStructuredData('breadcrumb-schema', breadcrumbSchema);
        addStructuredData('faq-schema', faqSchema);

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