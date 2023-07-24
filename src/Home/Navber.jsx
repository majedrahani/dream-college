import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/collage-logo.png'
import { AuthContext } from '../Provider/AuthProvider';
import { FcApprove } from "react-icons/fc";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const naveItem = <>
        <div className=' lg:flex text-gray-900  font-light'>
            <li className='hover:bg-[#5800FF] hover:text-white py-5 px-3'><Link to='/'>Home</Link></li>
            <li className='hover:bg-[#5800FF] hover:text-white py-5 px-3'><Link to='/collegesPage'>Colleges</Link></li>
            <li className='hover:bg-[#5800FF] hover:text-white py-5 px-3'><Link to='/admission'>Admission</Link></li>
            <li className='hover:bg-[#5800FF] hover:text-white py-5 px-3'><Link to='/'>My College</Link></li>
        </div>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-none  w-52">
                            {naveItem}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img src={logo} alt="" className=' w-[150px]' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" px-1">
                        {naveItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.displayName && 
                        <div className=' mr-2 bg-[#00D7FF] hover:bg-[#5800FF] text-gray-600  hover:text-white px-6 py-3 uppercase btn rounded-none'>
                        <FcApprove className='text-2xl'/> {user?.displayName}</div>
                    }
                    {
                        user ?
                            <Link onClick={handleLogOut} className='bg-[#5800FF] text-white px-6 py-3'>Logout</Link> :
                            <Link className='bg-[#5800FF] text-white px-6 py-3' to="/login">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navber;