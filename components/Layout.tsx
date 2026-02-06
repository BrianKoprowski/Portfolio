import React from 'react';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden text-slate-800">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 z-0 w-full h-full bg-gradient-to-br from-[#BBF5C4] via-[#A0F6D5] to-[#83F7EB]">
        {/* Decorative Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#83F7EB] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#BBF5C4] rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-12 min-h-screen flex flex-col">
        <main className="flex-1 w-full">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;