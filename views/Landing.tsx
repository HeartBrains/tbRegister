
import React from 'react';
import { ViewState } from '../types';

interface LandingProps {
  setView: (view: ViewState) => void;
}

export const Landing: React.FC<LandingProps> = ({ setView }) => {
  const scrollToRegister = () => {
    const element = document.getElementById('register-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50 font-sans">
      {/* Hero / Info Section */}
      <div className="relative overflow-hidden bg-white pb-16 pt-16 sm:pb-24 lg:pb-32">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mx-auto max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center rounded-full bg-primary-50 px-3 py-1 text-sm font-medium text-primary-700 ring-1 ring-inset ring-primary-700/10 mb-6">
              TBIM Membership
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-6">
              การเข้าเป็นสมาชิก
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              เข้าร่วมเป็นส่วนหนึ่งของสมาคมแบบจำลองสารสนเทศอาคารเพื่อยกระดับอุตสาหกรรมก่อสร้างไทย
            </p>
          </div>

          {/* Qualifications Section */}
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl shadow-sm border border-slate-200 p-8 md:p-10 mb-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
                <span className="material-symbols-outlined text-9xl">verified_user</span>
             </div>
             <div className="relative z-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center shadow-md">
                        <span className="material-symbols-outlined">badge</span>
                    </div>
                    คุณสมบัติของผู้สมัครสมาชิก
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                    {[
                        "บรรลุนิติภาวะเเล้ว",
                        "มีความประพฤติเรียบร้อย",
                        "มีจรรยาบรรณในวิชาชีพ",
                        "ไม่เป็นโรคที่สังคมรังเกียจ",
                        "ไม่เป็นบุคคลล้มละลาย/ไร้ความสามารถ*",
                        "ไม่เป็นบุคคลวิกลจริต/จิตฟั่นเฟือน"
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                <span className="material-symbols-outlined text-sm text-green-600 font-bold">check</span>
                            </div>
                            <span className="text-slate-700 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
                <p className="mt-6 text-xs text-slate-400 italic">
                  * ไม่ต้องคำพิพากษาของศาลถึงที่สุดให้เป็นบุคคลล้มละลาย หรือไร้ความสามารถ หรือเสมือนไร้ความสามารถ หรือต้องโทษจำคุก (ยกเว้นความผิดฐานประมาท/ลหุโทษ)
                </p>
             </div>
          </div>

          {/* Membership Types & Fees Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Corporate - Highlighted */}
            <div className="lg:col-span-5 flex">
                <div className="w-full bg-slate-900 text-white rounded-3xl p-8 flex flex-col shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/10">
                            <span className="material-symbols-outlined text-3xl text-blue-300">corporate_fare</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3">สมาชิกนิติบุคคล</h3>
                        <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                            สถาบันการศึกษา หน่วยงานของรัฐ เอกชน และบริษัท ห้างร้านที่จดทะเบียนถูกต้อง
                        </p>
                        
                        <div className="mt-auto space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                                <div>
                                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">รายปี</p>
                                    <p className="text-2xl font-bold">5,000 <span className="text-sm font-normal text-slate-400">บาท</span></p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">ราย 3 ปี</p>
                                    <p className="text-2xl font-bold text-blue-400">12,000 <span className="text-sm font-normal text-slate-400">บาท</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Individual Types */}
            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Ordinary */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">engineering</span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg">สมาชิกสามัญ</h3>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 min-h-[40px]">
                        ผู้จบการศึกษาระดับ ปวส., ปริญญาตรี หรือสูงกว่า ในสาขาที่เกี่ยวข้อง
                    </p>
                    <div className="space-y-3">
                         <div className="flex justify-between items-center text-sm">
                             <span className="text-slate-600">รายปี</span>
                             <span className="font-bold text-slate-900">400 บาท</span>
                         </div>
                         <div className="flex justify-between items-center text-sm pt-3 border-t border-slate-100">
                             <span className="text-indigo-600 font-medium">ราย 3 ปี</span>
                             <span className="font-bold text-indigo-700">1,000 บาท</span>
                         </div>
                    </div>
                </div>

                {/* Extraordinary */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">public</span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg">สมาชิกวิสามัญ</h3>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 min-h-[40px]">
                        บุคคลในวงการก่อสร้าง/ห่วงโซ่อุปทาน หรือชาวต่างชาติที่เกี่ยวข้อง
                    </p>
                    <div className="space-y-3">
                         <div className="flex justify-between items-center text-sm">
                             <span className="text-slate-600">รายปี</span>
                             <span className="font-bold text-slate-900">300 บาท</span>
                         </div>
                         <div className="flex justify-between items-center text-sm pt-3 border-t border-slate-100">
                             <span className="text-emerald-600 font-medium">ราย 3 ปี</span>
                             <span className="font-bold text-emerald-700">750 บาท</span>
                         </div>
                    </div>
                </div>

                {/* Associate (Student) */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-orange-200 transition-all group">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">school</span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg">สมาชิกสมทบ</h3>
                    </div>
                    <p className="text-sm text-slate-500 mb-6 min-h-[40px]">
                        นักศึกษาในสาขาวิชาที่เกี่ยวข้อง
                    </p>
                    <div className="mt-auto">
                        <div className="flex justify-between items-center text-sm p-3 bg-orange-50/50 rounded-lg border border-orange-100">
                             <span className="text-orange-800 font-medium">รายปี</span>
                             <span className="font-bold text-orange-800">100 บาท</span>
                         </div>
                    </div>
                </div>

                {/* Honorary */}
                <div className="bg-gradient-to-r from-slate-50 to-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-center group">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2.5 bg-yellow-50 text-yellow-600 rounded-xl group-hover:bg-yellow-400 group-hover:text-white transition-colors">
                            <span className="material-symbols-outlined">workspace_premium</span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-lg">สมาชิกกิตติมศักดิ์</h3>
                    </div>
                    <p className="text-sm text-slate-500 mb-4">
                        ผู้ทรงคุณวุฒิหรือผู้มีอุปการะคุณที่คณะกรรมการเชิญ
                    </p>
                    <span className="inline-flex self-start items-center px-3 py-1.5 rounded-full text-xs font-bold bg-slate-900 text-white">
                        ไม่มีค่าธรรมเนียม
                    </span>
                </div>
            </div>
          </div>
          
          <div className="flex justify-center">
             <button 
                onClick={scrollToRegister}
                className="animate-bounce flex flex-col items-center text-slate-400 hover:text-primary-600 transition-colors"
             >
                <span className="text-sm font-medium mb-1">สมัครสมาชิก</span>
                <span className="material-symbols-outlined">keyboard_arrow_down</span>
             </button>
          </div>

        </div>
      </div>

      {/* Registration Selection */}
      <div id="register-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-slate-50 border-t border-slate-200">
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
            <h3 className="text-2xl font-bold text-slate-900 mb-2">บุคคลทั่วไป (ไทย)</h3>
            <p className="text-slate-500 text-sm mb-8">สำหรับสมาชิกสามัญ, สมาชิกวิสามัญ (ไทย) และสมาชิกสมทบ</p>
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
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Foreign Member</h3>
            <p className="text-slate-500 text-sm mb-8">For Extraordinary Members (Foreign Nationals)</p>
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
            <h3 className="text-2xl font-bold text-slate-900 mb-2">สมาชิกนิติบุคคล</h3>
            <p className="text-slate-500 text-sm mb-8">สำหรับองค์กร บริษัท ห้างร้าน และหน่วยงานราชการ</p>
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
