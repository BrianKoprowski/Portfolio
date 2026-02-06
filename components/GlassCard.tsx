import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GlassCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  to?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'default' | 'highlight';
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  to, 
  onClick, 
  className = '',
  variant = 'default'
}) => {
  // Enhanced styles matching FMP card:
  // - Deeper border glow on hover
  // - Scale effect
  // - Shadow depth
  const baseStyles = "relative overflow-hidden glass-panel p-6 rounded-3xl flex flex-col items-center justify-center text-center cursor-pointer group transition-all duration-500 hover:bg-white/40 hover:scale-[1.03] hover:shadow-2xl hover:shadow-teal-900/10 border-2 border-white/20 hover:border-white/60";
  
  const variantStyles = variant === 'highlight' 
    ? "bg-gradient-to-br from-white/40 to-white/10 shadow-lg" 
    : "";

  const content = (
    <>
      {/* Decorative background glow/shine */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Decorative large background icon (faded) */}
      {Icon && (
        <div className="absolute top-[-10px] right-[-10px] opacity-0 group-hover:opacity-5 transition-all duration-500 transform rotate-12 scale-150 pointer-events-none">
          <Icon size={120} />
        </div>
      )}

      {Icon && (
        <div className="relative z-10 mb-5 p-4 rounded-full bg-gradient-to-br from-white/80 via-white/50 to-white/20 text-teal-900 shadow-[inset_0_2px_4px_rgba(255,255,255,0.8)] border border-white/60 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 backdrop-blur-sm group-hover:shadow-teal-400/20">
          <Icon size={36} strokeWidth={1.5} className="drop-shadow-sm" />
        </div>
      )}
      
      <h3 className="relative z-10 text-xl font-bold text-slate-800 mb-2 group-hover:text-teal-900 transition-colors duration-300">{title}</h3>
      {description && (
        <p className="relative z-10 text-sm text-slate-600 font-medium group-hover:text-slate-800 transition-colors duration-300">{description}</p>
      )}
    </>
  );

  if (to) {
    return (
      <a 
        href={`#${to}`} 
        className={`${baseStyles} ${variantStyles} ${className} block`}
      >
        {content}
      </a>
    );
  }

  return (
    <div 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {content}
    </div>
  );
};

export default GlassCard;