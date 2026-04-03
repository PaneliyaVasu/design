"use client";

const menuItems = ["Master", "Transaction", "Report", "Utility", "Close"];

export default function Navbar() {
  return (
    <nav className="bg-[#2c3e50] text-gray-100 flex items-center px-2 h-7 border-b border-gray-900 shadow-sm z-50">
      <div className="flex h-full text-[11px] font-medium">
        {menuItems.map((item) => (
          <button
            key={item}
            className="hover:bg-blue-600/50 px-3 h-full flex items-center transition-all cursor-pointer border-r border-gray-700/30 first:border-l"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="ml-auto text-[9px] opacity-60 font-mono tracking-widest px-2 group cursor-default">
        <span className="group-hover:opacity-100 transition-opacity">KARIYAVAR ERP</span>
      </div>
    </nav>
  );
}
