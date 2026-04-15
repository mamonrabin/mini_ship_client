import TopNavSlider from "@/src/slider/TopNavSlider";
import { Phone } from "lucide-react";
import React from "react";
import Location from "./Location";

const Topvar = () => {
  return (
    <div className="bg-[#DC2626] w-full Container py-1">
      <div className="grid grid-cols-3 w-full">
        <p className="flex items-center gap-1 text-white text-sm">
          <span>
            <Phone size={16} />
          </span>{" "}
          <span>+8801746770324</span>
        </p>
        <div>
          <TopNavSlider />
        </div>
        <div className="flex items-center justify-end gap-4">
          <select className="text-white bg-[#DC2626] text-sm outline-none">
            <option value="english">Eng</option>
            <option value="bangla">Ban</option>
          </select>
          <select className="text-white bg-[#DC2626] text-sm outline-none">
            <option value="">Lacation</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Comilla">Comilla</option>
            <option value="Noakhali">Noakhali</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Topvar;
