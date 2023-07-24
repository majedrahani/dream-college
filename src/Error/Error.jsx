import React from 'react';
import error from '../assets/404.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-full'>
            <div className='flex justify-center'>
                <img src={error} alt="error image" className=' w-96' />
            </div>
            <div className='flex justify-center'>
                <Link to="/" className='bg-[#5800FF] px-6 py-2 text-white '>Back to Home</Link>
            </div>
        </div>
    );
};

export default Error;