import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AdmissionCart from './AdmissionCart';

const Admission = () => {
    const [data, setData] = useState();

    useEffect(()=>{
        fetch('https://dream-college-server.vercel.app/colleges')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    // console.log(data);
    return (
        <div>
            <div>
                <div className='banner-bg w-full bg-fixed'>
                    <h2 className=' text-2xl font-bold text-white text-center p-20'>ADMISSION</h2>
                </div>
            </div>

            <div className='lg:grid grid-cols-2 mx-20 gap-5 my-10'>
                {
                    data?.map(collegeData => <AdmissionCart
                        key={collegeData._id}
                        collegeData={collegeData}
                    ></AdmissionCart>)
                }
            </div>
        </div>
    );
};

export default Admission;