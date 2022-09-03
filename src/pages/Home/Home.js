import React from 'react';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Footer from '../shared/Footer';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ExtraSections from './ExtraSections';

const Home = () => {
    return (
        <div className='text-center'>
            <div className=''>
                <Banner></Banner>
                <BusinessSummary></BusinessSummary>
                <Products></Products>
                <Reviews></Reviews>
                <ExtraSections></ExtraSections>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default Home;