import React from 'react';

interface StatCardProps {
  number: string;
  label: string;
  detail?: string;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ number, label, detail, icon }) => {
  return (
    <div className="group bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        {icon && (
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
            {icon}
          </div>
        )}
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          Verified SLA
        </span>
      </div>

      <div className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums font-mono">
        {number}
      </div>

      <div className="mt-2 text-sm font-semibold text-slate-800">
        {label}
      </div>

      {detail && (
        <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
          {detail}
        </p>
      )}
    </div>
  );
};
