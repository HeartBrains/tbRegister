
import React from 'react';
import { ViewState } from '../types';

interface LandingProps {
  setView: (view: ViewState) => void;
}

export const Landing: React.FC<LandingProps> = ({ setView }) => {
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
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-600 text-white flex items-center justify-center shadow-md">
                        <span className="material-symbols-outlined">badge</span>
                    </div>
                    คุณสมบัติของการเป็นสมาชิก
                </h2>
                <p className="text-slate-600 mb-8 ml-14">ผู้ประสงค์จะสมัครเป็นสมาชิกของสมาคมฯ จะต้องมีคุณสมบัติ ดังต่อไปนี้</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {[
                        "1. เป็นผู้บรรลุนิติภาวะเเล้ว",
                        "2. เป็นผู้มีความประพฤติเรียบร้อย",
                        "3. ไม่เป็นโรคที่สังคมรังเกียจ",
                        "4. มีจรรยาบรรณในวิชาชีพของตน",
                        "5. ไม่ต้องคำพิพากษาของศาลถึงที่สุดให้เป็นบุคคลล้มละลาย หรือไร้ความสามารถ หรือเสมือนไร้ความสามารถ*",
                        "6. ไม่เป็นบุคคลวิกลจริต หรือจิตฟั่นเฟือนไม่สมประกอบ"
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-green-100 flex items-center justify-center">
                                <span className="material-symbols-outlined text-sm text-green-600 font-bold">check</span>
                            </div>
                            <span className="text-slate-700 font-medium">{item}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-8 p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-500 italic leading-relaxed">
                  * หรือต้องโทษจำคุก ยกเว้นความผิดฐานประมาท หรือ ลหุโทษ การต้องคำพิพากษาของศาลถึงที่สุดในกรณีดังกล่าว จะต้องเป็นในขณะที่สมัครเข้าเป็นสมาชิก หรือระหว่างที่เป็นสมาชิกของสมาคม เท่านั้น
                </div>
             </div>
          </div>

          {/* Membership Types & Fees Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined">category</span>
                </div>
                ประเภทของสมาชิกและอัตราค่าสมัคร
            </h2>
            <p className="text-slate-600 mb-4 ml-14">สมาชิกของสมาคมฯ มี 2 ประเภท</p>
            
            {/* Fee Policy Alert */}
            <div className="ml-0 md:ml-14 mb-8 p-4 bg-indigo-50 border border-indigo-100 rounded-xl flex items-start gap-3 shadow-sm">
               <div className="flex-shrink-0 p-1.5 bg-indigo-100 rounded-full text-indigo-600 mt-0.5">
                  <span className="material-symbols-outlined text-sm font-bold">campaign</span>
               </div>
               <div>
                  <h4 className="font-bold text-indigo-900 text-base mb-1">นโยบายค่าธรรมเนียม (Fee Policy)</h4>
                  <p className="text-indigo-800 text-sm leading-relaxed font-medium">
                    คงการงดเว้นค่าสมาชิกรายปีตามมติที่ประชุมใหญ่
                  </p>
                  <p className="text-indigo-800/80 text-xs leading-relaxed font-medium mt-1">
                    Annual membership fee waiver maintained as per the General Meeting resolution.
                  </p>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Corporate - Highlighted */}
            <div className="lg:col-span-5 flex">
                <div className="w-full bg-slate-900 text-white rounded-3xl p-8 flex flex-col shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/10">
                            <span className="material-symbols-outlined text-3xl text-blue-300">corporate_fare</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-1">1. สมาชิกนิติบุคคล</h3>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            ได้แก่ สถาบันการศึกษาหน่วยงานของรัฐ เอกชน และบริษัท ห้างร้านที่จดทะเบียน และให้การสนับสนุนสมาคมฯ ซึ่งคณะกรรมการอำนวยการลงมติให้รับเป็นสมาชิก
                        </p>
                        
                        <div className="mt-auto space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <p className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">อัตราค่าบำรุงสมาคมฯ</p>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm text-slate-300">รายปี (ไม่ต่ำกว่า)</span>
                                    <span className="text-xl font-bold">5,000 <span className="text-sm font-normal text-slate-400">บาท</span></span>
                                </div>
                                <div className="flex justify-between items-center border-t border-white/10 pt-2">
                                    <span className="text-sm text-blue-300">ราย 3 ปี (ไม่ต่ำกว่า)</span>
                                    <span className="text-xl font-bold text-blue-300">12,000 <span className="text-sm font-normal text-blue-300/70">บาท</span></span>
                                </div>
                            </div>

                            <button 
                                onClick={() => setView(ViewState.REGISTER_CORPORATE)}
                                className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2 group-hover:shadow-blue-600/20"
                            >
                                <span>สมัครสมาชิกนิติบุคคล</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Individual Types */}
            <div className="lg:col-span-7 flex flex-col gap-6">
                <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 ml-1">2. สมาชิกบุคคลธรรมดา (มี 4 ประเภท)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Honorary */}
                        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-yellow-200 transition-colors group">
                            <div className="flex items-start gap-3 mb-2">
                                <div className="p-2 bg-yellow-100 text-yellow-700 rounded-lg group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-xl">workspace_premium</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-base">2.1 สมาชิกกิตติมศักดิ์</h4>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mb-3 leading-relaxed h-[4.5rem]">
                                ได้แก่ บุคคลผู้ทรงเกียรติ หรือ ทรงคุณวุฒิหรือผู้มีอุปการะคุณแก่สมาคม ซึ่งคณะกรรมการอำนวยการลงมติให้เชิญเป็นสมาชิกของสมาคม
                            </p>
                            <div className="text-right">
                                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-slate-200 text-slate-700">
                                    มิต้องเสียค่าลงทะเบียนและค่าบำรุง
                                </span>
                            </div>
                        </div>

                        {/* Ordinary - Updated with button */}
                        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-indigo-200 transition-colors group flex flex-col">
                            <div className="flex items-start gap-3 mb-2">
                                <div className="p-2 bg-indigo-100 text-indigo-700 rounded-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-xl">engineering</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-base">2.2 สมาชิกสามัญ</h4>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mb-3 leading-relaxed h-[4.5rem]">
                                ได้แก่ บุคคลที่จบการศึกษาในระดับประกาศนียบัตรวิชาชีพชั้นสูง ปริญญาตรี หรือสูงกว่า ในสาขาที่เกี่ยวข้องกับการอุตสาหกรรมการก่อสร้ง และจัดการอาคาร
                            </p>
                            <div className="mt-auto">
                                <div className="flex flex-col gap-1 text-right mb-3">
                                    <div className="text-xs text-slate-700 font-medium">รายปี <span className="font-bold text-indigo-700">400</span> บาท</div>
                                    <div className="text-xs text-slate-700 font-medium">ราย 3 ปี <span className="font-bold text-indigo-700">1,000</span> บาท</div>
                                </div>
                                <button 
                                    onClick={() => setView(ViewState.REGISTER_LOCAL)}
                                    className="w-full py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 text-xs font-bold rounded-lg shadow-sm transition-all flex items-center justify-center gap-1 active:transform active:scale-95 border border-indigo-200"
                                >
                                    <span className="material-symbols-outlined text-sm">how_to_reg</span>
                                    <span>สมัครสมาชิกสามัญ (ทำงาน)</span>
                                </button>
                            </div>
                        </div>

                        {/* Extraordinary (Foreigner) */}
                        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-emerald-200 transition-colors group flex flex-col">
                            <div className="flex items-start gap-3 mb-2">
                                <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-xl">public</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-base">2.3 สมาชิกวิสามัญ</h4>
                                    <span className="text-xs text-emerald-600 font-medium block">(Extraordinary / Foreign Member)</span>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mb-2 leading-relaxed">
                                ได้แก่ บุคคลที่เกี่ยวข้องกับวงการอุตสาหกรรมก่อสร้างและห่วงโซ่อุตสาหกรรม บุคคลต่างชาติที่ทำงานที่เกี่ยวข้อง
                            </p>
                            <p className="text-[10px] text-slate-400 mb-3 leading-relaxed italic border-t border-slate-200 pt-2 mt-auto">
                                For individuals involved in the construction industry, including foreign nationals working in related fields.
                            </p>
                            <div className="mt-auto">
                                <div className="flex flex-col gap-1 text-right mb-3">
                                    <div className="text-xs text-slate-700 font-medium">รายปี (Annual) <span className="font-bold text-emerald-700">300</span> THB</div>
                                    <div className="text-xs text-slate-700 font-medium">ราย 3 ปี (3 Years) <span className="font-bold text-emerald-700">750</span> THB</div>
                                </div>
                                <button 
                                    onClick={() => setView(ViewState.REGISTER_FOREIGN)}
                                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-sm transition-all flex items-center justify-center gap-1 active:transform active:scale-95"
                                >
                                    <span className="material-symbols-outlined text-sm">how_to_reg</span>
                                    <span>Register (Foreign Member)</span>
                                </button>
                            </div>
                        </div>

                        {/* Associate */}
                        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-orange-200 transition-colors group flex flex-col">
                            <div className="flex items-start gap-3 mb-2">
                                <div className="p-2 bg-orange-100 text-orange-700 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-xl">school</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-base">2.4 สมาชิกสมทบ</h4>
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mb-3 leading-relaxed h-[4.5rem]">
                                ได้แก่ บุคคลที่เป็นนักศึกษาในสาขาวิชาที่เกี่ยวข้องของสมาคม
                            </p>
                            <div className="mt-auto pt-2">
                                <div className="text-right text-xs text-slate-700 font-medium mb-3">รายปี <span className="font-bold text-orange-700">100</span> บาท</div>
                                <button 
                                    onClick={() => setView(ViewState.REGISTER_LOCAL_STUDENT)}
                                    className="w-full py-2 bg-orange-100 hover:bg-orange-200 text-orange-800 text-xs font-bold rounded-lg shadow-sm transition-all flex items-center justify-center gap-1 active:transform active:scale-95 border border-orange-200"
                                >
                                    <span className="material-symbols-outlined text-sm">how_to_reg</span>
                                    <span>สมัครสมาชิกสมทบ (นักศึกษา)</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
