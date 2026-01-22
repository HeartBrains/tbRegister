
import React from 'react';
import { ViewState } from '../types';

interface AuthProps {
  setView: (view: ViewState) => void;
  isForeign?: boolean;
}

// ----------------------------------------------------------------------
// Success View
// ----------------------------------------------------------------------
export const Success: React.FC<AuthProps> = ({ setView, isForeign }) => {
  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-xl w-full bg-white p-12 rounded-3xl shadow-2xl text-center border border-slate-100 relative overflow-hidden">
        {/* Confetti-like decoration */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600"></div>
        
        <div className="mx-auto flex items-center justify-center h-28 w-28 rounded-full bg-green-50 mb-8 animate-bounce">
          <span className="material-symbols-outlined text-6xl text-green-500">verified</span>
        </div>
        
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          {isForeign ? 'Registration Successful!' : 'ลงทะเบียนสำเร็จ!'}
        </h2>
        <p className="text-slate-600 mb-10 text-lg">
          {isForeign ? 'Thank you for becoming a part of TBIM' : 'ขอบคุณสำหรับการเข้าร่วมเป็นส่วนหนึ่งของ TBIM'}
        </p>
        
        <div className="bg-slate-50 rounded-2xl p-8 mb-10 border border-slate-100 text-left">
          <div className="flex items-start gap-4">
             <span className="material-symbols-outlined text-blue-600 mt-1">info</span>
             <div>
               <p className="font-bold text-slate-800 mb-1">{isForeign ? 'Next Steps:' : 'ขั้นตอนต่อไป:'}</p>
               <p className="text-slate-600 text-sm leading-relaxed">
                 {isForeign 
                   ? 'Our staff will verify your membership information and notify you of the approval result via email within 7 working days. Once approved, you will be able to log in to the system.'
                   : 'เจ้าหน้าที่จะดำเนินการตรวจสอบข้อมูลสมาชิกและแจ้งผลการอนุมัติทางอีเมลภายใน 7 วันทำการ เพื่อให้ท่านสามารถลงชื่อเข้าใช้งานระบบได้'
                 }
               </p>
               {isForeign && <p className="text-xs text-slate-400 mt-4 italic font-medium">* This registration is a simulation for demonstration purposes.</p>}
               {!isForeign && <p className="text-xs text-slate-400 mt-4 italic font-medium">* การลงทะเบียนนี้เป็นเพียงการจำลองเพื่อการนำเสนอ</p>}
             </div>
          </div>
        </div>
        
        <button 
          onClick={() => setView(ViewState.LANDING)} 
          className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg text-lg flex items-center justify-center gap-2"
        >
          {isForeign ? 'Back to Home' : 'กลับสู่หน้าหลัก'}
          <span className="material-symbols-outlined">home</span>
        </button>
      </div>
    </div>
  );
};
