import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from '../../../../../img/topBannerSlideImg/0cake.png';
import img2 from '../../../../../img/topBannerSlideImg/2biriany.png';
import img3 from '../../../../../img/topBannerSlideImg/2burger.png';
import img5 from '../../../../../img/topBannerSlideImg/2salad.png';
import img9 from '../../../../../img/topBannerSlideImg/5chicken.png';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function SwiperSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false, }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='text-center'><img src={img1} className='img-fluid' alt="" /></SwiperSlide>
        <SwiperSlide className='text-center'><img src={img2} className='img-fluid' alt="" /></SwiperSlide>
        <SwiperSlide className='text-center'><img src={img3} className='img-fluid' alt="" /></SwiperSlide>
        <SwiperSlide className='text-center'><img src={img5} className='img-fluid' alt="" /></SwiperSlide>
        <SwiperSlide className='text-center'><img src={img9} className='img-fluid' alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
