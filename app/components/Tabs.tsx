"use client";

import { X } from "lucide-react";

export default function Tabs() {
  return (
    <div className="bg-[#dbeafe] flex items-end h-8 border-b border-[#a5b4fc]">
      <div className="flex px-1 space-x-[2px]">
        <TabItem label="Sales Voucher List" active />
        <TabItem label="Sales Voucher" />
      </div>
    </div>
  );
}

function TabItem({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={`
        flex items-center px-4 py-1 cursor-pointer text-[10px] rounded-t-[3px] border transition-all
        ${active
          ? 'bg-white border-status-bg border-b-white -mb-px font-bold text-brand-primary shadow-[0_-2px_4px_rgba(0,0,0,0.05)]'
          : 'bg-[#bfdbfe]/60 border-transparent text-brand-primary hover:bg-[#bfdbfe]'}
      `}
    >
      <span className="whitespace-nowrap tracking-tight">{label}</span>
      <button className="ml-2 hover:bg-gray-200 rounded p-px transition-colors">
        <X size={10} strokeWidth={3} />
      </button>
    </div>
  );
}
