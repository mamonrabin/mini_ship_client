/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React from "react";

const CategoryCard = ({ item }: { item: any }) => {
  return (
    <div
      className="bg-white  rounded-xl border border-[#262626]/20 
     cursor-pointer group"
    >
      <div className="p-2">
        {/* Image */}
        <div className="flex items-center justify-center">
          <Image
            src={item.image}
            alt={item.title}
            width={300}
            height={300}
            className="rounded-t-md group-hover:scale-102 transition-transform duration-300 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="md:mt-4 mt-2 md:text-base text-xs line-clamp-2 font-semibold capitalize text-gray-700 text-center group-hover:text-[#1B5DD5] transition-colors">
          {item.title}
        </h2>
      </div>

      <div className="bg-[#1B5DD5] md:text-base sm:text-xs text-[10px] line-clamp-1 font-semibold capitalize text-center text-white py-2 rounded-b-md">
         <p>{item.category}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
