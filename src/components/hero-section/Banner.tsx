import React from 'react';
import BannerCategory from './BannerCategory';
import BannerSlider from './BannerSlider';

const Banner = () => {
    return (
        <div className='flex'>
            <div className='lg:flex-2'>
                <BannerCategory/>
            </div>
            <div className='lg:flex-6 w-full overflow-hidden'>
                <BannerSlider/>
            </div>
        </div>
    );
};

export default Banner;