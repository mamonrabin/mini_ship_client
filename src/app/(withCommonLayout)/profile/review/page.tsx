import React from 'react';

const page = () => {
    return (
        <div className='py-6 rounded bg-white'>
            <h2 className='border-b pb-4 px-6 text-lg font-medium'>My Product Reviews</h2>

            <div className='p-6'>
                <p className='text-sm'>You have submitted no reviews.</p>
            </div>
        </div>
    );
};

export default page;