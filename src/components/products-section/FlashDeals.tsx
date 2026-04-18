"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Swiper as SwiperType } from "swiper";

import "swiper/css";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { scategoryList } from "@/src/api/shopCategoryApi";
import CategoryCard from "@/src/card/CategoryCard";
const FlashDeals = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="bg-[#F1F1F1] pb-6 w-full">
      <div className="Container xl:px-24 bg-white md:py-6 py-4 shadow-xs">
        <div className="flex items-center justify-between">
          <h2 className="md:text-2xl text-lg font-semibold capitalize flex-1">
            Flash Deals on Top Picks!
          </h2>
          <button className="capitalize text-base font-medium py-2 md:px-6 px-4 rounded  bg-[#1B5DD5] border border-[#1B5DD5] hover:bg-transparent text-white hover:text-[#1B5DD5] duration-300 cursor-pointer">
            view all
          </button>
        </div>

        <div>
          <div className="relative md:mt-6 mt-4">
            {/* Left Button */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="w-10 h-10 rounded-full border border-[#262626] absolute xl:-left-13 lg:-left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center text-[#262626] cursor-pointer"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Right Button */}
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute xl:-right-10 lg:-right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center text-[#262626] cursor-pointer"
            >
              <ChevronRight size={28} />
            </button>

            <Swiper
              slidesPerView={3}
              spaceBetween={8}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 3 },
                700: { slidesPerView: 3 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 5 },
                1536: { slidesPerView: 5 },
              }}
              speed={600}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {scategoryList?.slice(8,16).map((item) => (
                <SwiperSlide key={item.id}>
                  <CategoryCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashDeals;
