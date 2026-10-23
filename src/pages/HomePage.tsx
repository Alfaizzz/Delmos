import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Headphones,
  CheckCircle,
  Clock,
  Layers,
  Sparkles,
} from "lucide-react";
import {
  COMPANY_INFO,
  STATS,
  WHY_DELMOS_POINTS,
  PROCESS_STEPS,
  SUPPORT_MODELS,
} from "../constants/companyInfo";
import { SERVICES } from "../constants/servicesData";
import { INDUSTRIES } from "../constants/industriesData";
import { IMAGES } from "../constants/images";
import { PageRoute, ServiceItem } from "../types";
import { SectionHeader } from "../components/common/SectionHeader";
import { Button } from "../components/common/Button";
import { StatCard } from "../components/common/StatCard";
import { ServiceCard } from "../components/services/ServiceCard";
import { IndustryCard } from "../components/industries/IndustryCard";
import { ArchitecturePanel } from "../components/technologies/ArchitecturePanel";

interface HomePageProps {
  onNavigate: (route: PageRoute) => void;
  onSelectService: (service: ServiceItem) => void;
  onRequestQuoteForService: (serviceTitle: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectService,
  onRequestQuoteForService,
}) => {
  return (
    <div className="space-y-0">
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-slate-950 overflow-hidden">
        {/* Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.homeHero}
            alt="Delmos IT Operations Center"
            className="w-full h-full object-cover object-center opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30,102,245,0.25),rgba(255,255,255,0))]" />
        </div>

        <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Editorial Eyebrow */}
            <p className="text-xs sm:text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">
              APPLICATION SUPPORT · MAINTENANCE · OPTIMIZATION · MODERNIZATION
            </p>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] mb-6"
              style={{ textWrap: "balance" }}
            >
              Keep Your Applications Running.{" "}
              <span className="text-blue-400 block sm:inline">
                Keep Your Business Growing.
              </span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4 max-w-2xl">
              Delmos Tech Pvt. Ltd. delivers dependable 24×7 Application Support
              and Maintenance services to guarantee high availability, optimal
              response times, bulletproof security, and continuous modernization
              for business-critical digital systems.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8 max-w-2xl">
              From L1/L2/L3 production troubleshooting and bug remediation to
              database tuning and cloud maintenance, we protect and enhance your
              software investments.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate("contact")}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Support
              </Button>

              <Button
                variant="outline-white"
                size="lg"
                onClick={() => onNavigate("services")}
              >
                Explore Services
              </Button>
            </div>

            {/* Unboxed Metadata Line (anti-pill) */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-medium pt-2 border-t border-slate-800/80">
              <span className="text-slate-300">Application Support</span>
              <span aria-hidden="true" className="text-blue-500">
                ·
              </span>
              <span className="text-slate-300">L1 / L2 / L3 Tiering</span>
              <span aria-hidden="true" className="text-blue-500">
                ·
              </span>
              <span className="text-slate-300">24×7 Observability</span>
              <span aria-hidden="true" className="text-blue-500">
                ·
              </span>
              <span className="text-slate-300">Zero-Incident Discipline</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          STATS / CAPABILITIES
          ======================================================== */}
      <section className="py-16 lg:py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="OUR CAPABILITIES"
            title="Trusted Application Support Partner"
            description="Our service level metrics represent proven operational commitments backed by standard ITIL response workflows."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, idx) => (
              <StatCard
                key={idx}
                number={stat.number}
                label={stat.label}
                detail={stat.detail}
                icon={
                  idx === 0 ? (
                    <Clock className="w-5 h-5" />
                  ) : idx === 1 ? (
                    <ShieldCheck className="w-5 h-5" />
                  ) : idx === 2 ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Headphones className="w-5 h-5" />
                  )
                }
              />
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-8">
            * Contractual uptime and response metrics are tailored to each
            client's specific SLA tier.
          </p>
        </div>
      </section>

      {/* ========================================================
          ABOUT SNAPSHOT
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src={IMAGES.whoWeAre}
                alt="Delmos Engineering Team"
                className="w-full h-[400px] lg:h-[480px] object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-white">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1">
                  Continuous Partnership
                </span>
                <p className="text-xs sm:text-sm text-slate-200">
                  Engineering teams dedicated to sustaining, hardening, and
                  modernizing existing digital platforms.
                </p>
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-6">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                WHO WE ARE
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Your Trusted Partner for Application Support & Maintenance
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Modern enterprises depend on software for their daily customer
                operations, financial transactions, and operational decisions.
                Keeping these complex systems healthy demands continuous
                monitoring, disciplined defect triage, and proactive performance
                tuning.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                Delmos Tech Pvt. Ltd. provides comprehensive Application Support
                and Maintenance services engineered to keep software secure,
                performant, stable, and continuously aligned with evolving
                organizational demands.
              </p>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate("about")}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Learn More About Delmos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SERVICES SECTION
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="WHAT WE DO"
            title="Our Application Support Services"
            description="End-to-end operational and engineering services to improve application reliability, eliminate technical debt, and ensure seamless performance."
          />

          {/* Grid showing top 8 services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 8).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelectService={onSelectService}
                onRequestQuote={onRequestQuoteForService}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => onNavigate("services")}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All 12 Services
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================
          WHY DELMOS (6 Pillars)
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="WHY DELMOS"
            title="Why Businesses Choose Delmos Tech"
            description="Our service model combines structured incident management with continuous engineering enhancements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {WHY_DELMOS_POINTS.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-blue-400 hover:shadow-md transition-all duration-300"
              >
                <span className="font-mono text-xs font-bold text-blue-600 tracking-wider">
                  {item.number}
                </span>

                <h3 className="text-xl font-bold text-slate-900 tracking-tight mt-3 mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SUPPORT PROCESS (5 Steps)
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            eyebrow="HOW WE WORK"
            title="A Structured Support Process"
            description="A disciplined 5-stage lifecycle to systematically understand, stabilize, maintain, optimize, and modernize business applications."
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 mt-12">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 border border-slate-700/80 p-6 rounded-2xl relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-mono font-bold text-sm flex items-center justify-center mb-4">
                    {step.step}
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-1">
                    {step.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-400 mb-2">
                    {step.summary}
                  </p>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          INDUSTRIES SNAPSHOT
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="INDUSTRIES"
            title="Industries We Support"
            description="Our specialized application support practices adapt to the security, compliance, and throughput requirements of each sector."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.slice(0, 4).map((industry) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                onRequestSupport={() => onNavigate("contact")}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate("industries")}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All 8 Industries
            </Button>
          </div>
        </div>
      </section>

      {/* ========================================================
          TECHNOLOGY ARCHITECTURE PANEL PREVIEW
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                TECHNOLOGY EXPERTISE
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Comprehensive Multi-Stack Technology Coverage
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Whether your applications run on enterprise Java, modern React
                with TypeScript, cloud-native Python, legacy .NET, or
                distributed PostgreSQL/Oracle databases, our certified engineers
                take full ownership of stability.
              </p>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate("technologies")}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Technology Stack
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ArchitecturePanel />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SUPPORT MODELS (L1, L2, L3, 24x7)
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="SUPPORT MODELS"
            title="Flexible Support Engagements"
            description="Choose the right level of coverage for your application portfolio, from shared monitoring desks to dedicated senior engineering pods."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUPPORT_MODELS.map((model, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-500 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
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

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {model.description}
                  </p>

                  <ul className="space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                    {model.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate("contact")}
                    className="w-full py-2 px-3 text-xs font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>Request Tier SLA</span>
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
      <section className="py-20 lg:py-24 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Partner with Delmos Tech for proactive maintenance, fast incident
            resolution, and continuous improvement services that give your
            leadership peace of mind.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={() => onNavigate("contact")}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request Support
            </Button>

            <Button
              variant="outline-white"
              size="lg"
              onClick={() => onNavigate("contact")}
            >
              Talk to Our Experts
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
