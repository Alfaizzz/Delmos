import React from 'react';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Headphones } from 'lucide-react';
import { COMPANY_INFO } from '../../constants/companyInfo';
import { IMAGES } from '../../constants/images';

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl flex flex-col justify-between">
      <div>
        {/* Intro */}
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-800">
          <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 p-2 flex items-center justify-center shrink-0">
            <img src={IMAGES.logo} alt="Delmos Tech" className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white tracking-tight">DELMOS Tech</h3>
            <p className="text-xs text-blue-400 font-medium tracking-wide">
              Pvt. Ltd. • Application Support
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed mb-8">
          Whether you need 24x7 production monitoring, emergency incident resolution, database optimization, or dedicated L1-L3 support pods, our engineers are ready to assist.
        </p>

        {/* Contact info list */}
        <div className="space-y-6">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Business Email</h4>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-sm font-semibold text-white hover:text-blue-400 transition-colors block mt-0.5"
              >
                {COMPANY_INFO.email}
              </a>
              <span className="text-[11px] text-slate-400">Average response time: &lt; 2 hours</span>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Support Hotline</h4>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="text-sm font-semibold text-white hover:text-blue-400 transition-colors block mt-0.5"
              >
                {COMPANY_INFO.phone}
              </a>
              <span className="text-[11px] text-slate-400">Available Mon-Fri 9AM-6PM IST</span>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Operational Hours</h4>
              <p className="text-sm font-semibold text-white mt-0.5">
                24×7×365 Continuous Operations
              </p>
              <span className="text-[11px] text-slate-400">For contract-backed mission-critical SLAs</span>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Corporate Office</h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-1">
                {COMPANY_INFO.address}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Callout */}
      <div className="mt-8 pt-6 border-t border-slate-800">
        <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/60 flex items-center gap-3.5">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-white">Application Support Partner</h5>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Strict Non-Disclosure (NDA) and customized Service Level Agreements (SLAs).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
