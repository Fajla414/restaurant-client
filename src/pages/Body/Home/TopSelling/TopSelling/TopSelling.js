import React from 'react';
import topSellingData from '../../../../../AllFackData/TopSellingData/topSellingData';
import TopSellingSingle from '../TopSellingSingle/TopSellingSingle';
import './TopSelling.css';


const TopSelling = () => {
    return (
        <div className='container topSelling-container my-5 '>
            <h3 className='text-center my-5'>Top <span style={{color: '#E21B70'}}>Selling Item</span></h3>
            <div className="row row-cols-1  row-cols-md-4 g-3">
                {topSellingData.map(item => <TopSellingSingle key={item.id} item={item} />)}
            </div>
        </div>
    );
};

export default TopSelling;