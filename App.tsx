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
          <Route path="/audio" element={<GenericPage title="Audio" icon={Mic} />} />
          <Route path="/research" element={<GenericPage title="Research" icon={BookOpen} />} />
          <Route path="/dev" element={<GenericPage title="Development" icon={Code} />} />
          
          {/* Art Routes */}
          <Route path="/art" element={<ArtHub />} />
          <Route path="/art/2d" element={<GenericPage title="2D Art" icon={ImageIcon} content="A collection of sketches, character designs, and UI elements." />} />
          <Route path="/art/3d" element={<GenericPage title="3D Art" icon={Box} content="3D models, environments, and sculpted assets." />} />

          {/* FMP Routes */}
          <Route path="/fmp" element={<FMPHub />} />
          <Route path="/fmp/research" element={<GenericPage title="FMP Research" icon={BookOpen} content="Deep dive into the theoretical background of the Final Major Project." />} />
          <Route path="/fmp/art" element={<GenericPage title="FMP Art" icon={ImageIcon} content="Concept art, final textures, and visual development for the FMP." />} />
          <Route path="/fmp/audio" element={<GenericPage title="FMP Audio" icon={Mic} content="Soundtrack, foley, and voice acting for the FMP." />} />
          <Route path="/fmp/dev" element={<GenericPage title="FMP Development" icon={Code} content="Technical documentation, git logs, and mechanic breakdowns." />} />
          <Route path="/fmp/gdd" element={<GenericPage title="Game Design Document" icon={FileText} content="The master document detailing all gameplay mechanics, story, and scope." />} />

          {/* Fallback to Home instead of Navigate to avoid redirect loops in sandboxes */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;