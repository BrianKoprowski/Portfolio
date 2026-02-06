import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 glass-panel p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 text-slate-700">
      <div className="text-sm font-medium">
        &copy; {new Date().getFullYear()} Brian Koprowski. All rights reserved.
      </div>
      
      <div className="flex items-center gap-6">
        <a 
          href="mailto:kbrian_koprowski@proton.me" 
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-white/80 via-white/40 to-white/20 border border-white/60 shadow-lg hover:shadow-teal-400/20 hover:scale-110 transition-all duration-300 text-teal-800 backdrop-blur-md group"
          aria-label="Email"
          title="kbrian_koprowski@proton.me"
        >
          <Mail size={22} className="group-hover:drop-shadow-sm" />
        </a>
        <a 
          href="tel:+447515559140" 
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-white/80 via-white/40 to-white/20 border border-white/60 shadow-lg hover:shadow-teal-400/20 hover:scale-110 transition-all duration-300 text-teal-800 backdrop-blur-md group"
          aria-label="Phone"
          title="+44 7515 559140"
        >
          <Phone size={22} className="group-hover:drop-shadow-sm" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;