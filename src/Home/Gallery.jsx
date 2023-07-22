import React from 'react';
import gallery1 from '../assets/g-1.png'
import gallery2 from '../assets/g-2.png'
import gallery3 from '../assets/g-3.png'
import gallery4 from '../assets/g-4.png'
import gallery5 from '../assets/g-5.png'
import gallery6 from '../assets/g-6.png'
import gallery7 from '../assets/g-7.png'
import gallery8 from '../assets/g-8.png'

const Gallery = () => {
    return (
        <div>
            <div>
                <h2 className=' text-3xl font-light text-center mt-10'>Our <span className='text-[#5800FF]'>Gallery</span></h2>
                <div className='flex w-full justify-center mt-4'>
                    <div>
                        <hr className='w-[80px] mx-auto border-1 border-black' />
                        <hr className='w-[80px] mx-auto border-1 border-black' />
                    </div>
                    <div>
                        <hr className='w-[80px] mx-auto border-1 border-[#5800FF]' />
                        <hr className='w-[80px] mx-auto border-1 border-[#5800FF]' />
                    </div>
                </div>
                <p className=' text-center text-[13px] text-gray-600 mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, cupiditate.</p>
            </div>

            <div className='mx-20'>
                <div className=' lg:grid grid-cols-3 gap-2 mt-10'>
                    <img  src={gallery1} className='hover:p-5 hover:border-2 hover:border-[#5800FF] hover:bg-[#72FFFF]' />
                    <img  src={gallery2} className='hover:p-5 hover:border-2 hover:border-[#5800FF] hover:bg-[#72FFFF]' />
                    <img  src={gallery3} className='hover:p-5 hover:border-2 hover:border-[#5800FF] hover:bg-[#72FFFF]' />
                </div>
                <div className=' lg:grid grid-cols-5 gap-2 mt-2'>
                    <img src={gallery4} className='hover:p-3 hover:border-2 hover:border-[#5800FF]' />
                    <img src={gallery5} className='hover:p-3 hover:border-2 hover:border-[#5800FF]' />
                    <img src={gallery6} className='hover:p-3 hover:border-2 hover:border-[#5800FF]' />
                    <img src={gallery7} className='hover:p-3 hover:border-2 hover:border-[#5800FF]' />
                    <img src={gallery8} className='hover:p-3 hover:border-2 hover:border-[#5800FF]' />
                </div>
            </div>
        </div>
    );
};

export default Gallery;