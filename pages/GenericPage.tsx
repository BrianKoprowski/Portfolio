import React from 'react';
import { LucideIcon } from 'lucide-react';
import BackButton from '../components/BackButton';

interface GenericPageProps {
  title: string;
  icon?: LucideIcon;
  content?: string;
}

const GenericPage: React.FC<GenericPageProps> = ({ title, icon: Icon, content }) => {
  return (
    <div className="max-w-5xl mx-auto w-full animate-fade-in">
      <BackButton />
      
      <div className="glass-panel p-8 md:p-12 rounded-3xl min-h-[60vh]">
        <div className="flex items-center gap-4 mb-8 border-b border-slate-500/20 pb-6">
          {Icon && (
            <div className="p-3 bg-white/40 rounded-xl text-teal-800">
              <Icon size={40} />
            </div>
          )}
          <h1 className="text-4xl font-bold text-slate-800">{title}</h1>
        </div>
        
        <div className="prose prose-lg prose-slate max-w-none">
          <p className="text-xl text-slate-700 leading-relaxed font-medium">
            {content || `This is the placeholder content for the ${title} page. Here you would showcase your portfolio items, audio tracks, research papers, or development logs relevant to this category.`}
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Placeholder content cards */}
             {[1, 2, 3].map((item) => (
               <div key={item} className="bg-white/20 p-6 rounded-xl border border-white/30">
                 <div className="h-40 bg-white/30 rounded-lg mb-4 w-full flex items-center justify-center">
                    <span className="text-slate-500 font-bold opacity-50">Content Preview {item}</span>
                 </div>
                 <h3 className="text-lg font-bold mb-2">Project Title {item}</h3>
                 <p className="text-sm text-slate-600">Short description of this specific piece of work.</p>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericPage;