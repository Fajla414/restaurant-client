import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './DiscountOffer.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import discountOfferData from '../../../../AllFackData/DiscountOfferData/DiscountOfferData';
import DiscountOfferSingle from '../DiscountOfferSingle/DiscountOfferSingle';

const DiscountOffer = () => {
    return (
        <div className='container discountOffer-container'>
            <h2 className='mb-5' >Discount <span style={{ color: '#E21B70' }}>Offer</span></h2>
            <div className="row">
                <Swiper spaceBetween={10}  loop={true} slidesPerView={3}
                    // autoplay={{ delay: 2000, disableOnInteraction: false, }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper ">

                    {discountOfferData.map((data, index) => (
                        <SwiperSlide   key={index}>
                            <DiscountOfferSingle discount={data} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default DiscountOffer;