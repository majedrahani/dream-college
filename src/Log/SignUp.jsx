import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero min-h-screen login-bg ">


            <div className="card flex-shrink-0 w-full rounded-none max-w-sm shadow-xl bg-white ">
                <div className="card-body">
                    <form >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='Name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p href="#" className="label-text-alt link link-hover">Already have an account
                                    <Link to='/login' className=' pl-2 font-bold text-[#5800FF]' >
                                        Login
                                    </Link>
                                </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-[#5800FF] w-full py-3 text-white font-bold">Sign Up</button>
                        </div>
                    </form>

                    
                </div>
            </div>

        </div>
    );
};

export default SignUp;