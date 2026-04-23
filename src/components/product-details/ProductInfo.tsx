import React from "react";
import { IoMdShareAlt } from "react-icons/io";
import offer from "@/src/assets/offer/productoffer.gif";
import c1 from "@/src/assets/mobile/color1.jpg";
import c2 from "@/src/assets/mobile/color2.jpg";
import c3 from "@/src/assets/mobile/color3.jpg";
import Image from "next/image";
import Quantity from "@/src/shared/Quantity";
import AddBuyBtn from "@/src/shared/AddBuyBtn";
import { Tag } from "lucide-react";
import Insurance from "./Insurance";
import Assured from "./Assured";
const ProductInfo = () => {
  return (
    <div>
      <div className="flex items-center justify-between relative">
        <h2 className="md:text-2xl text-xl font-semibold lg:w-110">
          Samsung Haier 1.6 Ton UVCool Inverter Pro DC Inverter Air Conditioner
        </h2>
        <p className="flex items-center gap-1 text-sm text-[#262626]/60">
          <span>
            <IoMdShareAlt size={18} />
          </span>
          <span>Share</span>
        </p>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <p>
          <span className="py-1.5 px-3 rounded bg-[#1B5DD5] text-white font-semibold">
            5
          </span>{" "}
          <span className="text-sm text-[#262626]/80">(3)</span>
        </p>
        <p>|</p>
        <p className="text-[#1B5DD5] font-semibold text-sm cursor-pointer">
          Add Your Review
        </p>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <p className="text-base">
          <span className="font-semibold">Brand:</span>{" "}
          <span className="text-[#1B5DD5] font-medium">Haier</span>
        </p>
        <p>|</p>
        <p className="">
          <span className="font-semibold">Sold by:</span>{" "}
          <span className="text-[#1B5DD5] font-medium">Haier Bangladesh</span>
        </p>
      </div>

      <div className="mt-3 flex items-center gap-6">
        <p className="font-bold text-[#1B5DD5] text-lg">৳ 58,990</p>
        <p className="text-base text-[#262626]/70 line-through">৳ 77,990</p>
      </div>

      <div className="mt-4 border-[#262626]/15 border-t border-b py-4">
        <Image src={offer} alt="offer" width={600} height={600} />
      </div>

      <div className="flex gap-8 py-4 border-[#262626]/15 border-b">
        <p className="mt-4 font-medium">Color*</p>
        <div className="flex items-center gap-2">
          <div className="w-18 h-18 border border-[#262626] rounded cursor-pointer">
            <Image
              className="w-full h-full rounded"
              src={c1}
              alt="color1"
              width={200}
              height={200}
            />
          </div>
          <div className="w-18 h-18 border border-[#1B5DD5] rounded cursor-pointer">
            <Image
              className="w-full h-full rounded"
              src={c2}
              alt="color2"
              width={200}
              height={200}
            />
          </div>
          <div className="w-18 h-18 border border-[#262626] rounded cursor-pointer">
            <Image
              className="w-full h-full rounded"
              src={c3}
              alt="color3"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>

      <div className="py-4 border-b border-[#262626]/15">
        <Quantity />

        <div className="mt-4">
          <AddBuyBtn />
        </div>
      </div>

      <div className="py-4 border-b border-[#262626]/15">
        <p>
          <span className="font-medium">Warranty :</span>{" "}
          <span className="text-sm text-gray-600">
            12 months official warranty
          </span>
        </p>
      </div>
      <div className="py-4 border-b border-[#262626]/15">
        <h2 className="font-medium">Available Offer</h2>
        <div className="mt-2 flex flex-col gap-2">
          <p className="flex items-center gap-2">
            <span className="text-[#FF5722]">
              <Tag size={16} />
            </span>{" "}
            <span className="text-sm text-gray-600">
              BDT 800 Checkout Discount, or
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#FF5722]">
              <Tag size={16} />
            </span>{" "}
            <span className="text-sm text-gray-600">
              6 Months 0% EMI
            </span>
          </p>
          <p className="flex items-center gap-2">
            <span className="text-[#FF5722]">
              <Tag size={16} />
            </span>{" "}
            <span className="text-sm font-medium text-gray-600">
              Please visit this link for Bimafy Insurance Details:
            </span>
          </p>
        </div>
      </div>

      <div className="py-4 border-b border-[#262626]/15">
        <Insurance/>
      </div>
      <div className="py-4">
        <Assured/>
      </div>
    </div>
  );
};

export default ProductInfo;
