import React from "react";
import {
  ArrowRight,
  Target,
  Eye,
  Shield,
  CheckCircle,
  Users,
} from "lucide-react";
import { COMPANY_INFO, PROCESS_STEPS } from "../constants/companyInfo";
import { IMAGES } from "../constants/images";
import { PageRoute } from "../types";
import { SectionHeader } from "../components/common/SectionHeader";
import { Button } from "../components/common/Button";
import { Breadcrumb } from "../components/common/Breadcrumb";

interface AboutPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb currentPage="about" onNavigate={onNavigate} />
        </div>
      </div>

      {/* ========================================================
          ABOUT HERO
          ======================================================== */}
      <section className="relative min-h-[480px] lg:min-h-[520px] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.aboutHero}
            alt="Delmos Application Support Operations"
            className="w-full h-full object-cover object-center opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">
              ABOUT DELMOS
            </p>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
              style={{ textWrap: "balance" }}
            >
              Technology Support for{" "}
              <span className="text-blue-400 block sm:inline">
                Applications That Matter
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Delmos Tech Pvt. Ltd. helps organizations maintain, support,
              optimize, and continuously improve their business applications
              over the entire software lifecycle.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate("contact")}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Talk to Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHO WE ARE
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src={IMAGES.whoWeAre}
                alt="Delmos Support Engineering"
                className="w-full h-[400px] lg:h-[480px] object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
                  Engineered For High Reliability
                </span>
                <p className="text-xs text-slate-300">
                  Combining proactive maintenance, deep debugging, and security
                  compliance to protect critical software assets.
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                WHO WE ARE
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Your Trusted Partner for Application Support & Maintenance
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Delmos Tech Pvt. Ltd. provides technology and application
                support services focused on helping organizations operate their
                digital systems reliably over the long term.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Our approach combines rigorous technical support, proactive
                monitoring, performance improvements, security awareness, and
                continuous functional enhancements to help businesses extract
                enduring value from their software investments.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    Standardized ITIL support workflows and root-cause defect
                    elimination.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    Dedicated multi-technology engineers across frontend,
                    backend, and databases.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">
                    Predictable SLAs and regular quarterly architecture reviews.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          MISSION & VISION
          ======================================================== */}
      <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="OUR PURPOSE"
            title="Built Around Long-Term Application Reliability"
            description="Our organizational commitment is rooted in eliminating unplanned downtime and protecting mission-critical operations."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-blue-600 tracking-wider">
                  01
                </span>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
                Our Mission
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To help organizations operate dependable, secure, and
                high-performing applications through responsive support,
                proactive maintenance, and continuous improvement.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs font-bold text-blue-600 tracking-wider">
                  02
                </span>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-3">
                Our Vision
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To become a trusted long-term application support partner for
                organizations that depend on technology to run, scale, and
                transform their business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          OUR APPROACH (5 Stages)
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="OUR APPROACH"
            title="A Structured Approach to Application Support"
            description="We follow a disciplined engineering framework to understand, stabilize, maintain, optimize, and modernize business applications."
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12">
            {PROCESS_STEPS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-500 hover:shadow-md transition-all text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white font-mono font-bold text-sm flex items-center justify-center mb-5 shadow-sm">
                  {item.step}
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          FINAL CTA
          ======================================================== */}
      <section className="py-20 lg:py-24 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
            LET'S WORK TOGETHER
          </p>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6"
            style={{ textWrap: "balance" }}
          >
            Keep Your Applications Running.{" "}
            <span className="text-blue-400 block sm:inline">
              Keep Your Business Moving.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Talk to Delmos about your application support, maintenance, and
            technical optimization requirements.
          </p>

          <Button
            variant="primary"
            size="lg"
            onClick={() => onNavigate("contact")}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Request Support
          </Button>
        </div>
      </section>
    </div>
  );
};
