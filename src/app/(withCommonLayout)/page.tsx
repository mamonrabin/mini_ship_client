import HomeAbout from '@/src/components/about-section/HomeAbout';
import Electronics from '@/src/components/category-sections/Electronics';
import Kitchen from '@/src/components/category-sections/Kitchen';
import Smartphones from '@/src/components/category-sections/Smartphones';
import Banner from '@/src/components/hero-section/Banner';
import Offer from '@/src/components/offer-section/Offer';
import AirConditioners from '@/src/components/products-section/AirConditioners';
import ComputerEssentials from '@/src/components/products-section/ComputerEssentials';
import FlashDeals from '@/src/components/products-section/FlashDeals';
import Freezers from '@/src/components/products-section/Freezers';
import Gadgets from '@/src/components/products-section/Gadgets';
import Grooming from '@/src/components/products-section/Grooming';
import HomeAppliances from '@/src/components/products-section/HomeAppliances';
import KitchenEssentials from '@/src/components/products-section/KitchenEssentials';
import Laundry from '@/src/components/products-section/Laundry';
import NewArrivals from '@/src/components/products-section/NewArrivals';
import SmartPhones from '@/src/components/products-section/SmartPhones';
import SmartTVs from '@/src/components/products-section/SmartTVs';
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
     <AirConditioners/>
     <SmartTVs/>
     <SmartPhones/>
     <Laundry/>
     <Freezers/>
     <KitchenEssentials/>
     <Grooming/>
     <Gadgets/>
     <NewArrivals/>
     <ComputerEssentials/>
     <HomeAbout/>
    </div>
  );
};

export default page;