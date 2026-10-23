import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Layers,
} from "lucide-react";
import { SERVICES } from "../constants/servicesData";
import { PROCESS_STEPS, SUPPORT_MODELS } from "../constants/companyInfo";
import { IMAGES } from "../constants/images";
import { PageRoute, ServiceItem } from "../types";
import { SectionHeader } from "../components/common/SectionHeader";
import { Button } from "../components/common/Button";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { ServiceCard } from "../components/services/ServiceCard";
import { ServiceDetailModal } from "../components/services/ServiceDetailModal";

interface ServicesPageProps {
  onNavigate: (route: PageRoute) => void;
  onSelectService: (service: ServiceItem) => void;
  onRequestQuoteForService: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onRequestQuoteForService,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalService, setActiveModalService] =
    useState<ServiceItem | null>(null);

  const categories = [
    { id: "all", label: "All 12 Services" },
    { id: "core", label: "Core Support" },
    { id: "engineering", label: "Engineering & Code" },
    { id: "infrastructure", label: "Infrastructure & DB" },
    { id: "tier", label: "Tiered SLAs" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? SERVICES
      : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div className="space-y-0">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb currentPage="services" onNavigate={onNavigate} />
        </div>
      </div>

      {/* ========================================================
          SERVICES HERO
          ======================================================== */}
      <section className="relative min-h-[480px] lg:min-h-[520px] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.services.monitoring}
            alt="Delmos Support Services"
            className="w-full h-full object-cover object-center opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">
              APPLICATION SUPPORT · MAINTENANCE · MODERNIZATION
            </p>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
              style={{ textWrap: "balance" }}
            >
              End-to-End Application Support & Maintenance
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              From daily operational incident triage to proactive performance
              optimization, database management, and architecture modernization,
              Delmos manages the complete software lifecycle with confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate("contact")}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          INTRO SECTION
          ======================================================== */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
                WHAT WE DO
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Reliable Support for Business-Critical Applications
              </h2>
            </div>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                Delmos provides application support and maintenance services
                designed to help organizations keep their software dependable,
                secure, optimized, and continuously evolving.
              </p>
              <p>
                Our services encompass 24×7 monitoring, rapid production bug
                correction, query tuning, security patches, library upgrades,
                and cloud infrastructure operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICES GRID & CATEGORY FILTER
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="OUR SERVICES"
            title="Comprehensive Support Portfolio"
            description="Explore our complete suite of 12 enterprise support capabilities. Click any service card for in-depth deliverables and SLA response times."
          />

          {/* Interactive Filter Tabs (permitted functional segmented buttons) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={(s) => setActiveModalService(s)}
                onRequestQuote={onRequestQuoteForService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          FEATURE / MONITORING SPOTLIGHT
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual spotlight */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img
                src={IMAGES.monitoringCenter}
                alt="24x7 Operations Monitoring Center"
                className="w-full h-[420px] lg:h-[480px] object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/90 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-blue-400 font-mono tabular-nums">
                    24 × 7
                  </div>
                  <span className="text-xs text-slate-300">
                    Continuous Application Monitoring
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Always Online</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                PROACTIVE SUPPORT
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Keep Your Applications Stable, Secure & Performing
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Our support approach combines real-time observability, rapid
                incident resolution, proactive patch management, and continuous
                optimization to help organizations run mission-critical software
                without stress.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Continuous 24x7 synthetic transaction & latency monitoring",
                  "Structured incident & root-cause problem resolution",
                  "Performance profiling, caching & query tuning",
                  "Regular dependency upgrades and security patch deployments",
                  "Legacy modernizations and cloud-native architectural transitions",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate("contact")}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Schedule Technical Discovery
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SUPPORT MODELS (L1, L2, L3, 24x7)
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="SUPPORT TIERS"
            title="Flexible Engagement Models"
            description="Clear SLA commitments tailored to your software criticality and operational budget."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUPPORT_MODELS.map((model, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                    {model.level}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                    {model.title}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded inline-block mb-4">
                    {model.responseTarget}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {model.description}
                  </p>
                  <ul className="space-y-1.5 border-t border-slate-100 pt-3 text-xs text-slate-700">
                    {model.keyFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onRequestQuoteForService(model.title)}
                    className="w-full py-2 text-xs font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Request Tier Proposal</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
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
            NEED RELIABLE APPLICATION SUPPORT?
          </p>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6"
            style={{ textWrap: "balance" }}
          >
            Keep Your Applications Performing at Their Best
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Tell us about your tech stack, current pain points, and SLA
            expectations. We'll design a customized support package within 24
            hours.
          </p>

          <Button
            variant="primary"
            size="lg"
            onClick={() => onNavigate("contact")}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Talk to Our Experts
          </Button>
        </div>
      </section>

      {/* Detailed Service Modal */}
      <ServiceDetailModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onRequestQuote={onRequestQuoteForService}
      />
    </div>
  );
};
