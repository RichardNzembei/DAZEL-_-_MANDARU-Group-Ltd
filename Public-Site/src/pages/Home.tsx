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

        addStructuredData('breadcrumb-schema', breadcrumbSchema);
        addStructuredData('faq-schema', faqSchema);

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