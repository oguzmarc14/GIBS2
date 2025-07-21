import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SwiperSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current?.style.setProperty('--progress', 1 - progress);
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="relative w-full">
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
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/services.webp"
            alt="Slide 1"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/slider2.jpg"
            alt="Slide 2"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/s.jpg"
            alt="Slide 3"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </SwiperSlide>

        {/* Autoplay progress indicator */}
        <div
          className="absolute bottom-4 right-4 w-12 h-12 flex items-center justify-center text-white z-10"
          slot="container-end"
        >
          <svg
            viewBox="0 0 48 48"
            ref={progressCircle}
            className="w-full h-full transform -rotate-90"
            style={{
              strokeDasharray: 125.6,
              strokeDashoffset: 'calc(125.6 * (1 - var(--progress)))',
            }}
          >
            <circle
              cx="24"
              cy="24"
              r="20"
              className="stroke-white fill-none"
              style={{ strokeWidth: 4 }}
            />
          </svg>
          <span
            ref={progressContent}
            className="absolute text-xs font-bold"
          ></span>
        </div>
      </Swiper>
    </div>
  );
}
