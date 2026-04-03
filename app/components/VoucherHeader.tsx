"use client";

export default function VoucherHeader() {
  return (
    <div className="flex flex-col space-y-4">
      {/* Centered Title Bar */}
      <div className="w-full bg-[#f0f7ff] border-y border-blue-100 py-1 shadow-sm">
        <h2 className="text-center text-brand-primary font-serif italic text-base tracking-wider font-semibold uppercase">
          Sales Voucher
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-y-6 md:gap-y-0 md:gap-x-8 px-4 py-3 items-start md:items-end bg-[#f0f7ff] rounded-sm border border-blue-50 shadow-sm mx-1">
        {/* Left Column */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5 space-y-2">
          {/* F2 Book */}
          <div className="flex items-center">
            <div className="flex items-center h-[26px] overflow-hidden border border-gray-300 shadow-sm rounded-sm">
              <div className="bg-[#dc2626] text-white px-3 py-0.5 text-[11px] font-bold h-full flex items-center min-w-[75px] uppercase tracking-tighter">
                [F2] Book
              </div>
              <input
                type="text"
                defaultValue="1"
                className="px-2 py-0.5 w-28 text-[12px] font-bold focus:outline-none h-full bg-white"
              />
            </div>
          </div>

          {/* Party Name */}
          <div className="flex flex-col space-y-0.5">
            <div className="flex items-center">
              <label className="text-[11px] font-semibold text-gray-700 w-24">Party Name</label>
              <input
                type="text"
                defaultValue="AVADH - GIRNAR FASHION"
                className="flex-1 border border-gray-300 px-2 py-1 text-[12px] font-medium outline-none shadow-inner bg-white h-[26px] focus:border-brand-primary"
              />
            </div>
            <div className="pl-24 text-[10px] text-brand-danger font-bold">
              Curr Bal : 32340.00 Cr
            </div>
          </div>

          {/* Sale Acc */}
          <div className="flex items-center">
            <label className="text-[11px] font-semibold text-gray-700 w-24">Sale Acc</label>
            <input
              type="text"
              defaultValue="Sales"
              className="flex-1 border border-gray-300 px-2 py-1 text-[12px] font-medium outline-none shadow-inner bg-white h-[26px] focus:border-brand-primary"
            />
          </div>
        </div>

        {/* Middle: Due Days - Centered vertically and slightly right */}
        <div className="col-span-12 md:col-span-3 lg:col-span-4 flex items-center justify-center pb-2">
          <div className="flex items-center space-x-2">
            <label className="text-[11px] font-bold text-gray-700">Due. Days</label>
            <div className="flex items-center border border-gray-300 shadow-sm h-7 rounded-sm overflow-hidden">
              <input
                type="text"
                defaultValue="0"
                className="w-12 text-center py-1 text-[12px] font-extrabold outline-none bg-white h-full"
              />
              <div className="bg-gray-100 px-2 py-1 text-[11px] text-gray-400 border-l border-gray-200 h-full flex items-center">
                01/04/26
              </div>
            </div>
            <span className="text-[11px] text-brand-primary font-bold">(Sun)</span>
          </div>
        </div>

        {/* Right Column: Fields right-aligned to inputs */}
        <div className="col-span-12 md:col-span-3 lg:col-span-3 space-y-1 pt-1.5 self-start">
          <div className="flex items-center justify-between md:justify-end">
            <label className="text-[11px] font-bold text-gray-700 w-24 sm:w-28 md:w-32 text-left md:text-right md:pr-4">Vch./Bill No.</label>
            <input
              type="text"
              defaultValue="F2 / 1"
              className="border border-gray-300 px-2 py-0.5 w-[115px] text-[12px] font-medium bg-white h-[26px] shadow-sm outline-none"
            />
            <div className="hidden md:block w-12 ml-2"></div>
          </div>

          <div className="flex items-center justify-between md:justify-end">
            <label className="text-[11px] font-bold text-gray-700 w-24 sm:w-28 md:w-32 text-left md:text-right md:pr-4">Vch./Bill Date</label>
            <div className="flex items-center">
              <input
                type="text"
                defaultValue="01/04/2026"
                className="border border-[#7c7c00]/50 bg-brand-highlight px-2 py-0.5 w-[115px] text-[12px] font-bold text-gray-800 outline-none h-[26px] shadow-sm ring-1 ring-blue-50/10"
              />
              <span className="text-[11px] text-brand-primary font-bold w-8 sm:w-12 ml-1 sm:ml-2">(Wed)</span>
            </div>
          </div>

          <div className="flex items-center justify-between md:justify-end">
            <label className="text-[11px] font-bold text-gray-700 w-24 sm:w-28 md:w-32 text-left md:text-right md:pr-4">Doc. No.</label>
            <div className="flex items-center">
              <input
                type="text"
                className="border border-gray-300 px-2 py-0.5 w-[115px] text-[12px] bg-white h-[26px] shadow-sm outline-none"
              />
              <div className="hidden md:block w-12 ml-2"></div>
            </div>
          </div>

          <div className="flex items-center justify-between md:justify-end">
            <label className="text-[11px] font-bold text-gray-700 w-24 sm:w-28 md:w-32 text-left md:text-right md:pr-4">Doc. Date</label>
            <div className="flex items-center">
              <input
                type="text"
                className="border border-gray-300 px-2 py-0.5 w-[115px] text-[12px] bg-white h-[26px] shadow-sm outline-none"
              />
              <span className="text-[11px] text-brand-primary font-bold w-8 sm:w-12 ml-1 sm:ml-2">(Sun)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
