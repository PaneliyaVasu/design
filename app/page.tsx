"use client";

import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import VoucherHeader from "./components/VoucherHeader";
import ItemTable from "./components/ItemTable";
import VoucherFooter from "./components/VoucherFooter";
import StatusBar from "./components/StatusBar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-brand-bg text-sm">
      <Navbar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Tabs />
        <div className="flex-1 flex flex-col p-2 space-y-2 overflow-auto bg-[#f0f7ff]">
          <div className="bg-white border border-blue-200 rounded-sm shadow-sm p-4">
            <VoucherHeader />
          </div>
          
          <div className="flex-1 min-h-[300px] bg-white border border-blue-200 rounded shadow-sm flex flex-col overflow-hidden">
            <ItemTable />
          </div>
          
          <div className="bg-[#f0f7ff] border-t border-blue-200 p-4 mt-auto shadow-[0_-2px_10px_rgba(30,64,175,0.05)]">
            <VoucherFooter />
          </div>
        </div>
      </div>
      <StatusBar />
    </div>
  );
}
