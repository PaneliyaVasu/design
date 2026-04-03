"use client";

export default function StatusBar() {
  const statusItems = [
    { label: "Current Company", value: "KARIYAVAR" },
    { label: "Login", value: "1 [ ADMIN ]" },
    { label: "Finc. Year", value: "01-04-2025 <=> 31-03-2026" },
    { label: "Ver.", value: "30.06.22 Touch" },
    { label: "Server", value: "M910\\PROD2012" },
    { label: "Db Name", value: "COMPGST001" },
  ];

  return (
    <footer className="bg-status-bg h-6 flex items-center px-2 text-[10px] text-blue-900 border-t border-blue-300">
      <div className="flex space-x-4">
        {statusItems.map((item, index) => (
          <div key={index} className="flex space-x-1">
            <span className="font-semibold">{item.label} :</span>
            <span className="text-blue-700">{item.value}</span>
            {index < statusItems.length - 1 && <span className="text-blue-300">|</span>}
          </div>
        ))}
      </div>
      <div className="ml-auto flex items-center space-x-2">
        <button className="text-blue-700 hover:underline">Change Company</button>
        <span className="text-blue-300">|</span>
        <span className="font-bold">7:14 PM 01/04/2026</span>
      </div>
    </footer>
  );
}
