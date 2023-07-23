import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const {googleSignIn , signIn} = useContext(AuthContext)

    const handleGoogleLogin = () =>{
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            
        } )
        .catch(error => {
            console.log(error);
        })
    }

    const handleSignIn = (event) =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error.message);
        })

    }
    return (
        <div className="hero min-h-screen login-bg ">


            <div className="card flex-shrink-0 w-full rounded-none max-w-sm shadow-xl bg-white ">
                <div className="card-body">
                    <form onSubmit={handleSignIn}>
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
                                <p href="#" className="label-text-alt link link-hover">New to this world
                                    <Link to='/signup' className=' pl-2 font-bold text-[#5800FF]' >
                                        Register
                                    </Link>
                                </p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-[#5800FF] w-full py-3 text-white font-bold">Login</button>
                        </div>
                    </form>

                    <div className="flex flex-col w-full border-opacity-50">

                        <div className="divider">OR</div>

                    </div>

                    <div className="form-control mt-6">

                        <button onClick={handleGoogleLogin} className="bg-[#00D7FF] w-full py-3 text-gray-600 font-bold btn"><FcGoogle className=' text-2xl'/> Google Sing In</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;