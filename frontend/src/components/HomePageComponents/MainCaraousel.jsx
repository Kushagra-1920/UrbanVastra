import React from "react";
import { mainCarouselData } from "./MainCarouselData";
import "./css/MainCaraousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainCarousel = () => {
  return (
    <div className=" w-full  ">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000 }}
        navigation={window.innerWidth >= 768}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {mainCarouselData.map((item, index) => (
          <SwiperSlide key={index} className="h-full mt-0">
            <img
              src={item.image}
              alt=""
              className="
                        w-full
                        h-[30vh]
                        sm:h-[40vh]
                        md:h-[60vh]
                        lg:h-[90vh]
                        object-cover
                        object-[60%_20%]
                    "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainCarousel;
