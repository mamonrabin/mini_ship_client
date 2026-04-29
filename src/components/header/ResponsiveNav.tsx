"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { categoryList } from "@/src/api/categoryApi";
import { TextAlignJustify, ChevronDown, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ResponsiveNav = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <Sheet>
      <SheetTrigger className="border-transparent outline-none focus:ring-0 cursor-pointer">
        <TextAlignJustify size={28} />
      </SheetTrigger>

      <SheetContent className="w-full p-6 overflow-y-auto" side="left">
        <h2 className="font-medium mb-2">Shop for</h2>

        <div className="flex flex-col gap-3">
          {categoryList.map((category) => (
            <div key={category.id}>
              {/* CATEGORY */}
              <div
                onClick={() => handleToggle(category.id)}
                className="flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.category}
                      width={100}
                      height={100}
                    />
                  </div>
                  <Link href="/shop">
                    <p className="font-semibold text-base hover:text-[#1B5DD5] duration-300">
                      {category.category}
                    </p>
                  </Link>
                </div>

                {/* Arrow only if subcategory exists */}
                {category.subCategory.length > 0 && (
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      activeId === category.id ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* SUBCATEGORY */}
              {activeId === category.id && category.subCategory.length > 0 && (
                <div className="ml-11 mt-2 flex flex-col gap-2">
                  {category.subCategory.map((sub) => (
                    <Link href="/shop" key={sub.id}>
                      <p
                        
                        className="text-base text-gray-600 hover:text-[#1B5DD5] cursor-pointer"
                      >
                        {sub.title}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-base font-semibold mt-2">Order</h2>
          <div className="flex items-center gap-3 mt-2">
            <p className="w-8 h-8 rounded-full bg-[#709CA5] text-white flex justify-center items-center">
              <Phone size={16} />
            </p>
            <p className="font-semibold text-base hover:text-[#1B5DD5] duration-300 cursor-pointer">
              Contact Us
            </p>
          </div>

          <div className="py-6">
            <button className="bg-[#DC2828] border-2 border-[#DC2828] hover:text-[#DC2828] cursor-pointer  hover:bg-transparent text-base font-semibold w-full text-white py-3 px-4 rounded transition-colors duration-300">
              Log In
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveNav;
