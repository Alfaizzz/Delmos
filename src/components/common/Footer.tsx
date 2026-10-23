import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/companyInfo';
import { FOOTER_QUICK_LINKS, FOOTER_SERVICES_LINKS, FOOTER_INDUSTRIES_LINKS } from '../../constants/navigation';
import { IMAGES } from '../../constants/images';
import { PageRoute } from '../../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">
          
          {/* Brand & Mission Column (Col span 2 on desktop) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 p-1 flex items-center justify-center">
                <img src={IMAGES.logo} alt="Delmos Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">DELMOS Tech</h3>
                <p className="text-[11px] text-blue-400 font-medium tracking-wider uppercase">
                  Pvt. Ltd.
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Reliable application support, proactive 24x7 monitoring, maintenance, performance tuning,
              and modernization for business-critical enterprise applications.
            </p>

            <div className="pt-2">
              <a
                href={COMPANY_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Follow on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <Shield className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>ISO & ITIL Aligned Support Framework</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id as PageRoute)}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_SERVICES_LINKS.slice(0, 6).map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-white transition-colors text-left line-clamp-1 cursor-pointer"
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-500 font-medium">Business Inquiries</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-500 font-medium">Support Desk</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-500 font-medium">Availability</span>
                  <span className="text-slate-300">24×7 Critical Operations</span>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-500 font-medium">Headquarters</span>
                  <span className="text-slate-400 leading-relaxed block">{COMPANY_INFO.address}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {COMPANY_INFO.year} {COMPANY_INFO.legalName}. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              Support SLA
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
