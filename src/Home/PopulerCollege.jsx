import React, { useEffect, useState } from 'react';
import PopularCart from './PopularCart';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from "react-icons/ai";

const PopulerCollege = () => {
    const [colleges, setColleges] = useState();

    useEffect(() => {
        fetch('https://dream-college-server.vercel.app/colleges')
            .then(res => res.json())
            .then(data => setColleges(data))
    }, [])
    // console.log(colleges);
    // const { sports, researchHistory, events, admissionDates, image, collegeName } = data;

    return (
        <div>
            <div>
                <h2 className=' text-3xl font-light text-center mt-10'>Popular <span className='text-[#5800FF]'>Colleges</span></h2>
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

            <div className='md:grid grid-cols-3 gap-8 mx-20 mt-10'>
                {
                    colleges?.slice(0,3)?.map(college => <PopularCart
                    key={college.collegeName}
                    college={college}
                    ></PopularCart>)
                }
            </div>
            <div className='w-full flex justify-center mb-20 mt-5 '>
                <Link to="/collegesPage" className=' px-8 py-2 border  border-[#5800FF] text-[#5800FF] uppercase font-bold hover:bg-[#5800FF] hover:text-white flex gap-4'>View More <AiOutlineArrowRight className='my-auto'/></Link>
            </div>

        </div>
    );
};

export default PopulerCollege;