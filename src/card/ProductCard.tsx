/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const ProductCard = ({ item }: { item: any }) => {
  return (
    <div
      className="bg-white  rounded-xl border border-[#262626]/20 
     cursor-pointer group"
    >
      <div className="p-2">
        {/* Image */}
        <div className="relative">
          <Image
            src={item.thumbelImage}
            alt={item.title}
            width={300}
            height={300}
            className="rounded-t-md group-hover:scale-102 transition-transform duration-300 object-contain"
          />
          <p className="absolute top-2 -right-2 bg-[#FF5722] text-white text-xs font-bold px-2 py-1 rounded-l">
            {item.discount.toFixed(0)}%
          </p>
        </div>

        {/* Title */}
        <h2 className="pt-3 md:text-base text-xs line-clamp-2">{item.title}</h2>
        <div className="flex text-sm items-center md:gap-6 gap-4 pt-2">
          <p className="md:text-base text-sm text-[#1B5DD5] font-medium">
            ৳{item.price.toFixed(2)}
          </p>
          <p className="text-gray-600 line-through md:text-sm text-xs">
            ৳{item.mrpPrice.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center gap-1 py-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={
                  i < Math.round(item?.rating)
                    ? "fill-[#FF5722] text-[#FF5722]"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <p className="text-sm">({item?.selProduct})</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
