import React from 'react';
import './TopSellingSingle.css';

const TopSellingSingle = ({ item }) => {
    const { image, price,  name } = item;
    return (
        <div className="col-sm-6 col-12 topSellingSingle-container">
            <div className="card h-100">
                <img src={image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default TopSellingSingle;