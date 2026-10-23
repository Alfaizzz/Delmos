import React from 'react';
import {
  Activity,
  ShieldAlert,
  AlertCircle,
  Bug,
  Gauge,
  Lock,
  Database,
  ArrowUpCircle,
  Sparkles,
  RefreshCw,
  Cloud,
  Layers,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
  onSelectService?: (service: ServiceItem) => void;
  onRequestQuote?: (serviceTitle: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onSelectService,
  onRequestQuote,
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    Activity: <Activity className="w-5 h-5" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5" />,
    AlertCircle: <AlertCircle className="w-5 h-5" />,
    Bug: <Bug className="w-5 h-5" />,
    Gauge: <Gauge className="w-5 h-5" />,
    Lock: <Lock className="w-5 h-5" />,
    Database: <Database className="w-5 h-5" />,
    ArrowUpCircle: <ArrowUpCircle className="w-5 h-5" />,
    Sparkles: <Sparkles className="w-5 h-5" />,
    RefreshCw: <RefreshCw className="w-5 h-5" />,
    Cloud: <Cloud className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />,
  };

  return (
    <article className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Service Image / Header Banner */}
        {service.image && (
          <div className="relative h-44 w-full overflow-hidden bg-slate-900">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
            
            {/* Number indicator */}
            <div className="absolute top-3.5 left-4 px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-sm border border-white/20 text-white font-mono text-xs font-bold tabular-nums">
              {service.number}
            </div>

            {/* Icon chip */}
            <div className="absolute bottom-3 right-4 w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center shadow-md">
              {iconMap[service.iconName] || <Activity className="w-5 h-5" />}
            </div>
          </div>
        )}

        {/* Card Content */}
        <div className="p-6">
          {!service.image && (
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs font-bold text-blue-600 tracking-wider">
                {service.number}
              </span>
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                {iconMap[service.iconName] || <Activity className="w-4 h-4" />}
              </div>
            </div>
          )}

          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight">
            {service.title}
          </h3>

          <p className="mt-2.5 text-sm text-slate-600 leading-relaxed line-clamp-3">
            {service.description}
          </p>

          {/* Key Deliverables */}
          {service.features && (
            <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Included Support Capabilities
              </span>
              {service.features.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="line-clamp-1">{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Card Action footer */}
      <div className="p-6 pt-0 mt-4 flex items-center justify-between border-t border-slate-100/80 pt-4">
        {onSelectService && (
          <button
            type="button"
            onClick={() => onSelectService(service)}
            className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors cursor-pointer"
          >
            Full Details
          </button>
        )}

        {onRequestQuote && (
          <button
            type="button"
            onClick={() => onRequestQuote(service.title)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-all cursor-pointer ml-auto"
          >
            <span>Request Support</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    </article>
  );
};
