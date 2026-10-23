import React from 'react';
import { TechCategory } from '../../types';

interface TechCategoryCardProps {
  category: TechCategory;
}

export const TechCategoryCard: React.FC<TechCategoryCardProps> = ({ category }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
      {/* Category Header */}
      <div className="flex items-start gap-4 sm:gap-6 pb-6 border-b border-slate-100">
        <div className="w-12 h-12 rounded-xl bg-blue-600 text-white font-mono text-base font-bold flex items-center justify-center shrink-0 shadow-sm">
          {category.number}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            {category.title}
          </h3>
          <p className="mt-1 text-sm text-slate-600 leading-relaxed max-w-2xl">
            {category.description}
          </p>
        </div>
      </div>

      {/* Two-Column Details & Badges */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Bullets */}
        <div className="lg:col-span-7 space-y-4">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
            Engineering Scope & Capabilities
          </h4>
          <ul className="space-y-3">
            {category.bullets.map((b, idx) => (
              <li key={idx} className="text-sm text-slate-700 leading-relaxed flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                <span>
                  <strong className="font-semibold text-slate-900">{b.title}</strong> – {b.desc}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Technology Logo Cards */}
        <div className="lg:col-span-5">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Supported Stacks & Tools
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {category.items.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-500/40 hover:shadow-sm transition-all duration-200 flex flex-col items-center justify-center text-center gap-2 group"
                style={{ borderTopWidth: '3px', borderTopColor: item.color || '#1E66F5' }}
              >
                {item.deviconClass ? (
                  <i className={`${item.deviconClass} text-2xl group-hover:scale-110 transition-transform`} />
                ) : (
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center font-mono">
                    {item.shortCode || 'TECH'}
                  </div>
                )}
                <span className="text-xs font-semibold text-slate-800 leading-tight">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
