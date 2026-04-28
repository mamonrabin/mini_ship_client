import React from 'react';

const page = () => {
    return (
        <div className='py-6 rounded bg-white'>
            <h2 className='border-b pb-4 px-6 text-lg font-medium'>Support Tickets</h2>

            <div className='p-6'>
                <p className='text-sm'>You do not have open tickets.</p>
            </div>
        </div>
    );
};

export default page;