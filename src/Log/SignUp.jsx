import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            return handleUserProfile(result.user, name)
        })
        .catch(error => {
            console.log(error.message);
        })


    }

    const handleUserProfile = (user, name) =>{
        updateProfile(user,{
            displayName : name,
            
        })
        .then(()=>{
            console.log('updated user');
        })
        .catch(error => {
            console.log(error.message);
        } )
    }
    return (
        <div className="hero min-h-screen login-bg ">


            <div className="card flex-shrink-0 w-full rounded-none max-w-sm shadow-xl bg-white ">
                <div className="card-body">
                    <form onSubmit={handleRegister}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
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