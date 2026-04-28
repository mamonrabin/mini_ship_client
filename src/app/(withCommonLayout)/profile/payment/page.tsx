import React from 'react';

const page = () => {
    return (
        <div className='py-6 rounded bg-white'>
            <h2 className='border-b pb-4 px-6 text-lg font-medium'>Saved Payment Methods</h2>

            <div className='p-6'>
                <p className='text-sm'>Your wallet is empty</p>
            </div>
        </div>
    );
};

export default page;