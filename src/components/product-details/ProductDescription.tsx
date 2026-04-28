/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef, useState } from "react";
import ReviewBox from "./ReviewBox";
import icon from "@/src/assets/icon/no-review.svg";
import Image from "next/image";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState("spec");
  const specRef = useRef(null);
  const descRef = useRef(null);
  const reviewRef = useRef(null);

  const handleScroll = (ref: any, tab: any) => {
    setActiveTab(tab);
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mt-8">
      {/* Tabs */}
      <div className="flex items-center justify-center gap-4 border-b border-[#262626]/15 pb-6 md:px-0 px-4">
        <p
          onClick={() => handleScroll(specRef, "spec")}
          className={`w-40 py-4 font-medium flex items-center justify-center rounded cursor-pointer transition
      ${
        activeTab === "spec"
          ? "bg-[#1B5DD5] text-white"
          : "text-[#262626]/90 hover:text-white bg-white hover:bg-[#1B5DD5]"
      }`}
        >
          Specification
        </p>

        <p
          onClick={() => handleScroll(descRef, "desc")}
          className={`w-40 py-4 font-medium flex items-center justify-center rounded cursor-pointer transition
      ${
        activeTab === "desc"
          ? "bg-[#1B5DD5] text-white"
          : "text-[#262626]/90 hover:text-white bg-white hover:bg-[#1B5DD5]"
      }`}
        >
          Description
        </p>

        <p
          onClick={() => handleScroll(reviewRef, "review")}
          className={`w-40 py-4 font-medium flex items-center justify-center rounded cursor-pointer transition
      ${
        activeTab === "review"
          ? "bg-[#1B5DD5] text-white"
          : "text-[#262626]/90 hover:text-white bg-white hover:bg-[#1B5DD5]"
      }`}
        >
          Reviews
        </p>
      </div>

      {/* Specification */}
      <div className="bg-[#EEEEEE]"></div>
      <div ref={specRef} className="specification scroll-mt-24 bg-white">
        <div className="Container border-b border-[#262626]/15 py-6">
          <h2 className="font-semibold text-2xl">
            MyOne 165L Two Door Frost Refrigerator
          </h2>
        </div>

        <div className="Container py-6 grid lg:grid-cols-2">
          <div>
            <h2 className="font-semibold text-[#1B5DD5] text-lg">General</h2>

            <div className="mt-2 text-sm">
              <li className="flex border-b border-[#262626]/15 py-3">
                <p className="w-40">SKU</p> <p>MMY1F5GMST</p>
              </li>
              <li className="flex border-b border-[#262626]/15 py-3">
                <p className="w-40">Brand</p> <p>MyONE</p>
              </li>
              <li className="flex border-b border-[#262626]/15 py-3">
                <p className="w-40">Type</p> <p>Refrigerator</p>
              </li>
              <li className="flex border-b border-[#262626]/15 py-3">
                <p className="w-40">Warranty Information</p>
                <p>(Official) 12 years compressor, 2 years parts & service</p>
              </li>
              <li className="flex py-3">
                <p className="w-40">Size</p> <p>165 Liter</p>
              </li>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-[#EEEEEE] py-2"></div>
      <div ref={descRef} className="description scroll-mt-24 bg-white pb-8">
        <h2 className="Container lg:py-6 py-4 font-semibold text-2xl border-b border-[#262626]/15">
          Description
        </h2>

        <div className="Container">
          <h2 className="text-xl font-semibold mt-4">
            MyOne 165L Two Door Frost Refrigerator Features & Specifications:
          </h2>

          <div className="mt-3">
            <h2 className="text-xl">Key Features:</h2>
            <div className="text-sm ml-4 mt-2">
              <li>Energy-saving compressor</li>
              <li>Proper temperature maintenance keeps food fresh.</li>
              <li>Food-grade Korean resin plastic parts</li>
              <li>Anti-fungal door gasket</li>
              <li>High-tempered door glass</li>
            </div>
          </div>

          <div className="mt-3">
            <h2 className="text-xl">Specifications:</h2>
            <div className="text-sm ml-4 mt-2">
              <li>Cooling Type: Frost</li>
              <li>Freezer Type: Top</li>
              <li>Net Capacity: 151 liters</li>
              <li>Gross Capacity: 165 liters</li>
              <li>Freezer Capacity: 40%</li>
              <li>Refrigerator Capacity: 60%</li>
              <li>Door Quantity: 2</li>
              <li>Refrigerant: R-600a</li>
              <li>Power: 63W</li>
              <li>Voltage: 220~240V</li>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-[#EEEEEE]"></div>
      <div ref={reviewRef} className="review scroll-mt-24 bg-white">
        <div className="Container border-b border-[#262626]/15 py-6 mt-6 flex items-center justify-between">
          <h2 className="font-semibold md:text-2xl text-base">
            Ratings & Reviews of MyOne 165L Two Door Frost Refrigerator
          </h2>
          <ReviewBox />
        </div>

        <div className="Container mt-6">
          <div className="flex flex-col items-center justify-center py-10">
            <Image src={icon} alt="icon" width={50} height={50} />
            <h2 className="mt-3 font-semibold">
              Be the first to review this product
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
