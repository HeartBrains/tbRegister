
import React from 'react';
import { ViewState } from '../types';
import { HOME_URL } from '../config';

interface LayoutProps {
  children: React.ReactNode;
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, currentView, setView }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20"> {/* Increased header height slightly to accommodate larger logo if needed, or kept flexible */}
            <a href={HOME_URL} className="flex items-center cursor-pointer">
              <div className="flex-shrink-0 flex items-center">
                <img 
                  src="https://tbim.appbkk.com/wp-content/uploads/2026/01/cropped-images-300x300.jpeg" 
                  alt="TBIM Logo" 
                  className="h-[4.5rem] w-auto object-contain" 
                />
              </div>
            </a>
            
            <div className="flex items-center">
              {/* Login section removed */}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <div className="text-sm text-center">
              &copy; {new Date().getFullYear()} TBIM Member Portal. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
