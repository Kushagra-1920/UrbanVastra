import React from "react";
import ItemCaraouselCard from "./ItemCaraouselCard1";
import "././css/ItemCaraousel1.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

export default function App() {
  const items = [1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="w-full py-10">
      <Swiper
        loop={true}
        slidesPerView={5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mensKurtaSwiper w-full px-5"
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            className="!h-auto flex justify-center"
          >
            <ItemCaraouselCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}