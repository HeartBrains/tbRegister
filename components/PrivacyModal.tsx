
import React from 'react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'th' | 'en';
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose, language }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      {/* Modal Panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2" id="modal-title">
            <span className="material-symbols-outlined text-primary-600">policy</span>
            {language === 'en' ? 'Privacy Notice' : 'ประกาศนโยบายความเป็นส่วนตัว'}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-500 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 text-slate-700 leading-relaxed space-y-6">
          {language === 'en' ? (
            <>
              <div className="text-center mb-6">
                <h4 className="text-lg font-bold text-slate-900">For Membership Systems and Data Verification Services</h4>
                <p className="text-sm text-slate-500 mt-1">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <p>
                This Privacy Notice explains how <strong>TBIM</strong> ("we," "us," or "our") collects, uses, and protects your personal data in accordance with the Personal Data Protection Act B.E. 2562 (PDPA) of Thailand.
              </p>

              <div className="space-y-4">
                <section>
                  <h5 className="font-bold text-slate-900 mb-2">1. Personal Data We Collect</h5>
                  <p className="mb-2">We collect only the information necessary to provide membership services and secure account access, including:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Identity Information:</strong> Full name, National Identification Number (National ID), and Corporate Registration Number (for legal entities).</li>
                    <li><strong>Contact Information:</strong> Email address and telephone number.</li>
                    <li><strong>Security Information:</strong> Secret questions and answers used for identity verification and account recovery.</li>
                    <li><strong>Technical Data:</strong> IP address, login logs, and system activity records.</li>
                  </ul>
                </section>

                <section>
                  <h5 className="font-bold text-slate-900 mb-2">2. Purposes of Processing</h5>
                  <p className="mb-2">We process your data for the following specific purposes:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Identity Verification:</strong> To authenticate your identity and verify membership status within our association.</li>
                    <li><strong>Account Recovery:</strong> To provide a secure method for password resets and account recovery via secret questions.</li>
                    <li><strong>Communications:</strong> To send administrative updates, project notifications, and essential membership emails.</li>
                  </ul>
                </section>

                <section>
                  <h5 className="font-bold text-slate-900 mb-2">3. Data Retention Period</h5>
                  <p>We will retain your personal data for the duration of your active membership.</p>
                  <p>Upon termination of membership, we may retain certain data for a period of 10 years as required by law or until a formal request for deletion is made.</p>
                </section>

                <section>
                  <h5 className="font-bold text-slate-900 mb-2">4. Data Security Measures</h5>
                  <p className="mb-2">As an IT-focused organization, we implement robust technical safeguards, including:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Access Controls:</strong> Restricting data access to authorized personnel only and utilizing "Restrict Access" features on public-facing forms.</li>
                    <li><strong>Secure Infrastructure:</strong> Utilizing headless WordPress architectures and secure SQL querying to prevent unauthorized data exposure.</li>
                    <li><strong>Field Protection:</strong> Configuring sensitive display fields as "Read-only" to prevent unauthorized modifications.</li>
                  </ul>
                </section>

                <section>
                  <h5 className="font-bold text-slate-900 mb-2">5. Data Subject Rights</h5>
                  <p className="mb-2">Under the PDPA, you hold the following rights:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>The right to access and obtain a copy of your personal data.</li>
                    <li>The right to request data rectification for accuracy.</li>
                    <li>The right to request data erasure or destruction.</li>
                    <li>The right to withdraw consent at any time.</li>
                  </ul>
                </section>

                <section>
                  <h5 className="font-bold text-slate-900 mb-2">6. Contact Information</h5>
                  <p className="mb-2">If you have any questions regarding this notice or your data rights, please contact our Data Protection Lead:</p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
                    <p><strong>Contact Name:</strong> K.Satit P.</p>
                    <p><strong>Phone:</strong> 081-1529886</p>
                    <p><strong>Email:</strong> satit_p@tbim.or.th</p>
                  </div>
                </section>
              </div>
            </>
          ) : (
            <>
              <div className="text-center mb-6">
                <h4 className="text-lg font-bold text-slate-900">สำหรับระบบสมาชิกและบริการตรวจสอบข้อมูลผู้ใช้งาน</h4>
                <p className="text-sm text-slate-500 mt-1">อัปเดตล่าสุด: {new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              </div>

              <p>
                ประกาศนี้อธิบายถึงวิธีการที่ <strong>TBIM</strong> ("เรา") เก็บรวบรวม ใช้ และคุ้มครองข้อมูลส่วนบุคคลของคุณ เพื่อให้เป็นไปตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
              </p>

              <div className="space-y-4">
                <section>
                  <h5 className="font-bold text-slate-900 mb-2">1. ข้อมูลส่วนบุคคลที่เราจัดเก็บ</h5>
                  <p className="mb-2">เราจะจัดเก็บข้อมูลเท่าที่จำเป็นเพื่อการให้บริการสมาชิก ได้แก่:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>ข้อมูลระบุตัวตน:</strong> ชื่อ-นามสกุล, เลขประจำตัวประชาชน (National ID), เลขทะเบียนนิติบุคคล</li>
                    <li><strong>ข้อมูลการติดต่อ:</strong> ที่อยู่อีเมล, เบอร์โทรศัพท์</li>
                    <li><strong>ข้อมูลด้านความปลอดภัย:</strong> คำถามและคำตอบเพื่อความปลอดภัย (Secret Question/Answer) สำหรับใช้ในการยืนยันตัวตนเพื่อกู้คืนรหัสผ่าน</li>
                    <li><strong>ข้อมูลทางเทคนิค:</strong> หมายเลข IP, ข้อมูลการเข้าสู่ระบบ (Log Files)</li>
                  </ul>
                </section>

                <section>
                  <h5 className="font-bold text-slate-900 mb-2">2. วัตถุประสงค์ในการเก็บรวบรวม</h5>
                  <p className="mb-2">เราประมวลผลข้อมูลของคุณเพื่อวัตถุประสงค์ดังต่อไปนี้:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>เพื่อใช้ในการยืนยันตัวตน (Authentication) และตรวจสอบสถานะสมาชิก</li>
                    <li>เพื่อให้บริการกู้คืนบัญชีผู้ใช้งานผ่านระบบคำถามความปลอดภัย</li>
                    <li>เพื่อการติดต่อสื่อสาร แจ้งข่าวสาร หรือส่งอีเมลแจ้งเตือนที่เกี่ยวข้องกับโครงการ</li>
                  </ul>
                </section>

                <section>
                  <h5 className="font-bold text-slate-900 mb-2">3. ระยะเวลาในการจัดเก็บข้อมูล</h5>
                  <p>เราจะจัดเก็บข้อมูลส่วนบุคคลของคุณไว้ตลอดระยะเวลาที่คุณยังคงเป็นสมาชิกของระบบ</p>
                  <p>ในกรณีที่ยกเลิกสมาชิก เราจะจัดเก็บข้อมูลไว้เป็นเวลา 10 ปี ตามที่กฎหมายกำหนด หรือจนกว่าจะมีการแจ้งลบข้อมูล</p>
                </section>

                <section>
                  <h5 className="font-bold text-slate-900 mb-2">4. การรักษาความปลอดภัยของข้อมูล</h5>
                  <p className="mb-2">เราให้ความสำคัญกับการรักษาความปลอดภัยของข้อมูล โดยใช้มาตรการทางเทคนิคที่เหมาะสม เช่น:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>การจำกัดสิทธิ์การเข้าถึงข้อมูล (Restrict Access) ให้เฉพาะเจ้าหน้าที่ที่เกี่ยวข้อง</li>
                    <li>การใช้ระบบจัดเก็บข้อมูลแบบ Headless WordPress ที่มีความปลอดภัยสูง</li>
                    <li>การตรวจสอบความปลอดภัยของ SQL Query เพื่อป้องกันการรั่วไหลของข้อมูล</li>
                  </ul>
                </section>

                <section>
                  <h5 className="font-bold text-slate-900 mb-2">5. สิทธิของเจ้าของข้อมูลส่วนบุคคล</h5>
                  <p className="mb-2">ตามกฎหมาย PDPA คุณมีสิทธิในการ:</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>ขอเข้าถึงและขอรับสำเนาข้อมูลส่วนบุคคลของคุณ</li>
                    <li>ขอให้แก้ไขข้อมูลให้ถูกต้องและเป็นปัจจุบัน</li>
                    <li>ขอให้ลบหรือทำลายข้อมูลส่วนบุคคล</li>
                    <li>ถอนความยินยอมในการประมวลผลข้อมูล</li>
                  </ul>
                </section>

                <section>
                  <h5 className="font-bold text-slate-900 mb-2">6. ช่องทางการติดต่อ</h5>
                  <p className="mb-2">หากคุณมีข้อสงสัยเกี่ยวกับนโยบายความเป็นส่วนตัว สามารถติดต่อเจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล (DPO) ได้ที่:</p>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm">
                    <p><strong>ผู้ติดต่อ:</strong> K.Satit P.</p>
                    <p><strong>เบอร์โทรศัพท์:</strong> 081-1529886</p>
                    <p><strong>อีเมล:</strong> satit_p@tbim.or.th</p>
                  </div>
                </section>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-primary-600 text-white font-bold rounded-xl shadow hover:bg-primary-700 transition-all active:transform active:scale-95"
          >
            {language === 'en' ? 'I Understand' : 'รับทราบ'}
          </button>
        </div>
      </div>
    </div>
  );
};
