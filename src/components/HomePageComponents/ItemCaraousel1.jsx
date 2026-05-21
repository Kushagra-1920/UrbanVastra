import React, { useRef, useState } from 'react';
import ItemCaraouselCard from './ItemCaraouselCard1';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {

     const items =[1,1,1,1,1,1,1].map((item, index)=><ItemCaraouselCard key={index} />)
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
         {items.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            {item}
          </div>
        ))}
      </Swiper>
    </>
  );
}
