import React from 'react';

const page = () => {
    return (
        <div className='py-6 rounded bg-white'>
            <h2 className='border-b pb-4 px-6 text-lg font-medium'>My Orders</h2>

            <div className='p-6'>
                <p className='text-sm'>You have placed no orders.</p>
            </div>
        </div>
    );
};

export default page;