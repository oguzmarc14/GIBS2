import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../styles/global.css";

const images = [
  "/slider1.jpg",
  "/slider2.jpg",
  "/slider3.jpg",
  "/slider4.jpg",
  "/slider5.jpg",
  "/slider6.jpg",
];

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  modules={[Autoplay, Pagination, Navigation]}
  onAutoplayTimeLeft={onAutoplayTimeLeft}
  className="mySwiper relative" // 👈 Esto es clave
>
  {images.map((src, index) => (
  <SwiperSlide key={index}>
    <img
      src={src}
      alt={`Slide ${index + 1}`}
      className="w-280 h-120 object-fill rounded-lg flex mx-auto"
    />
  </SwiperSlide>
))}


  {/* 👇 Este div ahora está posicionado en la esquina inferior derecha */}
  <div className="absolute bottom-2 right-2 w-12 h-12">
    <svg viewBox="0 0 48 48" ref={progressCircle} className="w-full h-full">
      <circle
        cx="24"
        cy="24"
        r="14"
        className="stroke-gray-300 fill-none stroke-[4]"
      />
    </svg>
    <span
      ref={progressContent}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-black pointer-events-none"
    ></span>
  </div>
</Swiper>

    </>
  );
}
