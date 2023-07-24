import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Apply = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>
            <div>
                <div className='banner-bg w-full bg-fixed'>
                    <h2 className=' text-2xl font-bold text-white text-center p-20'>APPLY HERE</h2>
                </div>

                <div className='w-full'>
                    <h2 className=' text-center my-10 text-2xl font-light'>To apply <span className=' text-[#5800FF]'>{data.collegeName}</span> complete the form</h2>
                </div>
            </div>

            {/* apply form */}

        </div>
    );
};

export default Apply;