import React, { useState } from 'react';
import { LucideIcon, ExternalLink, FileText, Music, ChevronLeft, ChevronRight } from 'lucide-react';
import BackButton from '../components/BackButton';
import { portfolioContent, ProjectItem, categoryConfigs } from '../src/data/content';

interface GenericPageProps {
  title: string;
  categoryKey: string; // Used to fetch data from content.ts
  icon?: LucideIcon;
  content?: string;
}

// Helper to convert Drive Share Links to Embed Links
const getEmbedUrl = (url: string): string => {
  if (!url) return '';
  // Check if it is a Google Drive Link
  if (url.includes('drive.google.com')) {
    // Replace /view with /preview to get the embeddable version
    return url.replace(/\/view.*/, '/preview').replace(/\/edit.*/, '/preview');
  }
  return url;
};

const ContentCard: React.FC<{ item: ProjectItem }> = ({ item }) => {
  const embedUrl = getEmbedUrl(item.url);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  
  // Calculate column span based on size prop (default to 1)
  const sizeClass = (() => {
    switch (item.size) {
      case 2: return "col-span-1 md:col-span-2";
      case 3: return "col-span-1 md:col-span-2 lg:col-span-3";
      case 4: return "col-span-1 md:col-span-2 lg:col-span-4";
      default: return "col-span-1"; // size 1
    }
  })();

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (item.images) {
      setCurrentImgIdx((prev) => (prev + 1) % item.images!.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (item.images) {
      setCurrentImgIdx((prev) => (prev - 1 + item.images!.length) % item.images!.length);
    }
  };

  const isCarousel = item.type === 'carousel' && item.images && item.images.length > 0;

  return (
    <div className={`bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group flex flex-col h-full ${sizeClass}`}>
      {/* Preview Area */}
      <div className="w-full aspect-video bg-slate-100 relative border-b border-white/30 overflow-hidden group-hover:border-teal-400/30 transition-colors">
        
        {/* === IMAGE TYPE === */}
        {item.type === 'image' && (
          <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
        )}

        {/* === CAROUSEL TYPE === */}
        {isCarousel && (
          <div className="relative w-full h-full group/carousel">
             <img 
               src={item.images![currentImgIdx]} 
               alt={`${item.title} ${currentImgIdx + 1}`} 
               className="w-full h-full object-cover transition-opacity duration-500"
             />
             
             {/* Controls */}
             <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
               <button 
                 onClick={handlePrev}
                 className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm border border-white/20 transition-all"
               >
                 <ChevronLeft size={24} />
               </button>
               <button 
                 onClick={handleNext}
                 className="p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm border border-white/20 transition-all"
               >
                 <ChevronRight size={24} />
               </button>
             </div>

             {/* Indicators */}
             <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
               {item.images!.map((_, idx) => (
                 <div 
                   key={idx} 
                   className={`h-1.5 rounded-full shadow-sm transition-all duration-300 ${idx === currentImgIdx ? 'bg-teal-400 w-6' : 'bg-white/60 w-1.5'}`} 
                 />
               ))}
             </div>
          </div>
        )}

        {/* === IFRAME TYPES (Doc, Video, Code) === */}
        {(item.type === 'document' || item.type === 'code' || item.type === 'video') && (
          <iframe 
            src={embedUrl} 
            className="w-full h-full" 
            allow="autoplay"
            title={item.title}
          ></iframe>
        )}

        {/* === AUDIO TYPE === */}
        {item.type === 'audio' && (
          <div className="w-full h-full flex flex-col items-center justify-center bg-teal-50/50 p-4">
             <div className="mb-4 p-4 rounded-full bg-white/60 shadow-lg text-teal-800">
               <Music size={32} />
             </div>
             {/* Google Drive Audio Embed */}
             <iframe 
                src={embedUrl} 
                className="w-full h-16 border-none" 
                title={item.title}
             ></iframe>
          </div>
        )}
        
        {/* Hover Overlay for direct link (Only if not carousel) */}
        {!isCarousel && (
           <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors pointer-events-none" />
        )}
      </div>

      {/* Info Area */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-teal-900 transition-colors">
            {item.title}
          </h3>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white/50 px-2 py-1 rounded-md">
            {item.type}
          </span>
        </div>
        
        <p className="text-slate-600 text-sm mb-6 flex-1">
          {item.description}
        </p>

        {/* Hide Open Original button for pure carousels if they don't have a main URL, or show if they do */}
        {item.url && (
          <a 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/50 hover:bg-teal-500 hover:text-white text-teal-900 font-semibold transition-all duration-300 border border-white/60"
          >
            <span>Open Original</span>
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
};

const GenericPage: React.FC<GenericPageProps> = ({ title, categoryKey, icon: Icon, content }) => {
  const items = portfolioContent[categoryKey] || [];
  const config = categoryConfigs[categoryKey];

  return (
    <div className="max-w-7xl mx-auto w-full animate-fade-in">
      <BackButton />
      
      {/* Dynamic Header Image */}
      {config?.headerImage && (
        <div className="relative w-full h-48 md:h-64 rounded-3xl overflow-hidden mb-8 border border-white/40 shadow-lg">
          <img 
            src={config.headerImage} 
            alt={`${title} Header`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-6 md:left-8 text-white drop-shadow-md">
             {/* Optional: Put title over image if desired, but we keep the main title block below for consistency */}
          </div>
        </div>
      )}
      
      {/* Title Block */}
      <div className="glass-panel p-8 md:p-10 rounded-3xl mb-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        {Icon && (
          <div className="p-6 bg-gradient-to-br from-white/60 to-white/20 rounded-2xl text-teal-800 shadow-lg border border-white/50">
            <Icon size={48} />
          </div>
        )}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">{title}</h1>
          <p className="text-lg text-slate-700 font-medium max-w-2xl">
            {content || `Explore my collection of ${title.toLowerCase()}. Click on any item to view the full file.`}
          </p>
        </div>
      </div>
      
      {/* Content Grid */}
      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {items.map((item) => (
             <ContentCard key={item.id} item={item} />
           ))}
        </div>
      ) : (
        /* Empty State */
        <div className="glass-panel p-12 rounded-3xl text-center border-dashed border-2 border-white/40">
          <div className="opacity-40 mb-4 inline-block">
             <FileText size={64} />
          </div>
          <h3 className="text-2xl font-bold text-slate-600 mb-2">Coming Soon</h3>
          <p className="text-slate-500">Content for {title} is currently being curated.</p>
        </div>
      )}
    </div>
  );
};

export default GenericPage;
