import React from 'react';
import OurSponserData from '../../../../AllFackData/OurSponsorData/OurSponsorData';
import './OurSponsor.css';

const OurSponser = () => {
    return (
        <div className='container ourSponsor-container' >
            <h2 className='mb-5'>Our <span style={{color: '#E21B70'}}>Sponsor</span></h2>
            <div className="row row-cols-1 d-flex align-items-center row-cols-md-6 g-0">
                {OurSponserData.map((sponsor, index) =>
                    <div className=" col-6 col-sm-4" key={index}>
                        <div className="card border-0  h-100">
                            <img src={sponsor.img} style={{ width: '100px', margin: '0 auto' }} className="card-img-top img-fluid" alt={sponsor.name} />
                        </div>
                    </div>
                )}
            </div>
        </div>

    );
};

export default OurSponser;