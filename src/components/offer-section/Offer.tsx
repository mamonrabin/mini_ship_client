"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import { offerList } from "@/src/api/offerApi";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const  Offer = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="bg-[#F1F1F1] py-6 w-full">
      <div className="Container xl:px-24 bg-white py-4 shadow-xs">
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute xl:-left-10 lg:-left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center text-[#262626]/30 cursor-pointer"
          >
           <ChevronLeft size={28} />
          </button>

          {/* Right Button */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute xl:-right-10 lg:-right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:flex items-center justify-center text-[#262626]/30 cursor-pointer"
          >
           <ChevronRight size={28} />
          </button>

          <Swiper
            slidesPerView={2}
            spaceBetween={6}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              700: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
              1536: { slidesPerView: 5 },
            }}
            speed={600}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {offerList?.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex  items-center justify-center gap-2  cursor-pointer ">
                  {/* Image */}
                  <div className="md:w-20 md:h-20 w-14 h-14  flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={200}
                      height={200}
                      className="object-contain rounded"
                    />
                  </div>

                  {/* Title */}
                  <p className="text-sm flex-1 line-clamp-3 mx-2 font-medium  text-gray-700 border-r-2 hover:text-[#1B5DD5] duration-300">
                    {item.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Offer;
