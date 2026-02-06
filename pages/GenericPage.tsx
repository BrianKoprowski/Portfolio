import React from 'react';
import { LucideIcon, ExternalLink, FileText, Music, Image as ImageIcon, Code, Film } from 'lucide-react';
import BackButton from '../components/BackButton';
import { portfolioContent, ProjectItem } from '../src/data/content';

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

  return (
    <div className="bg-white/40 backdrop-blur-md rounded-2xl border border-white/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.01] group flex flex-col h-full">
      {/* Preview Area */}
      <div className="w-full aspect-video bg-slate-100 relative border-b border-white/30 overflow-hidden group-hover:border-teal-400/30 transition-colors">
        
        {item.type === 'image' && (
          <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
        )}

        {(item.type === 'document' || item.type === 'code' || item.type === 'video') && (
          <iframe 
            src={embedUrl} 
            className="w-full h-full" 
            allow="autoplay"
            title={item.title}
          ></iframe>
        )}

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
        
        {/* Hover Overlay for direct link */}
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors pointer-events-none" />
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

        <a 
          href={item.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/50 hover:bg-teal-500 hover:text-white text-teal-900 font-semibold transition-all duration-300 border border-white/60"
        >
          <span>Open Original</span>
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

const GenericPage: React.FC<GenericPageProps> = ({ title, categoryKey, icon: Icon, content }) => {
  const items = portfolioContent[categoryKey] || [];

  return (
    <div className="max-w-7xl mx-auto w-full animate-fade-in">
      <BackButton />
      
      {/* Header */}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
