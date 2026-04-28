"use client";

import { footerList } from "@/src/api/TopFooterApi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";

const TopFooter = () => {
  return (
    <div className="Container mt-10 py-16 border-t bg-[#EFEFEF]">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        allowTouchMove={true} // drag allowed
        loop={false}
      >
        {footerList.map((footer) => (
          <SwiperSlide key={footer.id}>
            <div className="flex flex-col items-center">
              {footer.icon}
              <h2 className="text-sm font-semibold tracking-[3px] uppercase mt-3">
                {footer.title}
              </h2>
              <p className="mt-2 text-sm text-gray-600 tracking-wider">
                {footer.descriptiob}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopFooter;