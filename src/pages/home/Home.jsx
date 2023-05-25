import React from 'react';
import Banner from './Banner';
import Category from './category/Category';
import FamousItem from './famousItem/FamousItem';
import Featured from './feature/Featured';
import Testimonial from './testimonial/Testimonial';


const Home = () => {
    return (
        <div className=''>
            <Banner/>
            <Category/>
            <FamousItem/>
            <Featured/>
            <Testimonial />
            
        </div>
    );
};

export default Home;