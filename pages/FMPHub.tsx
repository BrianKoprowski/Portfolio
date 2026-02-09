import React from 'react';
import { Palette, BookOpen, Code, FileText, Layers, Calendar } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import BackButton from '../components/BackButton';
import { categoryConfigs } from '../src/data/content';

const FMPHub: React.FC = () => {
  // Fetch config for the main FMP hub page
  const config = categoryConfigs['fmp-hub'];

  return (
    <div className="max-w-[844px] mx-auto w-full animate-fade-in px-4 pb-20">
      <BackButton />

      {/* Header Container - Width matched to 844px max */}
      <div className="flex flex-col items-center mb-8">
        
        {/* Dynamic Header Image */}
        {config?.headerImage && (
          <div 
            className="relative w-full rounded-3xl overflow-hidden border-4 border-white/30 shadow-2xl shadow-teal-900/10 group"
            style={{ aspectRatio: '844/357' }}
          >
            <img 
              src={config.headerImage} 
              alt="FMP Header" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent pointer-events-none" />
          </div>
        )}
      </div>

      {/* Dashboard Grid Layout */}
      {/* "Stand up landscape" interpreted as a vertical sidebar (Standing up) alongside the main content */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        
        {/* Left Column: Title Block + 2x2 Grid */}
        <div className="flex-1 flex flex-col gap-6">
          
          {/* Title Block */}
          <div className="glass-panel p-6 rounded-3xl relative overflow-hidden flex flex-col justify-center min-h-[160px]">
             {/* Decor */}
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-50"></div>
             
             <div className="flex items-center gap-3 mb-3">
               <div className="p-2.5 bg-teal-500/10 rounded-2xl text-teal-800">
                 <Layers size={28} />
               </div>
               <h1 className="text-2xl md:text-3xl font-bold text-slate-800">FMP Hub</h1>
             </div>
             <p className="text-slate-600 leading-relaxed text-sm md:text-base">
               Central hub for <span className="font-semibold text-teal-700">Shade Jump</span>. 
               Documentation, assets, and development logs.
             </p>
          </div>

          {/* Navigation Grid (Research, Art, Timeline, Dev) */}
          <div className="grid grid-cols-2 gap-6 flex-1">
            <GlassCard 
              title="Research" 
              icon={BookOpen} 
              to="/fmp/research"
              className="min-h-[140px]"
            />
            <GlassCard 
              title="Art" 
              icon={Palette} 
              to="/fmp/art"
              className="min-h-[140px]"
            />
            <GlassCard 
              title="Timeline" 
              icon={Calendar} 
              to="/fmp/timeline"
              className="min-h-[140px]"
            />
            <GlassCard 
              title="Dev" 
              icon={Code} 
              to="/fmp/dev"
              className="min-h-[140px]"
            />
          </div>
        </div>

        {/* Right Column: GDD (Standing Tall) */}
        {/* This places the GDD "along" Development, Art, and Main Title */}
        <div className="w-full md:w-[260px] flex-shrink-0 flex">
          <GlassCard 
            title="GDD" 
            icon={FileText} 
            description="Master Game Design Document. The complete project blueprint."
            to="/fmp/gdd"
            variant="highlight"
            className="w-full h-full min-h-[220px] border-teal-400/40 flex flex-col justify-center"
          />
        </div>

      </div>
    </div>
  );
};

export default FMPHub;
