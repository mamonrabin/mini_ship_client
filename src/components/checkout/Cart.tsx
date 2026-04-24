import React from 'react';
import CartItem from './CartItem';
import OrderSummary from './OrderSummary';

const Cart = () => {
    return (
        <div className="flex lg:flex-row flex-col gap-8">
            <div className='flex-4'>
                <CartItem/>
            </div>
            <div className='flex-2'>
                <OrderSummary/>
            </div>
        </div>
    );
};

export default Cart;