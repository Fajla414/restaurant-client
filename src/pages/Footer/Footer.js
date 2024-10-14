import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className=' bg-color py-5'>
            <div className="container">
                <div className="row pt-4 text-light footer-container d-flex align-items-start">
                    <div className=" col-md-4 mb-2 col-sm-12 col-xs-12">
                        <h3>About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper, dui et tempus faucibus, dolor purus ultricies lectus, in congue ligula enim id enim.</p>
                        <Link to={'/about'} className='btn btn-outline-light text-light fw-bold'>More About Us</Link>
                    </div>
                    <div className=" col-md-4 mb-2 col-sm-12 col-xs-12">
                        <h3>More Info</h3>
                        <span><Link className=' text-light'>Example</Link></span><br />
                        <span><Link className=' text-light'>Example</Link></span><br />
                        <span><Link className=' text-light'>Example</Link></span><br />
                        <span><Link className=' text-light'>Example</Link></span>
                    </div>
                    <div className="col-lg-4 mb-2 col-md-6 col-sm-12 col-xs-12">
                        <h3>Contact Us</h3>
                        <p>Phone: +123 456 7890</p>
                        <p>Email:  support@example.com</p>
                        <Link to={'/contact'} className='btn btn-outline-light text-light fw-bold'>Contact Us</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <p className='text-light' style={{lineHeight: '110px'}}>�� 2022 Restaurant. All rights reserved.</p>
                    </div>
    
                </div>
            </div>
            </div>
    );
};

export default Footer;