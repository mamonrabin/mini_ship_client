import React from 'react';

const AddBuyBtn = () => {
    return (
        <div className='flex items-center gap-4'>
            <button className='px-6 py-4 md:w-50 border border-[#1B5DD5] font-medium text-[#1B5DD5] rounded hover:bg-[#1B5DD5] hover:text-white duration-300 cursor-pointer'>ADD TO CART</button>
            <button className='px-6 py-4 md:w-50 border border-[#002F67] hover:border-[#1B5DD5] font-medium hover:text-[#1B5DD5] rounded bg-[#002F67] hover:bg-transparent text-white duration-300 cursor-pointer'>Buy Now</button>
        </div>
    );
};

export default AddBuyBtn;