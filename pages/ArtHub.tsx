import React from 'react';
import { Box, Image as ImageIcon } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import BackButton from '../components/BackButton';

const ArtHub: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto w-full animate-fade-in">
      <BackButton />
      
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-800 mb-2">Art Portfolio</h1>
        <p className="text-slate-600 font-medium">Choose a dimension to explore</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassCard 
          title="2D Art" 
          icon={ImageIcon} 
          description="Illustrations, Sketches, and UI Design"
          to="/art/2d"
          className="h-64 md:h-80"
          variant="highlight"
        />
        <GlassCard 
          title="3D Art" 
          icon={Box} 
          description="Modeling, Sculpting, and Renders"
          to="/art/3d"
          className="h-64 md:h-80"
          variant="highlight"
        />
      </div>
    </div>
  );
};

export default ArtHub;