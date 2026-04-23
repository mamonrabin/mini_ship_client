import React from 'react';
import ProductGallery from './ProductGallery';
import ProductInfo from './ProductInfo';
import ProductDescription from './ProductDescription';

const ProductDetails = () => {
    return (
        <div>
            <div className='Container grid lg:grid-cols-2 gap-8'>
                <ProductGallery/>
                <ProductInfo/>
            </div>
            <ProductDescription/>
        </div>
    );
};

export default ProductDetails;