"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type IntegrationPlatform = {
  name: string;
  logo: string;
};

interface PlatformsSliderProps {
  platforms: IntegrationPlatform[];
  title?: string;
  subtitle?: string;
}

const PlatformsSlider: React.FC<PlatformsSliderProps> = ({
  platforms,
  title = "Platforms we integrate with",
  subtitle = "A quick view of key products in our integration ecosystem.",
}) => {
  return (
    <section className="py-10 px-4 bg-gradient-to-r from-white via-[#F5F7FF] to-white">
      <div className="container-xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg md:text-xl font-semibold text-slate-800">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-slate-500">{subtitle}</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          loop
          autoplay={{ delay: 2200, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="py-3"
        >
          {platforms.map((item) => (
            <SwiperSlide key={item.name + "-slider"}>
              <div className="flex flex-col items-center justify-center rounded-2xl bg-white border border-[#E2E8F0] px-5 py-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="h-10 flex items-center justify-center mb-2">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="max-h-8 max-w-[150px] object-contain"
                  />
                </div>
                {/* <span className="text-[11px] md:text-xs font-medium text-slate-700 text-center">
                  {item.name}
                </span> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PlatformsSlider;
