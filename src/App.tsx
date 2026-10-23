import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { PageRoute, ServiceItem } from './types';
import { Loader2 } from 'lucide-react';

// Lazy loading all pages for optimal website speed and Google Core Web Vitals
const HomePage = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage').then((m) => ({ default: m.IndustriesPage })));
const TechnologiesPage = lazy(() => import('./pages/TechnologiesPage').then((m) => ({ default: m.TechnologiesPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  // Sync route with window.location.hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validRoutes: PageRoute[] = ['home', 'about', 'services', 'industries', 'technologies', 'contact'];
      if (validRoutes.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    // Check initial hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title and canonical meta tags for Google SEO & search analytics
  useEffect(() => {
    const pageTitles: Record<PageRoute, { title: string; desc: string }> = {
      home: {
        title: 'Delmos Tech – Application Support & Maintenance Services',
        desc: 'Delmos Tech Pvt. Ltd. provides enterprise 24x7 Application Support, L1/L2/L3 troubleshooting, monitoring, and modernization.',
      },
      about: {
        title: 'About Us | Delmos Tech Pvt. Ltd.',
        desc: 'Learn about Delmos Tech Pvt. Ltd., our mission, engineering philosophy, and structured 5-stage application support approach.',
      },
      services: {
        title: 'Services | Delmos Tech Pvt. Ltd.',
        desc: 'Explore Delmos Tech application support services: 24x7 monitoring, incident management, bug fixing, performance optimization, and modernization.',
      },
      industries: {
        title: 'Industries We Support | Delmos Tech Pvt. Ltd.',
        desc: 'Dedicated application support for Banking, Healthcare, Manufacturing, Retail, Logistics, Education, Construction, and Government.',
      },
      technologies: {
        title: 'Technologies Supported | Delmos Tech Pvt. Ltd.',
        desc: 'Deep engineering support across Frontend, Backend, Cloud (AWS, Azure, GCP), Databases (PostgreSQL, Oracle, MySQL), and DevOps.',
      },
      contact: {
        title: 'Contact Us | Delmos Tech Pvt. Ltd.',
        desc: 'Request enterprise application support, production troubleshooting, or a dedicated L1-L3 SLA proposal from Delmos Tech.',
      },
    };

    const currentMeta = pageTitles[currentPage] || pageTitles.home;
    document.title = currentMeta.title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentMeta.desc);
    }
  }, [currentPage]);

  // Handle navigation and smooth scroll
  const handleNavigate = (route: PageRoute) => {
    setCurrentPage(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectService = (_service: ServiceItem) => {
    handleNavigate('services');
  };

  const handleRequestQuoteForService = (_serviceTitle: string) => {
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Universal Top Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area with Lazy Loading Suspense */}
      <main className="flex-grow">
        <Suspense
          fallback={
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Loading Delmos Tech...
              </p>
            </div>
          }
        >
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onSelectService={handleSelectService}
              onRequestQuoteForService={handleRequestQuoteForService}
            />
          )}

          {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}

          {currentPage === 'services' && (
            <ServicesPage
              onNavigate={handleNavigate}
              onSelectService={handleSelectService}
              onRequestQuoteForService={handleRequestQuoteForService}
            />
          )}

          {currentPage === 'industries' && (
            <IndustriesPage
              onNavigate={handleNavigate}
              onRequestQuoteForService={handleRequestQuoteForService}
            />
          )}

          {currentPage === 'technologies' && (
            <TechnologiesPage onNavigate={handleNavigate} />
          )}

          {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
        </Suspense>
      </main>

      {/* Universal Dark Navy Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
