"use client";

export default function VoucherFooter() {
  return (
    <div className="flex flex-col space-y-6">
      {/* Top Part: Stock, Narration and Sundry Table */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        {/* Left Section: Stock & Narration */}
        <div className="flex-1 space-y-4 w-full">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <span className="text-[#a11c1c] font-black text-[12px] tracking-tight whitespace-nowrap">Stock Qty : 0.00</span>
            <span className="text-[#133da1] text-[11px] font-bold opacity-80">( Currency : $ )</span>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-[11px] font-bold text-gray-700 ml-0.5">Narration.</label>
            <textarea
              rows={1}
              className="w-[450px] max-w-full border border-gray-300 p-2 text-[12px] font-medium shadow-inner focus:border-blue-400 outline-none rounded-sm bg-white"
            />
          </div>
        </div>

        {/* Right Section: Sundry Table */}
        <div className="w-full lg:w-[420px] pt-1">
          <div className="border border-blue-200 rounded-sm overflow-hidden bg-white">
            <table className="w-full text-[10px] border-collapse">
              <thead className="bg-[#e8f1ff] text-brand-primary font-bold uppercase tracking-tighter">
                <tr className="h-6">
                  <th className="px-2 text-left border-r border-blue-100">Sundry Name</th>
                  <th className="px-2 text-right w-16 border-r border-blue-100">(%)</th>
                  <th className="px-2 text-right w-24">Amount($)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100 h-5">
                  <td className="px-2 font-semibold text-gray-700">CGST</td>
                  <td className="px-2 text-right text-gray-600 border-x border-gray-50">0.00</td>
                  <td className="px-2 text-right font-bold text-gray-800">623.29</td>
                </tr>
                <tr className="border-t border-gray-100 h-5">
                  <td className="px-2 font-semibold text-gray-700">SGST</td>
                  <td className="px-2 text-right text-gray-600 border-x border-gray-50">0.00</td>
                  <td className="px-2 text-right font-bold text-gray-800">623.29</td>
                </tr>
                <tr className="bg-[#6b9ae0] text-white h-5">
                  <td className="px-1 font-bold flex items-center h-5">
                    <span className="mr-1 text-[8px] border border-white/50 px-0.5 h-3 flex items-center">{">"}</span> 
                    Round Off
                  </td>
                  <td className="px-2 text-right border-x border-white/20">0.00</td>
                  <td className="px-2 text-right font-bold">-0.01</td>
                </tr>
                {/* Empty spacer row */}
                <tr className="h-5"><td colSpan={3}></td></tr>
                <tr className="bg-[#eff6ff] border-t border-blue-200 h-7">
                  <td colSpan={2} className="border-r border-blue-100"></td>
                  <td className="px-2 text-right font-black text-gray-500 text-[11px] italic">1246.57</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Bottom Row: All buttons and Total */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full pt-4 gap-4">
        {/* Layout Save Button - Hidden or moved on mobile? Keep it but stackable */}
        <div className="w-full md:w-auto order-3 md:order-1">
          <button className="w-full md:w-auto bg-[#f0f9ff] border border-blue-300 text-brand-primary px-6 py-1.5 text-[11px] font-black hover:bg-blue-100 rounded-sm shadow-sm transition-all active:translate-y-px">
            Layout Save
          </button>
        </div>

        {/* Center: Main Operation Buttons */}
        <div className="w-full md:flex-1 flex flex-wrap justify-center gap-1 order-2">
          <ActionButton label="New" />
          <ActionButton label="Save" />
          <ActionButton label="Print" />
          <ActionButton label="Barcode Print" />
          <ActionButton label="Exit" />
        </div>

        {/* Right: Total Amount Block */}
        <div className="w-full lg:w-[420px] md:order-3">
          <div className="flex items-center justify-between bg-white border-2 border-brand-primary px-4 py-1.5 rounded-sm shadow-sm">
            <span className="text-[12px] font-black text-brand-primary uppercase tracking-tight">Total Amount ($) :</span>
            <span className="text-xl font-black text-[#1e3a8a] tracking-tight">26178.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ActionButton({ label }: { label: string }) {
  const isExit = label === "Exit";
  return (
    <button
      className={`
        px-6 py-1.5 text-[11px] font-black border rounded-sm shadow-sm transition-all transform active:translate-y-px min-w-[70px]
        ${isExit 
          ? 'bg-[#f0f9ff] text-brand-primary border-blue-300 hover:bg-blue-100' 
          : 'bg-[#f0f9ff] text-brand-primary border-blue-300 hover:bg-blue-100'
        }
      `}
    >
      {label}
    </button>
  );
}
