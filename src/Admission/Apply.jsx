import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Apply = () => {
    const data = useLoaderData()
    console.log(data);

    const { register, handleSubmit } = useForm();
    const [applyData, setApplyData] = useState("");
    return (
        <div className='colleges-bg bg-fixed'>
            <div>
                <div className=' w-full'>
                    <h2 className=' text-2xl font-bold text-white text-center pt-20'>APPLY HERE</h2>
                </div>

                <div className='w-full'>
                    <h2 className=' text-center my-10 text-2xl font-light text-white'>To apply <span className='text-[#00D7FF] font-semibold uppercase'>{data.collegeName}</span> complete the form</h2>
                </div>
            </div>

            {/* apply form */}
            <form onSubmit={handleSubmit((applyData) => setData(JSON.stringify(applyData)))}
                className='w-full pb-10'>
                {/* <Header /> */}
                <div className="card flex-shrink-0 w-full max-w-sm  mx-auto">
                    <div className="card-body">
                        <input type="text" placeholder="Candidate Name" className="input input-bordered w-full max-w-xs" />

                        <input type="text" placeholder="Candidate Email" className="input input-bordered w-full max-w-xs" />

                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Subject</option>
                            <option>Art</option>
                            <option>Chemistry</option>
                            <option>Biology</option>
                        </select>

                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                        <textarea className="textarea textarea-bordered" placeholder="Address.."></textarea>

                        <input class="input input-bordered"
                            id="dateOfBirth"
                            type="date"
                            name="dateOfBirth" />

                        <div className="form-control mt-6">
                            <button className="btn bg-[#00D7FF] border-none">Apply</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Apply;