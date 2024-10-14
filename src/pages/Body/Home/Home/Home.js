import React from 'react';
import Header from '../../../Header/Header';
import TopBanner from '../TopBanner/TopBanner/TopBanner';
import TopSelling from '../TopSelling/TopSelling/TopSelling';
import WhyWeBest from '../WhyWeBest/WhyWeBest';
import DiscountOffer from '../DiscountOffer/DiscountOffer';
import OurSponser from '../OurSponser/OurSponser';
import Footer from '../../../Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <TopBanner />
            <TopSelling />
            <WhyWeBest />
            <DiscountOffer />
            <OurSponser />
            <Footer />
        </>
    );
};

export default Home;