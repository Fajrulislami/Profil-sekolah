"use client";

import React, { useState } from 'react';
import TabJalur from './TabJalur';
import TabJadwal from './TabJadwal';
import TabPersyaratan from './TabPersyaratan';
import TabAlur from './TabAlur';
import TabFAQ from './TabFAQ';

const tabs = [
  { id: "jalur",       label: "Jalur Pendaftaran" },
  { id: "jadwal",      label: "Jadwal & Biaya" },
  { id: "persyaratan", label: "Persyaratan per Jenjang" },
  { id: "alur",        label: "Alur Pendaftaran" },
  { id: "faq",         label: "FAQ" },
];

export default function PPDBPanel() {
  const [activeTab, setActiveTab] = useState("jalur");

  return (
    <div className="space-y-6">
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
        <div className="flex border-b border-slate-200 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3.5 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 -mb-px ${
                activeTab === tab.id
                  ? "border-emerald-600 text-emerald-700 bg-emerald-50/50"
                  : "border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-6">
          {activeTab === "jalur"        && <TabJalur />}
          {activeTab === "jadwal"       && <TabJadwal />}
          {activeTab === "persyaratan"  && <TabPersyaratan />}
          {activeTab === "alur"         && <TabAlur />}
          {activeTab === "faq"          && <TabFAQ />}
        </div>
      </div>
    </div>
  );
}
