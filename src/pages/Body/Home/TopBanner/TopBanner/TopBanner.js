import React from 'react';
import { Link } from 'react-router-dom';
import SwiperSlider from '../SwiperSlider/SwiperSlider';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <section className='border-bottom'>
            <div className='container'>
                <div className="row pt-4 d-flex topBanner-container align-items-center">
                    <div className="col-md-4 offset-md-1">
                        <h1>Enjoy a delecious <br /> <span style={{color: '#E21B70'}}>Food</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at consectetur neque, id posuere nisi. Sed auctor, neque at auctor hendrerit, ligula felis condimentum velit, at semper velit sapien sed felis.</p>
                        <Link className={`text-decoration-none btn bg-color text-light fw-bold`}>Get Food</Link>
                    </div>
                    <div className="col-md-6">
                        <SwiperSlider />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopBanner;