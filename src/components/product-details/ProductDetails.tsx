import React from 'react';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';

const ProductDetails = () => {
    return (
        <div>
            <div className='Container py-6 grid lg:grid-cols-2 gap-8 bg-white border-b border-[#262626]/15'>
                <ProductGallery/>
                <ProductInfo/>
            </div>
            <ProductDescription/>
        </div>
    );
};

export default ProductDetails;