import React from 'react';
import { Mic, Palette, BookOpen, Code, FileText, Gamepad2, ArrowRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto w-full flex flex-col gap-10">
      
      {/* Header / Hero Section */}
      <section className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-fade-in-up">
        <div className="relative shrink-0">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/50 shadow-lg bg-white/20 relative flex items-center justify-center group">
             {/* 
                User: Replace the src below with your actual logo image URL. 
                If you have a local file, put it in a public folder and reference it.
             */}
            <img 
              src="https://github.com/BrianKoprowski/Portfolio/blob/main/components/my_logo.png?raw=true" 
              alt="My Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            Creative Portfolio
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed font-medium">
            Welcome to my portfolio. I am Brian Koprowski, student at Chichester College. This Portfolio is a presentation of my work and projects. On this page you can explore my work files, research, and my Final Major Project at HSDC.
          </p>
        </div>
      </section>

      {/* Main Categories Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard 
          title="Audio" 
          icon={Mic} 
          description="Sound design & composition"
          to="/audio"
        />
        <GlassCard 
          title="Art" 
          icon={Palette} 
          description="2D & 3D visualizations"
          to="/art"
        />
        <GlassCard 
          title="Research" 
          icon={BookOpen} 
          description="Coursework & creative studies"
          to="/research"
        />
        <GlassCard 
          title="Development" 
          icon={Code} 
          description="Programming & Game Dev"
          to="/dev"
        />
      </section>

      {/* FMP Section - Using <a> for robust navigation */}
      <section className="mt-4">
        <a 
            href="#/fmp"
            className="block glass-panel p-8 rounded-3xl cursor-pointer hover:bg-white/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-teal-900/5 border-2 border-white/40 hover:border-white/60 group relative overflow-hidden"
        >
          {/* Background Decor Icon */}
          <div className="absolute top-[-20px] right-[-20px] p-8 opacity-5 group-hover:opacity-10 transition-opacity transform rotate-12 duration-500">
            <Gamepad2 size={200} />
          </div>
          
          {/* Shine effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-teal-100/50 to-teal-500/10 border border-white/60 shadow-inner backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                    <Gamepad2 size={40} className="text-teal-900" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-teal-900 mb-1">FMP Project</h2>
                  <p className="text-slate-700 font-medium">Final Major Project Hub</p>
                </div>
            </div>
            
            {/* Simple arrow indicator instead of button */}
            <div className="w-12 h-12 rounded-full border border-teal-600/20 flex items-center justify-center text-teal-800 group-hover:bg-teal-500/10 group-hover:scale-110 transition-all duration-300 group-hover:border-teal-600/40">
                 <ArrowRight size={24} />
            </div>
          </div>

          {/* Mini preview icons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3 opacity-80 relative z-10">
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/40 border border-white/40 px-3 py-1.5 rounded-full text-slate-700 shadow-sm backdrop-blur-sm"><BookOpen size={14}/> Research</span>
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/40 border border-white/40 px-3 py-1.5 rounded-full text-slate-700 shadow-sm backdrop-blur-sm"><Palette size={14}/> Art</span>
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/40 border border-white/40 px-3 py-1.5 rounded-full text-slate-700 shadow-sm backdrop-blur-sm"><Mic size={14}/> Audio</span>
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/40 border border-white/40 px-3 py-1.5 rounded-full text-slate-700 shadow-sm backdrop-blur-sm"><Code size={14}/> Dev</span>
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-white/40 border border-white/40 px-3 py-1.5 rounded-full text-slate-700 shadow-sm backdrop-blur-sm"><FileText size={14}/> GDD</span>
          </div>
        </a>
      </section>

    </div>
  );
};

export default Home;
