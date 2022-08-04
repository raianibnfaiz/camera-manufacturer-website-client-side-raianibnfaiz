import React from 'react';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

import Banner from './Banner';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;