// Slider.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, A11y, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const images = [
  {
    url: "https://img.freepik.com/premium-photo/field-flowers-with-sun-them_1002361-69729.jpg",
    alt: "Field of flowers with sun",
  },
  {
    url: "https://media.istockphoto.com/id/1199839585/photo/spring-meadow.jpg?s=612x612&w=0&k=20&c=kwG8oacguq7MPt-eWXJucpNtzX0926-cNGHBelQIvCI=",
    alt: "Spring meadow landscape",
  },
  {
    url: "https://img.freepik.com/premium-photo/field-flowers-with-sun-them_1002361-69729.jpg",
    alt: "Sunlit field of flowers",
  },
];

const Slider = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <Swiper
        modules={[Autoplay, Pagination, A11y, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={1000} // smooth transition speed
        pagination={{ clickable: true }}
        className="rounded-2xl overflow-hidden shadow-xl"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img.url}
              alt={img.alt}
              loading="lazy"
              className="w-full h-[400px] object-cover transition-transform duration-1000"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
