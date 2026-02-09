import React from 'react';
import { Palette, BookOpen, Code, FileText, Layers, Calendar } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import BackButton from '../components/BackButton';
import { categoryConfigs } from '../src/data/content';

const FMPHub: React.FC = () => {
  // Fetch config for the main FMP hub page
  const config = categoryConfigs['fmp-hub'];

  return (
    <div className="max-w-4xl mx-auto w-full animate-fade-in px-4 pb-20">
      <BackButton />

      {/* Header Container - Width matched to 844px max */}
      <div className="flex flex-col items-center">
        
        {/* Dynamic Header Image */}
        {config?.headerImage && (
          <div 
            className="relative w-full max-w-[844px] rounded-3xl overflow-hidden mb-8 border-4 border-white/30 shadow-2xl shadow-teal-900/10 group"
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

        {/* Introduction Section */}
        <div className="max-w-[844px] w-full glass-panel p-8 rounded-3xl mb-10 text-center relative overflow-hidden">
           {/* Decor */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-50"></div>
           
           <div className="flex flex-col items-center gap-3">
             <div className="p-3 bg-teal-500/10 rounded-2xl text-teal-800 mb-2">
               <Layers size={32} />
             </div>
             <h1 className="text-3xl md:text-4xl font-bold text-slate-800">Final Major Project Hub</h1>
             <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
               Comprehensive documentation, artistic direction, and development logs for 
               <span className="font-semibold text-teal-700"> Shade Jump</span>.
             </p>
           </div>
        </div>

        {/* Navigation Grid - 2 Columns for better balance with 844px width */}
        <div className="max-w-[844px] w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlassCard 
            title="Research" 
            icon={BookOpen} 
            description="Market analysis, feasibility studies, and initial concepts."
            to="/fmp/research"
            className="min-h-[200px]"
          />
          <GlassCard 
            title="Art & Visuals" 
            icon={Palette} 
            description="Concept art, environmental design, and style guides."
            to="/fmp/art"
            className="min-h-[200px]"
          />
          <GlassCard 
            title="Timeline" 
            icon={Calendar} 
            description="Project roadmap, milestones, and production schedule."
            to="/fmp/timeline"
            className="min-h-[200px]"
          />
          <GlassCard 
            title="Development" 
            icon={Code} 
            description="Technical documentation, git logs, and code breakdown."
            to="/fmp/dev"
            className="min-h-[200px]"
          />
          
          {/* GDD - Full Width */}
          <GlassCard 
            title="Game Design Document (GDD)" 
            icon={FileText} 
            description="The master blueprint. Mechanics, story, characters, and loop."
            to="/fmp/gdd"
            variant="highlight"
            className="md:col-span-2 min-h-[180px] border-teal-400/40"
          />
        </div>

      </div>
    </div>
  );
};

export default FMPHub;
