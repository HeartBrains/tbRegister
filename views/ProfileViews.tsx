
import React, { useState } from 'react';
import { ViewState } from '../types';

interface ProfileProps {
  setView: (view: ViewState) => void;
}

export const EditProfile: React.FC<ProfileProps> = ({ setView }) => {
  // Simulated initial data reflecting the new fields
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '081-234-5678',
    idCard: '1-1234-56789-01-2',
    dob: '1990-01-15',
    gender: 'Male',
    nationality: 'Thai',
    address: '123 ถนนสุขุมวิท แขวงคลองตัน เขตคลองเตย กรุงเทพฯ 10110',
    email: 'john.doe@example.com',
    workplace: 'TBIM Tech Co., Ltd.',
    position: 'Senior Engineer',
    jobNature: 'Consultant',
    workAddress: '456 ตึกเอไอ ชั้น 20 ถนนวิทยุ กรุงเทพฯ 10330',
  });

  const [notification, setNotification] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNotification('บันทึกข้อมูลเรียบร้อยแล้ว');
    setTimeout(() => {
      setNotification(null);
      setView(ViewState.DASHBOARD);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={() => setView(ViewState.DASHBOARD)} 
          className="flex items-center text-slate-500 hover:text-slate-800 transition-colors"
        >
          <span className="material-symbols-outlined mr-1 text-lg">arrow_back</span> กลับหน้าหลัก
        </button>
        <h1 className="text-2xl font-bold text-slate-900">จัดการข้อมูลส่วนตัว</h1>
      </div>

      {notification && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center animate-pulse shadow-sm">
          <span className="material-symbols-outlined mr-2">check_circle</span>
          {notification}
        </div>
      )}

      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        {/* Profile Header */}
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-700 relative">
          <div className="absolute -bottom-12 left-8">
            <div className="relative">
              <div className="h-28 w-28 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-5xl text-slate-400">person</span>
              </div>
              <button className="absolute bottom-1 right-1 p-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 border-2 border-white shadow-md transition-all" title="เปลี่ยนรูปโปรไฟล์">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-16 pb-10 px-8 sm:px-12">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Section: ข้อมูลบุคคล (Personal 2,5) */}
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-600">account_circle</span>
                ข้อมูลบุคคล (Personal Info)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">ชื่อ (First Name)</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">นามสกุล (Last Name)</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">เบอร์โทรศัพท์ติดต่อ</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">เลขบัตรประชาชน / Passport ID</label>
                  <input type="text" value={formData.idCard} disabled className="w-full px-4 py-3 border border-slate-200 bg-slate-100 text-slate-500 rounded-xl cursor-not-allowed" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">วันเดือนปีเกิด</label>
                  <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">สัญชาติ</label>
                  <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">อีเมลติดต่อ</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">ที่อยู่ติดต่อ (Address)</label>
                  <textarea name="address" rows={2} value={formData.address} onChange={handleChange} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                </div>
              </div>
            </div>

            {/* Section: ข้อมูลการทำงาน (Work 4) */}
            <div className="pt-8 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-600">business_center</span>
                ข้อมูลการทำงาน (Work Info)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">ชื่อสถานที่ทำงาน</label>
                  <input type="text" name="workplace" value={formData.workplace} onChange={handleChange} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">ตำแหน่งงาน</label>
                  <input type="text" name="position" value={formData.position} onChange={handleChange} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">ลักษณะงาน</label>
                  <input type="text" name="jobNature" value={formData.jobNature} onChange={handleChange} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">ที่อยู่ติดต่อ (Work Address)</label>
                  <textarea name="workAddress" rows={2} value={formData.workAddress} onChange={handleChange} className="w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 pt-6">
              <button type="button" onClick={() => setView(ViewState.DASHBOARD)} className="px-8 py-3 border border-slate-300 rounded-xl text-slate-600 font-bold hover:bg-slate-50 transition-all">ยกเลิก</button>
              <button type="submit" className="px-10 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all">บันทึกข้อมูล</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
