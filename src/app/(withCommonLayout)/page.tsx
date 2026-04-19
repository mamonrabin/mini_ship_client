import Electronics from '@/src/components/category-sections/Electronics';
import Kitchen from '@/src/components/category-sections/Kitchen';
import Smartphones from '@/src/components/category-sections/Smartphones';
import Banner from '@/src/components/hero-section/Banner';
import Offer from '@/src/components/offer-section/Offer';
import FlashDeals from '@/src/components/products-section/FlashDeals';
import HomeAppliances from '@/src/components/products-section/HomeAppliances';
import React from 'react';

const page = () => {
  return (
    <div>
     <Banner/>
     <Offer/>
     <Electronics/>
     <Kitchen/>
     <Smartphones/>
     <FlashDeals/>
     <HomeAppliances/>
    </div>
  );
};

export default page;