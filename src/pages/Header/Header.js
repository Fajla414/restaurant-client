import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './Header.css';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-color text-light">
            <div className="container">
                <Link to="/" className="navbar-brand"><img src={logo} className='img-fluid' alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav d-flex align-items-center ms-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <Link to={'/home'} className='nav-link fw-bold fs-6 mx-3 text-light' >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/menu'} className='nav-link fw-bold mx-3 text-light' >Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/about'} className='nav-link fw-bold mx-3 text-light' >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contact'} className='nav-link fw-bold mx-3 text-light' >Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contact'} className='nav-link fw-bold mx-3' ><button className='btn btn-primary fw-bold'>Sign Up</button></Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/contact'} className='nav-link fw-bold mx-3' ><button className='btn btn-outline-primary text-light fw-bold'>Log In</button></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;