/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { categoryList } from "@/src/api/categoryApi";
import { TCategory } from "@/src/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const BannerCategory = () => {
  const [activeCategory, setActiveCategory] = useState<TCategory | null>(null);

  return (
    <div className="relative lg:flex hidden flex-col gap-2 py-4 w-full">
      {categoryList.map((cat) => (
        <div
          key={cat.id}
          onMouseEnter={() => setActiveCategory(cat as any)}
          onMouseLeave={() => setActiveCategory(null)}
          className="xl:px-14 lg:px-9  flex items-center justify-between font-normal cursor-pointer"
        >
          <Link href="/shop">
            <span className="hover:text-[#1B5DD5] duration-300">
              {cat.category}
            </span>
          </Link>
          {cat.subCategory.length > 0 && (
            <span className="opacity-30">
              <ChevronRight size={20} />
            </span>
          )}

          {/* SUBCATEGORY PANEL */}
          {activeCategory?.id === cat.id && cat.subCategory.length > 0 && (
            <div className="absolute left-full top-0 w-130 h-80 p-4 bg-white border inline-flex flex-col flex-wrap gap-2 z-50">
              {cat.subCategory.map((sub) => (
                <Link href="/shop" key={sub.id}>
                  <p className="text-base hover:text-[#1B5DD5] duration-300 cursor-pointer">
                    {sub.title}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BannerCategory;
