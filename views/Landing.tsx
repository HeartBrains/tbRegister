
import React from 'react';
import { ViewState } from '../types';

interface LandingProps {
  setView: (view: ViewState) => void;
}

export const Landing: React.FC<LandingProps> = ({ setView }) => {
  return (
    <div className="bg-slate-50">
      {/* Registration Selection */}
      <div id="register-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">เลือกประเภทสมาชิกที่เหมาะกับคุณ</h2>
          <div className="h-1.5 w-20 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1: Local (Thai) */}
          <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 p-8 flex flex-col">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">person</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">บุคคลทั่วไป (ไทย)</h3>
            <button 
              onClick={() => setView(ViewState.REGISTER_LOCAL)}
              className="w-full py-4 bg-indigo-50 text-indigo-700 font-bold rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm mt-auto"
            >
              สมัครสมาชิกรายบุคคล
            </button>
          </div>

          {/* Card 2: Foreigner */}
          <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 p-8 flex flex-col">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">public</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Foreign Member</h3>
            <button 
              onClick={() => setView(ViewState.REGISTER_FOREIGN)}
              className="w-full py-4 bg-emerald-50 text-emerald-700 font-bold rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm mt-auto"
            >
              Register as Foreigner
            </button>
          </div>

          {/* Card 3: Corporate */}
          <div className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 p-8 flex flex-col">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <span className="material-symbols-outlined text-3xl">corporate_fare</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">สมาชิกนิติบุคคล</h3>
            <button 
              onClick={() => setView(ViewState.REGISTER_CORPORATE)}
              className="w-full py-4 bg-blue-50 text-blue-700 font-bold rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm mt-auto"
            >
              สมัครสมาชิกนิติบุคคล
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
