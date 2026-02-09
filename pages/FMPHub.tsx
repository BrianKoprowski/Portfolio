import React from 'react';
import { Palette, BookOpen, Code, FileText, Layers, Calendar } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import BackButton from '../components/BackButton';

const FMPHub: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto w-full animate-fade-in">
      <BackButton />

      <div className="glass-panel p-8 md:p-10 rounded-3xl mb-8 border-l-8 border-l-teal-400">
        <div className="flex items-center gap-4 mb-2">
            <Layers className="text-teal-700" size={32} />
            <h1 className="text-4xl font-bold text-slate-800">Final Major Project (FMP)</h1>
        </div>
        <p className="text-lg text-slate-700 font-medium">
          Comprehensive documentation and assets for my final major project.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <GlassCard 
          title="FMP Research" 
          icon={BookOpen} 
          description="Initial studies & findings"
          to="/fmp/research"
        />
        <GlassCard 
          title="FMP Art" 
          icon={Palette} 
          description="Visual assets & concepts"
          to="/fmp/art"
        />
        <GlassCard 
          title="Timeline" 
          icon={Calendar} 
          description="Schedule & Milestones"
          to="/fmp/timeline"
        />
        <GlassCard 
          title="FMP Development" 
          icon={Code} 
          description="Codebase & mechanics"
          to="/fmp/dev"
        />
        <GlassCard 
          title="GDD" 
          icon={FileText} 
          description="Game Design Document"
          to="/fmp/gdd"
          variant="highlight"
          className="sm:col-span-2 lg:col-span-2"
        />
      </div>
    </div>
  );
};

export default FMPHub;
