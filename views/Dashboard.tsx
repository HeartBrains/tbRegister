
import React, { useState, useEffect } from 'react';
import { ViewState } from '../types';

interface DashboardProps {
  setView: (view: ViewState) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setView }) => {
  const [idReady, setIdReady] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Simulate ID generation delay
    const timer = setTimeout(() => {
      setIdReady(true);
      setShowNotification(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Simulated Notification Toast */}
      {showNotification && (
        <div className="fixed bottom-6 right-6 max-w-sm w-full bg-white shadow-2xl rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden animate-slide-up z-50">
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <span className="material-symbols-outlined text-green-400">check_circle</span>
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium text-gray-900">บัตรสมาชิกพร้อมแล้ว!</p>
                <p className="mt-1 text-sm text-gray-500">บัตรสมาชิกดิจิทัลของคุณถูกสร้างเรียบร้อยแล้ว</p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none"
                  onClick={() => setShowNotification(false)}
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">ยินดีต้อนรับ, John Doe</h1>
        <p className="text-slate-500 mt-1">จัดการสมาชิก กิจกรรม และโปรไฟล์ของคุณ</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Status Card */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">สถานะสมาชิก</h3>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                ใช้งานอยู่
              </span>
              <span className="text-slate-500 text-sm">หมดอายุวันที่ 31 ธ.ค. 2025</span>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600">12</div>
                <div className="text-xs text-slate-500 uppercase font-medium">กิจกรรมที่เข้าร่วม</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600">45</div>
                <div className="text-xs text-slate-500 uppercase font-medium">คะแนน CPD</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-orange-600">Pro</div>
                <div className="text-xs text-slate-500 uppercase font-medium">ระดับ</div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">กิจกรรมล่าสุด</h3>
            <ul className="divide-y divide-slate-100">
              {[1, 2, 3].map((i) => (
                <li key={i} className="py-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded bg-indigo-50 flex items-center justify-center mr-4">
                      <span className="material-symbols-outlined text-indigo-600">event</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">งานประชุมวิชาการประจำปี 2024</p>
                      <p className="text-xs text-slate-500">ลงทะเบียนเมื่อ 12 ต.ค. 2024</p>
                    </div>
                  </div>
                  <span className="text-sm text-slate-600 cursor-pointer hover:text-blue-600">ดูรายละเอียด</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column (ID Card) */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-24">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">บัตรสมาชิกดิจิทัล</h3>
            
            {idReady ? (
              <div className="relative w-full aspect-[1.58/1] bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl shadow-lg p-6 text-white overflow-hidden transition-all duration-500 transform hover:scale-105">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                   <span className="material-symbols-outlined text-9xl">fingerprint</span>
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center font-bold">T</div>
                    <span className="font-display font-bold text-lg">TBIM</span>
                  </div>
                  <span className="bg-white/20 px-2 py-1 rounded text-xs">MEMBER</span>
                </div>

                <div className="mt-8">
                  <p className="text-xs text-slate-400 uppercase">ชื่อ-สกุล</p>
                  <p className="text-lg font-medium tracking-wide">John Doe</p>
                </div>

                <div className="mt-4 flex justify-between items-end">
                   <div>
                      <p className="text-xs text-slate-400 uppercase">รหัสสมาชิก</p>
                      <p className="font-mono">883-9921-00</p>
                   </div>
                   <div className="w-12 h-12 bg-white rounded p-1">
                      {/* Simulated QR */}
                      <div className="w-full h-full bg-slate-900 pattern-dots"></div>
                   </div>
                </div>
              </div>
            ) : (
              <div className="w-full aspect-[1.58/1] bg-slate-100 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-400 animate-pulse">
                <span className="material-symbols-outlined text-4xl mb-2">pending</span>
                <span className="text-sm">กำลังสร้างบัตรสมาชิก...</span>
              </div>
            )}

            <div className="mt-6 space-y-3">
               <button 
                 onClick={() => setView(ViewState.EDIT_PROFILE)}
                 className="w-full flex items-center justify-center px-4 py-2 border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-slate-50"
               >
                แก้ไขโปรไฟล์
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
