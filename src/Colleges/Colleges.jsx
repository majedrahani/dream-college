import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCart from './AllCart';

const Colleges = () => {
    const [colleges, setColleges] = useState();

    useEffect(()=>{
        fetch('http://localhost:5000/colleges')
        .then(res => res.json())
        .then(data => setColleges(data))
    },[])
    return (
        <div>
            <div className='colleges-bg w-full bg-fixed'>
                <h2 className=' text-2xl font-bold text-white text-center p-20'>COLLEGES</h2>
            </div>

            {/* colleges cart ------------------------------------------- */}
            <div className='md:grid grid-cols-3 gap-8 mx-20 mt-10'>
                {
                    colleges?.map(colleges => <AllCart
                    key={colleges._id}
                    colleges={colleges}
                    ></AllCart>)
                }
            </div>
        </div>
    );
};

export default Colleges;