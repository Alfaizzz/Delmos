import React from "react";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { PageRoute } from "../types";
import { SectionHeader } from "../components/common/SectionHeader";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactInfo } from "../components/contact/ContactInfo";

interface ContactPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb currentPage="contact" onNavigate={onNavigate} />
        </div>
      </div>

      {/* ========================================================
          CONTACT HERO
          ======================================================== */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-100 via-white to-slate-50 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-blue-600 uppercase block">
                CONTACT US · APPLICATION SUPPORT
              </span>

              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]"
                style={{ textWrap: "balance" }}
              >
                Let's Talk About Your{" "}
                <span className="text-blue-600 block sm:inline">
                  Application Needs
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Whether you need 24×7 ongoing application support, urgent
                production troubleshooting, database performance tuning, or a
                dedicated pod of senior engineers, tell us what you need.
              </p>

              {/* Trust Tag indicators */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {[
                  "Application Support",
                  "Proactive Maintenance",
                  "Rapid Troubleshooting",
                  "Modernization & Cloud",
                ].map((tag, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Live Monitor Card (faithful recreation of original demo) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-6 sm:p-7 border border-slate-800 shadow-2xl text-white">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Operations Status
                    </span>
                  </div>
                  <span className="text-xs text-blue-400 font-semibold font-mono">
                    24x7 Ready
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3.5 mt-5">
                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    <span className="text-[11px] text-slate-400 block mb-1">
                      System Uptime
                    </span>
                    <div className="text-lg font-extrabold text-white font-mono tabular-nums">
                      99.98%
                    </div>
                    <div className="w-full bg-slate-700 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div
                        className="bg-blue-500 h-full rounded-full"
                        style={{ width: "96%" }}
                      />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                    <span className="text-[11px] text-slate-400 block mb-1">
                      Support Level
                    </span>
                    <div className="text-lg font-extrabold text-white font-mono">
                      L1 / L2 / L3
                    </div>
                    <div className="flex items-end gap-1 h-3.5 mt-2">
                      <div className="w-1.5 h-2 bg-blue-500 rounded-sm" />
                      <div className="w-1.5 h-3.5 bg-blue-500 rounded-sm" />
                      <div className="w-1.5 h-2.5 bg-blue-500 rounded-sm" />
                      <div className="w-1.5 h-3 bg-blue-500 rounded-sm" />
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-3.5 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-white block">
                      SLA Commitment Guarantee
                    </span>
                    <span className="text-slate-300">
                      Dedicated emergency contact channels
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          CONTACT FORM & INFO SECTION
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50" id="contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="GET IN TOUCH"
            title="Tell Us What You Need"
            description="Share your application environment, current operational bottlenecks, and support objectives. Our engineering leads will review your inquiry promptly."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left: Contact Information Sidebar */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
