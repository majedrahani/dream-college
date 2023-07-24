import React from 'react';

const AdmissionCart = ({ collegeData }) => {
    const { image, collegeName } = collegeData;
    console.log(collegeData);
    return (
        <div>
            <div className="card lg:card-side border rounded-none bg-base-100 hover:px-5 hover:shadow-xl">
                <figure className='w-1/2'><img src={image} alt="Album" /></figure>
                <div className="ml-5 w-full flex">
                    <h2 className="card-title w-1/2">{collegeName}</h2>
                    
                    <div className="card-actions justify-end mt-auto">
                        <button className="bg-[#5800FF] px-6 py-2 text-white">Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionCart;