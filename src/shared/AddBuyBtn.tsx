import React from 'react';

const AddBuyBtn = () => {
    return (
        <div className='flex items-center gap-4 md:relative bg-white fixed z-20 left-0 py-6 px-4 bottom-0 w-full'>
            <button className='px-6 py-4 md:w-50 w-full border border-[#1B5DD5] font-medium text-[#1B5DD5] rounded hover:bg-[#1B5DD5] hover:text-white duration-300 cursor-pointer'>ADD TO CART</button>
            <button className='px-6 py-4 md:w-50 w-full border border-[#002F67] hover:border-[#1B5DD5] font-medium hover:text-[#1B5DD5] rounded bg-[#002F67] hover:bg-transparent text-white duration-300 cursor-pointer'>Buy Now</button>
        </div>
    );
};

export default AddBuyBtn;