"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { bannerList } from "@/src/api/bannerApi";
import Image from "next/image";

const BannerSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="relative text-white overflow-hidden">
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
       pagination={{ el: ".custom-pagination", clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {bannerList?.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="w-full md:h-80 h-50">
              <Image
                src={item.image}
                alt={`Banner ${item.id}`}
                width={1920}
                height={600}
                className="w-full h-full"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-pagination  flex justify-center gap-2 z-20 relative top-20"></div>

      {/* Custom Styles */}
      
    </div>
  );
};

export default BannerSlider;
