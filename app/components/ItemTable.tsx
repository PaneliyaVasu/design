"use client";

import { ChevronRight } from "lucide-react";

const columns = [
  { id: 'barcode', label: 'Barcode', width: 'w-20' },
  { id: 'itemName', label: 'Item Name', width: 'flex-1 min-w-[300px]' },
  { id: 'description', label: 'Description', width: 'w-48' },
  { id: 'mrp', label: 'MRP', width: 'w-16', align: 'text-right' },
  { id: 'qty', label: 'Qty', width: 'w-24', align: 'text-right' },
  { id: 'grate', label: 'G.Rate($)', width: 'w-28', align: 'text-right' },
  { id: 'disc', label: 'Disc(%)', width: 'w-20', align: 'text-right' },
  { id: 'gnamt', label: 'GNamt($)', width: 'w-28', align: 'text-right' },
  { id: 'cgst', label: 'CGST(%)', width: 'w-20', align: 'text-right' },
  { id: 'sgst', label: 'SGST(%)', width: 'w-20', align: 'text-right' },
  { id: 'rate', label: 'Rate($)', width: 'w-28', align: 'text-right' },
  { id: 'amount', label: 'Amount($)', width: 'w-32', align: 'text-right' },
];

const data = [
  {
    barcode: '00019',
    itemName: 'D.NO.S-5001-5002-5003-5004-5005-(H.F)',
    description: '',
    mrp: '100',
    qty: '10.000',
    grate: '1,237.143',
    disc: '0.00',
    gnamt: '12371.43',
    cgst: '2.50',
    sgst: '2.50',
    rate: '1,299.143',
    amount: '12990.01'
  },
  {
    barcode: '00020',
    itemName: 'KIARA-(A)_( M TO 2XL)',
    description: '',
    mrp: '1099',
    qty: '12.000',
    grate: '1,046.667',
    disc: '0.00',
    gnamt: '12560.00',
    cgst: '2.50',
    sgst: '2.50',
    rate: '1,099.000',
    amount: '13188.00'
  }
];

export default function ItemTable() {
  return (
    <div className="flex-1 flex flex-col overflow-auto bg-white border border-blue-100 rounded-sm">
      <div className="min-w-max flex flex-col">
        {/* Table Header */}
        <div className="flex bg-[#e8f1ff] border-b border-blue-200 sticky top-0 z-10 shadow-sm">
          <div className="w-10 border-r border-blue-200 py-1.5 flex items-center justify-center"></div>
          {columns.map(col => (
            <div
              key={col.id}
              className={`${col.width} border-r border-blue-200 py-1.5 px-2 text-brand-primary font-bold text-[10px] uppercase tracking-tight flex items-center justify-center text-center`}
            >
              {col.label}
            </div>
          ))}
        </div>

        {/* Table Body */}
        <div className="flex flex-col">
          {data.map((row, index) => (
            <div
              key={index}
              className={`flex border-b border-gray-100 hover:bg-blue-50/50 transition-colors cursor-pointer group h-7 items-center`}
            >
              <div className="w-10 border-r border-blue-100 py-1 px-1 text-gray-500 text-[11px] font-bold flex items-center justify-center">
                {index === 0 ? <span className="flex items-center text-brand-primary"><ChevronRight size={10} className="mr-px" /> 1</span> : '2'}
              </div>
              <div className="w-20 border-r border-blue-100 px-2 text-blue-700 font-bold text-[11px] h-full flex items-center">
                {row.barcode}
              </div>
              <div className="flex-1 min-w-[300px] border-r border-blue-100 px-2 font-semibold text-[11px] h-full flex items-center text-gray-800">
                {row.itemName}
              </div>
              <div className="w-48 border-r border-blue-100 px-2 text-gray-400 italic text-[10px] h-full flex items-center">
                {row.description}
              </div>
              <div className="w-16 border-r border-blue-100 px-2 text-right font-semibold text-[11px] h-full flex items-center justify-end">
                {row.mrp}
              </div>
              <div className="w-24 border-r border-blue-100 px-2 text-right text-blue-700 font-bold text-[11px] bg-blue-50/20 h-full flex items-center justify-end">
                {row.qty}
              </div>
              <div className="w-28 border-r border-blue-100 px-2 text-right text-[11px] h-full flex items-center justify-end">
                {row.grate}
              </div>
              <div className="w-20 border-r border-blue-100 px-2 text-right text-[11px] h-full flex items-center justify-end">
                {row.disc}
              </div>
              <div className="w-28 border-r border-blue-100 px-2 text-right text-[11px] bg-blue-50/20 font-bold h-full flex items-center justify-end">
                {row.gnamt}
              </div>
              <div className="w-20 border-r border-blue-100 px-2 text-right text-[11px] h-full flex items-center justify-end">
                {row.cgst}
              </div>
              <div className="w-20 border-r border-blue-100 px-2 text-right text-[11px] h-full flex items-center justify-end">
                {row.sgst}
              </div>
              <div className="w-28 border-r border-blue-100 px-2 text-right text-[11px] h-full flex items-center justify-end">
                {row.rate}
              </div>
              <div className="w-32 border-r border-blue-100 px-2 text-right font-bold text-gray-800 h-full flex items-center justify-end">
                {row.amount}
              </div>
            </div>
          ))}
          {/* Empty rows */}

        </div>
      </div>

      {/* Table Footer - Sticky at bottom */}
      <div className="sticky bottom-0 bg-white border-t-2 border-blue-200 mt-auto min-w-max flex text-[12px] font-extrabold h-8 items-center text-blue-900 shadow-[0_-2px_4px_rgba(0,0,0,0.05)]">
        <div className="w-10 border-r border-blue-200 h-full"></div>
        <div className="w-20 border-r border-blue-200 h-full"></div>
        <div className="flex-1 min-w-[300px] border-r border-blue-200 px-4 h-full flex items-center justify-end bg-blue-50/30">2</div>
        <div className="w-48 border-r border-blue-200 h-full"></div>
        <div className="w-16 border-r border-blue-200 h-full"></div>
        <div className="w-24 border-r border-blue-200 px-2 h-full flex items-center justify-end">22.00</div>
        <div className="w-28 border-r border-blue-200 h-full"></div>
        <div className="w-20 border-r border-blue-200 h-full"></div>
        <div className="w-28 border-r border-blue-200 px-2 h-full flex items-center justify-end bg-blue-50/30">24931.43</div>
        <div className="w-20 border-r border-blue-200 h-full"></div>
        <div className="w-20 border-r border-blue-200 h-full"></div>
        <div className="w-28 border-r border-blue-200 h-full"></div>
        <div className="w-32 px-2 h-full flex items-center justify-end bg-blue-50/30">26178.01</div>
      </div>
    </div>
  );
}
