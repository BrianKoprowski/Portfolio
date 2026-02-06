import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <button 
      onClick={() => navigate(-1)}
      className="mb-6 flex items-center gap-2 px-4 py-2 rounded-full glass-button text-slate-700 font-semibold hover:text-teal-800"
    >
      <ArrowLeft size={20} />
      <span>Back</span>
    </button>
  );
};

export default BackButton;