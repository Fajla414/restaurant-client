import React from 'react';
import './WhyWeBest.css';
import chef from '../../../../img/chef.png';
import { Link } from 'react-router-dom';

const WhyWeBest = () => {
    return (
        <section className='mt-5'>
            <h3 className='text-center my-5'>Why We <span style={{ color: '#E21B70' }}>Best</span></h3>
            <div className='whyWeBest-container'>
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-md-6 ">
                            <img src={chef} className='img-fluid' alt="" />
                        </div>
                        <div className="col-md-6 text-light py-5">
                            <h1>We have the best Chef.</h1>
                            <h4>Our passion for food</h4>
                            <p>At Cafe Café, we believe in creating a unique and delicious experience for our customers. Our commitment to quality ingredients and fresh flavors helps us provide our best possible dining experience.</p>
                            <p>We strive to create dishes that are not only tasty but also delicious. Our team of chefs and skilled staff work diligently to bring you the best possible meal.</p>
                            <Link className={`text-decoration-none btn bg-color text-light fw-bold`}>Get More Info</Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyWeBest;