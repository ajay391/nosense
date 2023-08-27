import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Autoplay , FreeMode} from 'swiper/modules';

import slide_image_1 from '../../assets/images/ins3.png';
import slide_image_2 from '../../assets/images/ins2.png';
import slide_image_3 from '../../assets/images/trend2.png';
import slide_image_4 from '../../assets/images/ins4.png';
import slide_image_5 from '../../assets/images/ins5.png';
import slide_image_6 from '../../assets/images/ins6.png';
import slide_image_7 from '../../assets/images/ins7.png';
import slide_image_8 from '../../assets/images/ins8.png';
import slide_image_9 from '../../assets/images/ins9.png';

const ThreeDSlider = () => {
  return (
   <>
   <Swiper className="swiper_container"
      effect={'coverflow'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      
      spaceBetween={40}
      freeMode = {false}
      loop={true}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      scrollbar={{ draggable: true }}
   
      modules={[EffectCoverflow ,Autoplay , FreeMode]}
      breakpoints={{

        576: {
            slidesPerView: 1,
        },
        
        768: {
            slidesPerView: 2,
        },

        1200: {
            slidesPerView: 3,
        },
      }}
      >
        <SwiperSlide><img src={slide_image_1} alt="slide_image" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_2} alt="slide_image" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_3} alt="slide_image" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_4} alt="slide_image" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_5} alt="slide_image" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_6} alt="slide_image" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_7} alt="slide_image" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_8} alt="slide_image" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_9} alt="slide_image" /></SwiperSlide>
      
      </Swiper>
  
   </>
  )
}

export default ThreeDSlider