import React, { useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cube';
import './slideshow.css';

const Slideshow = ({ children }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex); 
  };

  return (
    <div className="slideshow-wrapper">
      <Swiper
        className={`swiper-container ${activeSlide === 0 ? 'calculator-theme' : activeSlide === 1 ? 'loan-theme' : 'pong-theme'}`}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={500}
        speed={2000}
        loop={true}
        slidesPerView={1}
        onSlideChange={handleSlideChange}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slideshow;
