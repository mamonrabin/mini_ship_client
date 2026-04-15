"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import { topNavList } from "../api/toplistApi";

const TopNavSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative text-white overflow-hidden">
      {/* Left Button */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden lg:block text-sm cursor-pointer"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden lg:block text-sm cursor-pointer"
      >
        ❯
      </button>

      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {topNavList?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex items-center uppercase justify-center text-[12px] mt-1 font-bold overflow-hidden">
              {item.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopNavSlider;
