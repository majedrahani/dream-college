import React from 'react';
import student from '../assets/student.png'
import { TypeAnimation } from 'react-type-animation';
import Navber from './Navber';
import Search from './Search';

const Banner = () => {
    return (
        <div>
            <div className='w-full banner-bg bg-fixed'>
                <div className='lg:mx-20 py-5 '>
                    <Navber></Navber>
                    <div className='py-4 flex justify-end'>
                        <Search></Search>
                    </div>
                </div>
                <div className=' md:flex justify-between px-5 lg:px-20'>
                    <div className='my-auto lg:w-1/2'>
                        <h3 className='text-4xl text-white font-light '>Welcome to Oneirocollage</h3>
                        <TypeAnimation
                            sequence={[

                                `You can here Search`,
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'You can here Find',
                                1000,
                                'You can here Apply',
                                1000,

                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '50px', display: 'inline-block', color: 'white' }}
                            repeat={Infinity}
                        />
                        <p className=' text-white text-[14px]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eos labore quo cumque consequatur dolores, est beatae vitae voluptates saepe!</p>
                        <button className=' bg-[#5800FF] mt-5 mb-2 px-7 py-4 text-white' >Read More</button>
                    </div>
                    <div className=' hidden lg:block'>
                        <img src={student} alt="" className='w-[400px]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;