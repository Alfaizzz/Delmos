import React from "react";
import { ArrowRight } from "lucide-react";
import { INDUSTRIES } from "../constants/industriesData";
import { PageRoute } from "../types";
import { SectionHeader } from "../components/common/SectionHeader";
import { Button } from "../components/common/Button";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { IndustryCard } from "../components/industries/IndustryCard";

interface IndustriesPageProps {
  onNavigate: (route: PageRoute) => void;
  onRequestQuoteForService: (industryTitle: string) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onNavigate,
  onRequestQuoteForService,
}) => {
  return (
    <div className="space-y-0">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb currentPage="industries" onNavigate={onNavigate} />
        </div>
      </div>

      {/* ========================================================
          INDUSTRIES HERO
          ======================================================== */}
      <section className="relative min-h-[480px] lg:min-h-[520px] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30,102,245,0.35),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-slate-950/80" />
        </div>

        <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">
              INDUSTRY-FOCUSED APPLICATION SUPPORT
            </p>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
              style={{ textWrap: "balance" }}
            >
              Application Support Across{" "}
              <span className="text-blue-400 block sm:inline">
                Business-Critical Industries
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Delmos supports organizations that rely on stable, secure,
              high-concurrency, and continuously improving applications to
              operate their core business.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate("contact")}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Talk to Our Industry Experts
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
                INDUSTRIES WE SUPPORT
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Technology Support Built Around Your Industry
              </h2>
            </div>

            <div className="space-y-4 text-base text-slate-600 leading-relaxed">
              <p>
                Different industries depend on applications for distinct
                business-critical workflows. Delmos provides application
                maintenance aligned directly with the compliance, operational
                speed, and availability requirements of each sector.
              </p>
              <p>
                From financial transactions and healthcare records to shop floor
                manufacturing, high-traffic e-commerce, and public citizen
                services, our support methodology guarantees reliability where
                it matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8 INDUSTRIES GRID
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="OUR INDUSTRY EXPERTISE"
            title="Supporting Applications Across Key Sectors"
            description="Explore how Delmos application support maps directly to business-critical operational environments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRIES.map((industry) => (
              <IndustryCard
                key={industry.id}
                industry={industry}
                onRequestSupport={(title) => onRequestQuoteForService(title)}
              />
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
            APPLICATION SUPPORT
          </p>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6"
            style={{ textWrap: "balance" }}
          >
            Keep Your Business-Critical Applications Running
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Talk to Delmos about your industry environment, regulatory
            compliance demands, and support priorities.
          </p>

          <Button
            variant="primary"
            size="lg"
            onClick={() => onNavigate("contact")}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Request Support Proposal
          </Button>
        </div>
      </section>
    </div>
  );
};
