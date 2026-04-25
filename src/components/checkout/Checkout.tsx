import React from 'react';
import OrderSummary from './OrderSummary';
import CheckoutForm from './CheckoutForm';

const Checkout = () => {
    return (
        <div className="flex lg:flex-row flex-col gap-8">
            <div className='flex-4'>
                <CheckoutForm/>
            </div>
            <div className='flex-2'>
                <OrderSummary/>
            </div>
        </div>
    );
};

export default Checkout;