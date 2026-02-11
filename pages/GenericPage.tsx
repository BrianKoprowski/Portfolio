import React, { useState } from 'react';
import { LucideIcon, ExternalLink, FileText, Music, ChevronLeft, ChevronRight, Code as CodeIcon, PlayCircle } from 'lucide-react';
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

  // Google Drive Folder
  // Detects .../folders/FOLDER_ID and converts to embedded view
  if (url.includes('drive.google.com') && url.includes('folders')) {
    const match = url.match(/folders\/([a-zA-Z0-9_-]+)/);
    if (match && match[1]) {
       return `https://drive.google.com/embeddedfolderview?id=${match[1]}#list`;
    }
  }

  // Check if it is a Google Drive Link (File)
  if (url.includes('drive.google.com')) {
    // Replace /view with /preview to get the embeddable version
    return url.replace(/\/view.*/, '/preview').replace(/\/edit.*/, '/preview');
  }
  // Basic YouTube Embed support
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    if (videoId) return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
};

const ContentCard: React.FC<{ item: ProjectItem }> = ({ item }) => {
  const embedUrl = getEmbedUrl(item.url);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  
  // Calculate width style based on size prop
  // Flexbox layout logic:
  // Size 4: Full Width (100%)
  // Size 3: Big & Centered (85%)
  // Size 2: Medium (50% - gap) -> Fits 2 per row
  // Size 1: Small (40% - gap) -> Fits 2 per row, centered, slightly smaller than medium
  const getWidthClass = () => {
    switch (item.size) {
      case 4: return "w-full";
      case 3: return "w-full md:w-[85%]";
      case 2: return "w-full md:w-[calc(50%-1.5rem)]"; // 50% minus half gap
      case 1: return "w-full md:w-[calc(40%-1.5rem)]"; // 40% minus half gap
      default: return "w-full md:w-[calc(50%-1.5rem)]";
    }
  };

  const widthClass = getWidthClass();

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
  
  // Explicitly check for Drive Folder, regardless of what the user set the type to.
  // This allows type: 'code' to behave like a folder if the URL is a folder.
  const isDriveFolder = item.url.includes('drive.google.com') && item.url.includes('folders');

  // Determine which preview renderer to use
  const renderPreview = () => {
    // 1. IMAGE & CAROUSEL
    if (item.type === 'image' || isCarousel) {
      return (
        <div className="relative w-full h-full group/carousel">
          <img 
            src={isCarousel ? item.images![currentImgIdx] : item.url} 
            alt={item.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {isCarousel && (
            <>
              {/* Controls */}
              <div className="absolute inset-0 flex items-center justify-between p-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button 
                  onClick={handlePrev}
                  className="pointer-events-auto p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm border border-white/20 transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={handleNext}
                  className="pointer-events-auto p-2 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm border border-white/20 transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              {/* Indicators */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
                {item.images!.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`h-1.5 rounded-full shadow-sm transition-all duration-300 ${idx === currentImgIdx ? 'bg-teal-400 w-6' : 'bg-white/60 w-1.5'}`} 
                  />
                ))}
              </div>
            </>
          )}
        </div>
      );
    }

    // 2. AUDIO
    if (item.type === 'audio') {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-teal-50 to-emerald-50/50 p-4 relative overflow-hidden">
          {/* Decorative Waves */}
          <div className="absolute inset-0 opacity-10 flex items-center justify-center gap-1">
             {[...Array(10)].map((_, i) => (
               <div key={i} className="w-2 bg-teal-900 rounded-full animate-pulse" style={{ height: `${Math.random() * 60 + 20}%`, animationDelay: `${i * 0.1}s` }} />
             ))}
          </div>
          
          <div className="relative z-10 mb-4 p-4 rounded-full bg-white/60 shadow-lg text-teal-800 border border-white/50">
            <Music size={32} />
          </div>
          {/* Google Drive Audio Embed */}
          <div className="relative z-10 w-full max-w-[250px]">
            <iframe 
              src={embedUrl} 
              className="w-full h-12 border-none rounded-lg overflow-hidden shadow-sm" 
              title={item.title}
            ></iframe>
          </div>
        </div>
      );
    }

    // 3. FOLDER (Explicit type OR Detected Drive Folder)
    // If it is a drive folder, we want the iframe preview regardless of whether it's tagged as 'code' or 'folder'
    if (item.type === 'folder' || isDriveFolder) {
      return (
        <div className="w-full h-full bg-white relative">
           <iframe 
              src={embedUrl} 
              className="w-full h-full border-none" 
              title={item.title}
           ></iframe>
        </div>
      );
    }

    // 4. CODE (Only if NOT a drive folder)
    if (item.type === 'code') {
      return (
        <div className="w-full h-full bg-[#1e293b] flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-[#0f172a] transition-colors">
           {/* Code Editor decorations */}
           <div className="absolute top-0 left-0 right-0 h-6 bg-white/10 flex items-center px-3 gap-1.5 border-b border-white/5">
             <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
           </div>
           
           <div className="text-center p-6 pt-10">
             <div className="inline-block p-4 rounded-2xl bg-white/5 text-teal-400 mb-3 border border-white/10">
               <CodeIcon size={40} />
             </div>
             <h4 className="text-slate-300 font-mono text-sm font-semibold">Source Repository</h4>
             <p className="text-slate-500 text-xs mt-1">View code on GitHub</p>
           </div>
        </div>
      );
    }

    // 5. GENERIC (Video/Doc)
    return (
      <div className="w-full h-full bg-slate-100 relative">
        {item.type === 'video' && !embedUrl.includes('youtube') && !embedUrl.includes('drive') ? (
           // Fallback for non-embeddable videos
           <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-white">
             <PlayCircle size={48} className="opacity-80" />
           </div>
        ) : (
          <iframe 
            src={embedUrl} 
            className="w-full h-full" 
            allow="autoplay; encrypted-media; picture-in-picture"
            title={item.title}
          ></iframe>
        )}
      </div>
    );
  };

  const getButtonText = () => {
    if (item.type === 'code') return 'View Code';
    if (item.type === 'video') return 'Watch Video';
    if (item.type === 'audio') return 'Listen';
    if (item.type === 'folder' || isDriveFolder) return 'Open Folder';
    return 'Open File';
  };

  return (
    <div className={`bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group flex flex-col ${widthClass} mb-0`}>
      {/* Preview Area */}
      <div className="w-full aspect-video bg-slate-50 relative border-b border-white/30 overflow-hidden group-hover:border-teal-400/30 transition-colors">
        {renderPreview()}
        
        {/* Hover Overlay for direct link (Only if not carousel or active iframe) */}
        {!isCarousel && !isDriveFolder && (
           <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors pointer-events-none" />
        )}
      </div>

      {/* Info Area */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-teal-900 transition-colors">
            {item.title}
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 bg-teal-500/10 border border-teal-500/20 px-2 py-1 rounded-full">
            {item.type}
          </span>
        </div>
        
        <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">
          {item.description}
        </p>

        {/* Action Button */}
        {item.url && (
          <a 
            href={item.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/60 hover:bg-teal-500 hover:text-white text-teal-900 font-semibold transition-all duration-300 border border-white/60 shadow-sm hover:shadow-teal-500/20"
          >
            <span>{getButtonText()}</span>
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
      
      {/* Content Flex Grid */}
      {items.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-6">
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
