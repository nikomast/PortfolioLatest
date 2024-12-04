import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube'
import './slideshow.css'

const Slideshow = ({ children }) => {
  return (
    <div className="slideshow-container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        speed={1000}
        centeredSlides={true}
        slidesPerView={1}
        loop={true}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>
            <div className='swiper-slide-content'>{child}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slideshow;
