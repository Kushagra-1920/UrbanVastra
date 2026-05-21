import React from "react";
import { mainCarouselData } from "./MainCarouselData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainCarousel = () => {
    return (
        <div className=" w-full mx-0">
            <Swiper  
            
                modules={[Autoplay, Navigation, Pagination]}
                slidesPerView={1}
                loop
                autoplay={{ delay: 2000 }}
                navigation
                pagination={{ clickable: true }}
                className="h-full"
            >
                {mainCarouselData.map((item, index) => (
                    <SwiperSlide key={index} className="h-full mt-0">
                        <img
                            src={item.image}
                            alt=""
                            className="w-full h-[70vh]  object-cover object-[60%_20%]"
                            
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

<script>
    
</script>

export default MainCarousel;