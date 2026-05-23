import React from "react";
import ItemCaraouselCard from "./ItemCaraouselCard1";

import "./css/ItemCaraousel1.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination, Autoplay, Navigation } from "swiper/modules";

export default function App({ data, sectionName }) {

  const items = data.slice(0, 10);

  return (
    <div className="w-full py-5  bg-mist-50 ">

      <h1 className="text-2xl mx-5 mb-4 font-bold">
        {sectionName}
      </h1>

      <Swiper
        className="mensKurtaSwiper w-full px-8 md:px-10"
        loop={true}
        navigation={true}
        spaceBetween={12}

        

        breakpoints={{
          0: {
            slidesPerView: 2,
          },

          640: {
            slidesPerView: 3,
          },

          768: {
            slidesPerView: 4,
          },

          1024: {
            slidesPerView: 5,
          },

          1280: {
            slidesPerView: 6,
          },
        }}

        pagination={false}

        modules={[Pagination, Autoplay, Navigation]}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >

        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className="!h-auto flex justify-center"
          >
            <ItemCaraouselCard item={item} />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}