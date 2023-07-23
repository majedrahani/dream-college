import React from 'react';
import { Link } from 'react-router-dom';

const AllCart = ({ colleges }) => {
    console.log(colleges);
    const { sports, researchHistory, events, admissionDates, image, collegeName, _id } = colleges;
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
                        <Link to={`/colleges/${_id}`}>
                            <button className="bg-[#5800FF] my-3 px-7 py-4 text-white">View details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCart;