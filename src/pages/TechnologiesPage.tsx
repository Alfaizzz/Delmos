import React from "react";
import { ArrowRight } from "lucide-react";
import { TECH_CATEGORIES } from "../constants/technologiesData";
import { IMAGES } from "../constants/images";
import { PageRoute } from "../types";
import { SectionHeader } from "../components/common/SectionHeader";
import { Button } from "../components/common/Button";
import { Breadcrumb } from "../components/common/Breadcrumb";
import { TechCategoryCard } from "../components/technologies/TechCategoryCard";
import { ArchitecturePanel } from "../components/technologies/ArchitecturePanel";

interface TechnologiesPageProps {
  onNavigate: (route: PageRoute) => void;
}

export const TechnologiesPage: React.FC<TechnologiesPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="space-y-0">
      {/* Breadcrumb Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb currentPage="technologies" onNavigate={onNavigate} />
        </div>
      </div>

      {/* ========================================================
          TECHNOLOGIES HERO
          ======================================================== */}
      <section className="relative min-h-[480px] lg:min-h-[520px] flex items-center bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.techHero}
            alt="Delmos Multi-stack Cloud Architecture"
            className="w-full h-full object-cover object-center opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">
              TECHNOLOGY · APPLICATION · CLOUD · DEVOPS
            </p>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
              style={{ textWrap: "balance" }}
            >
              Technology Expertise for{" "}
              <span className="text-blue-400 block sm:inline">
                Modern Application Environments
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Our engineering teams operate across application, database, cloud,
              and DevOps infrastructure to troubleshoot, maintain, and modernize
              complex enterprise platforms.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate("contact")}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Request Stack Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          ARCHITECTURE MATRIX PANEL
          ======================================================== */}
      <section className="py-16 lg:py-20 bg-slate-100/80 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">
                BUILT FOR PRODUCTION SUPPORT
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Support Across the Complete Application Lifecycle
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Technology environments evolve continuously. Delmos focuses on
                sustaining the platforms that businesses already depend upon
                daily, helping engineering and operations leadership manage
                upgrades, diagnose incidents, and optimize performance.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-800 pt-2">
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <span className="text-blue-600 font-bold block mb-0.5">
                    01
                  </span>
                  Application maintenance
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <span className="text-blue-600 font-bold block mb-0.5">
                    02
                  </span>
                  Database tuning & backup
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <span className="text-blue-600 font-bold block mb-0.5">
                    03
                  </span>
                  Cloud & Kubernetes ops
                </div>
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <span className="text-blue-600 font-bold block mb-0.5">
                    04
                  </span>
                  CI/CD & API integrations
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <ArchitecturePanel />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6 CATEGORIES STACK
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="TECHNOLOGY COVERAGE"
            title="Technologies We Support"
            description="Delmos supports frontend, backend, database, cloud, DevOps, and enterprise integration environments to ensure maximum application reliability."
          />

          <div className="space-y-8 mt-12">
            {TECH_CATEGORIES.map((category) => (
              <TechCategoryCard key={category.id} category={category} />
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
            NEED STACK SUPPORT?
          </p>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6"
            style={{ textWrap: "balance" }}
          >
            Need Support for Your Technology Environment?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Tell Delmos about your technology stack, frameworks, hosting cloud,
            and support requirements.
          </p>

          <Button
            variant="primary"
            size="lg"
            onClick={() => onNavigate("contact")}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Talk to Our Team
          </Button>
        </div>
      </section>
    </div>
  );
};
