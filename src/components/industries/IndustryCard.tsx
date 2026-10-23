import React from 'react';
import {
  Building2,
  Cross,
  Factory,
  ShoppingCart,
  GraduationCap,
  Truck,
  Hammer,
  Landmark,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { IndustryItem } from '../../types';

interface IndustryCardProps {
  industry: IndustryItem;
  onRequestSupport?: (industryTitle: string) => void;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
  industry,
  onRequestSupport,
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-5 h-5" />,
    Cross: <Cross className="w-5 h-5" />,
    Factory: <Factory className="w-5 h-5" />,
    ShoppingCart: <ShoppingCart className="w-5 h-5" />,
    GraduationCap: <GraduationCap className="w-5 h-5" />,
    Truck: <Truck className="w-5 h-5" />,
    Hammer: <Hammer className="w-5 h-5" />,
    Landmark: <Landmark className="w-5 h-5" />,
  };

  return (
    <article className="group bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Header with Number & Icon */}
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-xs font-bold text-blue-600 tracking-wider">
            {industry.number}
          </span>

          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
            {iconMap[industry.icon] || <Building2 className="w-5 h-5" />}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight mb-2.5">
          {industry.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          {industry.description}
        </p>

        {/* Use Cases */}
        <div className="pt-4 border-t border-slate-100 space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
            Critical Workflows
          </span>
          {industry.useCases.slice(0, 3).map((uc, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{uc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6 pt-4 border-t border-slate-100">
        <button
          type="button"
          onClick={() => onRequestSupport?.(industry.title)}
          className="w-full inline-flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors py-1 cursor-pointer"
        >
          <span>Explore Dedicated SLA</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </article>
  );
};
