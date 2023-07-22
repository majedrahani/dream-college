import React from 'react';

const PopularCart = ({ college }) => {
    console.log(college);
    const { sports, researchHistory, events, admissionDates, image, collegeName } = college;
    return (
        <div>
            <div className="card w-full h-full rounded-none bg-base-100 hover:shadow-xl hover:p-5">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className=" p-0 m-0 ">
                    <h2 className="card-title my-4">{collegeName}</h2>
                    <p className='text-[13px] font-semibold text-gray-600 '>Admission Date : <span className=' text-red-500'>{admissionDates}</span></p>
                    <p className='text-[13px] text-gray-600 font-semibold'>Events : <span className=' font-normal'>
                    {events}</span></p>
                    <p className='text-[13px] text-gray-600 font-semibold'>Research : <span className='font-normal'>{researchHistory}</span></p>
                    <p className='text-[13px] text-gray-600 font-semibold'>Sports : <span className=' font-normal'>{sports}</span></p>
                    <div className="card-actions justify-end">
                        <button className="bg-[#5800FF] my-3 px-7 py-4 text-white">View details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCart;