import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionCart = ({ collegeData }) => {
    const { image, collegeName,_id } = collegeData;
    console.log(collegeData);
    return (
        <div>
            <div className="card lg:card-side border hover:border-[#5800FF] rounded-none bg-base-100 hover:shadow-md hover:bg-blue-50">
                <figure className='w-1/2'><img src={image} alt="Album" /></figure>
                <div className="ml-5 w-full flex">
                    <h2 className="card-title w-1/2">{collegeName}</h2>

                    <div className="card-actions justify-end mt-auto">
                        <Link to={`/apply/${_id}`}>
                            <button className="bg-[#5800FF] px-6 py-2 text-white">Apply</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdmissionCart;