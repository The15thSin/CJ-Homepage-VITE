import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import json from '../../imagepaths.json'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Gallery.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const count = (windowSize[0] <= 500)? 1 : 3 ;  

  const galleryArray = json.Gallery.galleryArray;

  return (
    <div className='gallery'>
      <div className='gallery-head'>
        Gallery
      </div>
      <Swiper
        effect={'coverflow'}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={count}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#a3dae0",
          "--swiper-pagination-bullet-inactive-color": "#999999",
        }}
      >
      {
        galleryArray.map(galleryArray => (
           <SwiperSlide>
            <img key={galleryArray.key} src={galleryArray.url} alt={galleryArray.desc} />
          </SwiperSlide>
        ))
      }
      </Swiper>
    </div>
  );
}
