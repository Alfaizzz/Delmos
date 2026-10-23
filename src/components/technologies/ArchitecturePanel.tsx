import React from 'react';
import { Layers, Database, Cloud, Network, ShieldCheck, Check } from 'lucide-react';

export const ArchitecturePanel: React.FC = () => {
  const tiers = [
    {
      code: 'APP',
      title: 'Application & Frontend Tier',
      subtitle: 'React • Angular • TypeScript • Java • Python • .NET Core',
      icon: <Layers className="w-5 h-5" />,
      color: 'bg-blue-600/20 text-blue-400 border-blue-500/30',
      status: 'Monitored 24/7',
    },
    {
      code: 'DATA',
      title: 'Database & Storage Layer',
      subtitle: 'Oracle • MySQL • PostgreSQL • SQL Server • MongoDB',
      icon: <Database className="w-5 h-5" />,
      color: 'bg-emerald-600/20 text-emerald-400 border-emerald-500/30',
      status: 'Automated Backups Active',
    },
    {
      code: 'CLOUD',
      title: 'Cloud & Infrastructure Stack',
      subtitle: 'AWS • Azure • Google Cloud • Docker • Kubernetes (K8s)',
      icon: <Cloud className="w-5 h-5" />,
      color: 'bg-indigo-600/20 text-indigo-400 border-indigo-500/30',
      status: 'High Availability Multi-AZ',
    },
    {
      code: 'API',
      title: 'Enterprise Integration Mesh',
      subtitle: 'REST APIs • GraphQL • Webhooks • Message Queues (Kafka/RabbitMQ)',
      icon: <Network className="w-5 h-5" />,
      color: 'bg-sky-600/20 text-sky-400 border-sky-500/30',
      status: 'Encrypted TLS 1.3',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl text-white">
      {/* Panel Header */}
      <div className="flex items-center justify-between pb-5 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
            Enterprise Architecture Support Matrix
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span className="font-semibold">All Systems Live</span>
        </div>
      </div>

      {/* Tier stack */}
      <div className="mt-6 space-y-3">
        {tiers.map((tier, idx) => (
          <div key={idx}>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-blue-500/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border ${tier.color}`}
                >
                  {tier.icon}
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">
                    {tier.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {tier.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-slate-400 self-end sm:self-center font-medium bg-slate-800/60 px-2.5 py-1 rounded-md">
                <Check className="w-3 h-3 text-emerald-400" />
                <span>{tier.status}</span>
              </div>
            </div>

            {idx < tiers.length - 1 && (
              <div className="w-0.5 h-3 bg-slate-800 ml-9 my-0.5" />
            )}
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>Guaranteed 99.9% application uptime focus across all connected layers.</span>
        <span className="text-blue-400 font-semibold">Tiered SLA Escalation Matrix</span>
      </div>
    </div>
  );
};
