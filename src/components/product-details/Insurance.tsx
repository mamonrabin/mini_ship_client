"use client";

import { ChevronDown, HousePlug } from "lucide-react";
import React, { useState } from "react";

const Insurance = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        className="bg-[#1B5DD5] text-white flex items-center justify-between px-2 py-1 rounded cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <p className="w-8 h-8 bg-white text-[#1299E8] rounded flex items-center justify-center">
            <HousePlug size={18} />
          </p>
          <p>Device Insurance :</p>
        </div>

        {/* Rotate icon */}
        <p
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={18} />
        </p>
      </div>

      {/* Animated Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4 border-2 border-[#1B5DD5] rounded">
          <h2 className="text-[#002F67] font-semibold text-lg">+ 180৳</h2>
          <p>
            12 Months Mobile Insurance (Screen Breakage, Accidental, Fire &
            Liquid Damage)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Insurance;
