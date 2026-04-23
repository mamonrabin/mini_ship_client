"use client";

import { ChevronRight, Van, X } from "lucide-react";
import { useState } from "react";

const Assured = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className="bg-white">
      {/* Header */}
      <div 
       onClick={() => setOpen(!open)}
      className="bg-white text-[#262626] flex items-center justify-between px-2 py-1 rounded cursor-pointer">
        <div className="flex items-center gap-4">
          <p className="w-8 h-8 bg-[#1B5DD5] text-white rounded flex items-center justify-center">
            <Van size={18} />
          </p>
          <p className="text-sm font-medium">Pickaboo Assured</p>
        </div>

        <p>
          <ChevronRight size={20} />
        </p>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-60 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >

      <div className="border border-[#1B5DD5] rounded py-8">
        <div className="pb-4 px-6 border-[#262626]/15 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold">Pickaboo Assured</h2>
          <p 
          onClick={() => setOpen(!open)}
          className="p-2 rounded-full bg-[#ECECEC] cursor-pointer">
            <X size={18} />
          </p>
        </div>

        <p className="p-6">
          100% Authentic Products Destination: We will assure you only genuine
          new products. It gets checked by our quality control team before the
          delivery. <span className="underline text-[#1299E8] cursor-pointer text-sm"> *To Know More</span>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Assured;
