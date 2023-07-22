import React from 'react';
import student from '../assets/student.png'

const Banner = () => {
    return (
        <div>
            <div className='w-full banner-bg'>
                <div className=' md:flex justify-between px-20'> 
                    <div className='my-auto'>
                        <h3 className='text-2xl font-semibold'>Welcome to Oneirocollage</h3>
                    </div>
                    <div>
                        <img src={student} alt="" className='w-[400px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;