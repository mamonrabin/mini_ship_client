
import Image from "next/image";
import offer from "@/src/assets/offer/topoffer.gif";
import React from "react";


const Topvar = () => {
  return (
    // <div className="bg-[#DC2626] w-full Container py-1">
    //   <div className="grid lg:grid-cols-3 grid-cols-1 w-full">
    //     <p className="lg:flex hidden items-center gap-1 text-white text-sm">
    //       <span>
    //         <Phone size={16} />
    //       </span>{" "}
    //       <span>+8801746770324</span>
    //     </p>
    //     <div>
    //       <TopNavSlider />
    //     </div>
    //     <div className="lg:flex hidden items-center justify-end gap-4">
    //       <select className="text-white bg-[#DC2626] text-sm outline-none">
    //         <option value="english">Eng</option>
    //         <option value="bangla">Ban</option>
    //       </select>
    //       <select className="text-white bg-[#DC2626] text-sm outline-none">
    //         <option value="">Lacation</option>
    //         <option value="Dhaka">Dhaka</option>
    //         <option value="Comilla">Comilla</option>
    //         <option value="Noakhali">Noakhali</option>
    //       </select>
    //     </div>
    //   </div>
    // </div>

    <div className="md:Container md:py-1">
      <Image className="w-full h-full" src={offer} alt="Logo" width={300} height={300} />
    </div>
  );
};

export default Topvar;
