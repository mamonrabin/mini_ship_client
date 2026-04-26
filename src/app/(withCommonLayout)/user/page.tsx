import { authOptions } from '@/src/utilits/authOption';
import { getServerSession } from 'next-auth';
import React from 'react';

const page = async() => {
    const session = await getServerSession(authOptions)
    console.log(session)
    return (
        <div>
            <h2>name:</h2>
        </div>
    );
};

export default page;