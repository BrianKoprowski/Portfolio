import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import GenericPage from './pages/GenericPage';
import ArtHub from './pages/ArtHub';
import FMPHub from './pages/FMPHub';
import { Mic, BookOpen, Code, Box, Image as ImageIcon, FileText } from 'lucide-react';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Main Category Routes */}
          <Route 
            path="/audio" 
            element={<GenericPage title="Audio" categoryKey="audio" icon={Mic} content="Soundscapes, voice acting, and musical compositions." />} 
          />
          <Route 
            path="/research" 
            element={<GenericPage title="Research" categoryKey="research" icon={BookOpen} content="Academic studies, market analysis, and technical breakdowns." />} 
          />
          <Route 
            path="/dev" 
            element={<GenericPage title="Development" categoryKey="dev" icon={Code} content="Programming logs, GitHub repositories, and mechanic prototypes." />} 
          />
          
          {/* Art Routes */}
          <Route path="/art" element={<ArtHub />} />
          <Route 
            path="/art/2d" 
            element={<GenericPage title="2D Art" categoryKey="art-2d" icon={ImageIcon} content="A collection of sketches, character designs, and UI elements." />} 
          />
          <Route 
            path="/art/3d" 
            element={<GenericPage title="3D Art" categoryKey="art-3d" icon={Box} content="3D models, environments, and sculpted assets." />} 
          />

          {/* FMP Routes */}
          <Route path="/fmp" element={<FMPHub />} />
          <Route 
            path="/fmp/research" 
            element={<GenericPage title="FMP Research" categoryKey="fmp-research" icon={BookOpen} content="Deep dive into the theoretical background of the Final Major Project." />} 
          />
          <Route 
            path="/fmp/art" 
            element={<GenericPage title="FMP Art" categoryKey="fmp-art" icon={ImageIcon} content="Concept art, final textures, and visual development for the FMP." />} 
          />
          <Route 
            path="/fmp/audio" 
            element={<GenericPage title="FMP Audio" categoryKey="fmp-audio" icon={Mic} content="Soundtrack, foley, and voice acting for the FMP." />} 
          />
          <Route 
            path="/fmp/dev" 
            element={<GenericPage title="FMP Development" categoryKey="fmp-dev" icon={Code} content="Technical documentation, git logs, and mechanic breakdowns." />} 
          />
          <Route 
            path="/fmp/gdd" 
            element={<GenericPage title="Game Design Document" categoryKey="fmp-gdd" icon={FileText} content="The master document detailing all gameplay mechanics, story, and scope." />} 
          />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
