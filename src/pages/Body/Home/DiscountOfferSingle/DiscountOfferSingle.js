import React from 'react';
import './DiscountOfferSingle.css';

const DiscountOfferSingle = ({ discount }) => {
    const { name, price, image,description } = discount;
    return (
        <div className="  discountOfferSingle-container">
            <div className="card  h-100">
                <img src={image} className="card-img-top img-fluid pb-2 m-auto " alt={name} />
                <div className="card-body border-top">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">{price}/=</p>
                </div>
            </div>
        </div>
    );
};

export default DiscountOfferSingle;