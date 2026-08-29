import React from 'react';

export const fetcher = (url: string) => fetch(url, { headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }, cache: 'no-store' }).then(res => res.json());

export const getErrorMessage = async (res: Response) => {
  try {
    const errData = await res.json();
    if (errData.details) {
      return errData.details.map((d: any) => `- ${d.message}`).join('\n');
    }
    return errData.error || 'Gagal menyimpan data';
  } catch {
    return 'Terjadi kesalahan pada server';
  }
};

export const StatusBanner = ({ error, success, onClear }: { error: string | null, success: string | null, onClear: () => void }) => {
  if (!error && !success) return null;
  
  if (error) {
    return (
      <div className="fixed bottom-8 right-8 z-[100] max-w-md p-4 bg-rose-50/95 backdrop-blur-sm border border-rose-200 text-rose-800 rounded-2xl text-sm font-medium flex items-start gap-3 shadow-[0_10px_40px_-10px_rgba(225,29,72,0.3)] animate-[slideIn_0.3s_ease-out]">
        <svg className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
        </svg>
        <div className="flex-1 whitespace-pre-line">{error}</div>
        <button onClick={onClear} className="shrink-0 text-rose-400 hover:text-rose-600 transition-colors p-1">✕</button>
      </div>
    );
  }
  
  return (
    <div className="fixed bottom-8 right-8 z-[100] max-w-md p-4 bg-emerald-50/95 backdrop-blur-sm border border-emerald-100 text-emerald-800 rounded-2xl text-sm font-medium flex items-center gap-3 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.3)] animate-[slideIn_0.3s_ease-out]">
      <svg className="w-5 h-5 text-emerald-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.293 15.607l-3.9-3.813 1.414-1.415 2.445 2.39 5.857-5.961 1.428 1.402-7.244 7.397z"/>
      </svg>
      <div className="flex-1">{success}</div>
      <button onClick={onClear} className="shrink-0 text-emerald-500 hover:text-emerald-700 transition-colors p-1">✕</button>
    </div>
  );
};
