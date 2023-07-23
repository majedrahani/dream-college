import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollegeDetail = () => {
    const colleges = useLoaderData();
    console.log(colleges);
    const { sportsCategories, sports, researchWorks, researchHistory, image, eventsDetails, events, collegeName, admissionProcess, admissionDates, } = colleges;
    return (
        <div className='md:flex md:mx-20 my-10 gap-4 '>
            <div className='w-1/2'>
                <img src={image} className='w-full' />
            </div>
            {/* Detail---------------------------------------------- */}
            <div className='w-1/2'>
                <div className='w-full p-5 bg-[#5800FF]'>
                    <h2 className=' text-2xl font-bold text-center text-white'>{collegeName}</h2>
                </div>

                <div className=' h-[380px] overflow-scroll'>
            {/* admission----------------------------------------------- */}
                    <div className=' bg-blue-200 p-2 text-gray-700 mt-2'>
                        <h2>
                            <span className=' font-bold pr-2'>Admission Date:</span> 
                            <span>{admissionDates}</span></h2>
                        <p><span className=' font-bold'>Admission Process:</span> {admissionProcess}</p>
                    </div>
            {/* Events----------------------------------------------- */}
                    <div className=' bg-blue-200 p-2 text-gray-700 mt-2'>
                        <h2>
                            <span className=' font-bold pr-2'>Events:</span> 
                            <span>{events}</span></h2>
                        <p><span className=' font-bold'>Events Details:</span> {eventsDetails}</p>
                    </div>
            {/* research----------------------------------------------- */}
                    <div className=' bg-blue-200 p-2 text-gray-700 mt-2'>
                        <h2>
                            <span className=' font-bold pr-2'>Research History:</span> 
                            <span>{researchHistory}</span></h2>
                        <p><span className=' font-bold'>Research Works:</span> {researchWorks}</p>
                    </div>
            {/* sports----------------------------------------------- */}
                    <div className=' bg-blue-200 p-2 text-gray-700 mt-2'>
                        <h2>
                            <span className=' font-bold pr-2'>Sports:</span> 
                            <span>{sports}</span></h2>
                        <p><span className=' font-bold'>Sports Categories:</span> {sportsCategories}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollegeDetail;