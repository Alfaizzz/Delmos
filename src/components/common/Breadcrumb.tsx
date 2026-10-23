import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageRoute } from '../../types';

interface BreadcrumbProps {
  currentPage: PageRoute;
  onNavigate: (route: PageRoute) => void;
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  currentPage,
  onNavigate,
  className = '',
}) => {
  const pageLabels: Record<PageRoute, string> = {
    home: 'Home',
    about: 'About Us',
    services: 'Services',
    industries: 'Industries',
    technologies: 'Technologies',
    contact: 'Contact Us',
  };

  if (currentPage === 'home') {
    return null;
  }

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center gap-1.5 text-xs text-slate-500 py-3 ${className}`}
    >
      <button
        onClick={() => onNavigate('home')}
        className="flex items-center gap-1 hover:text-blue-600 transition-colors cursor-pointer"
        title="Return to Home"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Home</span>
      </button>

      <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />

      <span className="font-semibold text-slate-800" aria-current="page">
        {pageLabels[currentPage]}
      </span>
    </nav>
  );
};
