"use client";

import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

import thumbal from "@/src/assets/mobile/thumbal.jpg";
import c1 from "@/src/assets/mobile/color1.jpg";
import c2 from "@/src/assets/mobile/color2.jpg";
import c3 from "@/src/assets/mobile/color3.jpg";
import img1 from "@/src/assets/mobile/image1.jpg";
import img2 from "@/src/assets/mobile/image2.jpg";
import img3 from "@/src/assets/mobile/image3.jpg";
import img4 from "@/src/assets/mobile/image4.jpg";

const images = [c1, c2, c3, img1, img2, img3, img4];

const ProductGallery = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<never>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);
  const allImages = [thumbal, ...images];


  return (
    <div className="max-w-[350px] md:max-w-[700px] sm:max-w-[500px] w-full mx-auto">
      <div className="relative overflow-hidden">
        <Swiper
          modules={[Navigation, Thumbs]}
          spaceBetween={10}
          thumbs={{ swiper: thumbsSwiper }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="!w-full"
        >
          {allImages?.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                ref={(el) => {
                  imgRefs.current[index] = el;
                }}
                className="relative  border border-primary/20 overflow-hidden cursor-crosshair"
              >
                <Image
                  src={img}
                  alt={`img ${index}`}
                  width={800}
                  height={800}
                  className="w-full h-full object-contain"
                  draggable={false}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail Swiper */}
      <div className="overflow-hidden mt-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress
          breakpoints={{
            640: { slidesPerView: 4 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 4 },
          }}
          className="!w-full"
        >
          {allImages?.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt={`Thumbnail ${index}`}
                width={100}
                height={100}
                className={`rounded w-full h-full object-contain border ${
                  activeIndex === index ? "border-primary" : "border-primary/20"
                } cursor-pointer`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductGallery;
