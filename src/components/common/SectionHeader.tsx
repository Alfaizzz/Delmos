import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlightedText?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  highlightedText,
  description,
  centered = true,
  light = false,
  className = '',
}) => {
  return (
    <div
      className={`max-w-3xl ${
        centered ? 'mx-auto text-center' : 'text-left'
      } mb-12 lg:mb-16 ${className}`}
    >
      {eyebrow && (
        <p
          className={`text-xs font-bold tracking-widest uppercase mb-3 ${
            light ? 'text-blue-400' : 'text-blue-600'
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-slate-900'
        }`}
        style={{ textWrap: 'balance' }}
      >
        {title}{' '}
        {highlightedText && (
          <span className={light ? 'text-blue-400 block sm:inline' : 'text-blue-600 block sm:inline'}>
            {highlightedText}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
