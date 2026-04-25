"use client";

import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

import product from "@/src/assets/products/bd1.jpg";
import product2 from "@/src/assets/products/bd2.jpg";
import product3 from "@/src/assets/products/bd3.jpg";
import Image from "next/image";

const DropCartItems = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-6">
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex items-center justify-between font-medium"
      >
        <p>Cart Items (2)</p>
        <p>
          <ChevronRight size={18} />
        </p>
      </div>

      {/* Animated Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-80 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
       <div className="flex flex-col gap-2">
         <div className="flex gap-2">
          <div>
            <Image
            className="border rounded p-2"
            src={product}
            alt="product"
            width={80}
            height={80}
          />
          </div>
          <div>
            <h2 className="text-sm font-medium">OnePlus Nord CE5 5G 8GB/256GB</h2>
            <p className="text-sm"><span className="font-medium mt-1">Color : </span> <span>Mittar Yellow</span></p>
            <p className="text-sm"><span className="font-medium mt-1">Quantity :</span> <span>3</span></p>
          </div>
        </div>

         <div className="flex gap-2">
          <div>
            <Image
            className="border rounded p-2"
            src={product2}
            alt="product"
            width={80}
            height={80}
          />
          </div>
          <div>
            <h2 className="text-sm font-medium">OnePlus Nord CE5 5G 8GB/256GB</h2>
            <p className="text-sm"><span className="font-medium mt-1">Color : </span> <span>Mittar Yellow</span></p>
            <p className="text-sm"><span className="font-medium mt-1">Quantity :</span> <span>3</span></p>
          </div>
        </div>

         <div className="flex gap-2">
          <div>
            <Image
            className="border rounded p-2"
            src={product3}
            alt="product"
            width={80}
            height={80}
          />
          </div>
          <div>
            <h2 className="text-sm font-medium">mart 32 Frameless Smart Google TV (SEL-32G25F)</h2>
            <p className="text-sm"><span className="font-medium mt-1">Color : </span> <span>Mittar Yellow</span></p>
            <p className="text-sm"><span className="font-medium mt-1">Quantity :</span> <span>3</span></p>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default DropCartItems;
