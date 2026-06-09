"use client";
import { useState } from 'react';

interface FlipCardProps {
  frontText: string;
  backText: string;
}

export default function FlipCard({ frontText, backText }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-56 cursor-pointer group [perspective:1000px]"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}
      >
        {/* Front */}
        <div className="absolute w-full h-full [backface-visibility:hidden] bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex items-center justify-center p-6 text-center hover:-translate-y-1 transition-all duration-300">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-slate-800 leading-snug">{frontText}</h3>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-4 opacity-70">Cevabı görmek için tıkla</p>
          </div>
        </div>
        
        {/* Back */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-indigo-600 to-blue-700 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center p-8 text-center text-white">
          <div className="space-y-4">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-base sm:text-lg font-medium leading-relaxed drop-shadow-sm">{backText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
