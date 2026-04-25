"use client";

import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

const DropCartItems = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-6">
      {/* Header */}
      <div onClick={() => setOpen(!open)} className="cursor-pointer flex items-center justify-between font-medium">
        <p>Apply Discount Code</p>
        <p><ChevronRight size={18}/></p>
      </div>

      {/* Animated Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <form className="flex flex-col gap-2 items-center">
          <input
            className="w-full border px-2 py-2 rounded outline-none"
            type="text"
            placeholder="Enter Coupon Code"
          />
          <input
            className="px-2 py-2 rounded bg-[#1B5DD5] border border-[#1B5DD5] hover:bg-transparent hover:text-[#1B5DD5] duration-300 text-white font-medium text-sm w-full cursor-pointer"
            type="submit"
            value="Apply"
          />
        </form>
      </div>
    </div>
  );
};

export default DropCartItems;
