import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { NAV_ITEMS } from "../../constants/navigation";
import { COMPANY_INFO } from "../../constants/companyInfo";
import { IMAGES } from "../../constants/images";
import { PageRoute } from "../../types";
import { Button } from "./Button";

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (route: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = (route: PageRoute) => {
    onNavigate(route);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
            : "bg-white border-b border-slate-200 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Logo only */}
            <button
              onClick={() => handleLinkClick("home")}
              className="flex items-center focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg group cursor-pointer shrink-0"
              title={`${COMPANY_INFO.name} Homepage`}
            >
              <div className="w-20 h-20 md:w-16 md:h-16 rounded-lg overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
                <img
                  src={IMAGES.logo}
                  alt="Delmos Tech Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>
            </button>

            {/* Zone 2: Navigation Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: 1 Primary Action (Desktop) + Mobile Burger Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="hidden sm:block">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleLinkClick("contact")}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Request Support
                </Button>
              </div>

              {/* Mobile Burger Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-blue-600 transition-colors cursor-pointer"
                aria-label={
                  isMobileMenuOpen ? "Close Menu" : "Open Navigation Menu"
                }
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with Burger Crumb */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm md:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header inside mobile drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <img
                    src={IMAGES.logo}
                    alt="Logo"
                    className="w-8 h-8 object-contain"
                  />
                  <span className="font-bold text-slate-900 text-sm">
                    DELMOS Tech
                  </span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-slate-500 hover:bg-slate-100 cursor-pointer"
                  aria-label="Close drawer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Burger Breadcrumb indicator */}
              <div className="py-3 px-1 text-xs text-slate-500 border-b border-slate-100 flex items-center gap-1.5 font-medium">
                <span>Navigation</span>
                <span>/</span>
                <span className="text-blue-600 font-semibold capitalize">
                  {currentPage}
                </span>
              </div>

              {/* Mobile Navigation List */}
              <nav className="flex flex-col gap-1 py-4">
                {NAV_ITEMS.map((item) => {
                  const isActive = currentPage === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleLinkClick(item.id)}
                      className={`flex items-center justify-between px-3 py-3 rounded-lg text-left text-sm font-medium transition-colors cursor-pointer ${
                        isActive
                          ? "bg-blue-50 text-blue-600 font-semibold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Support CTA in Drawer */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <Button
                variant="primary"
                size="md"
                className="w-full justify-center"
                onClick={() => handleLinkClick("contact")}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Support
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>24x7 Emergency SLA Coverage</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
