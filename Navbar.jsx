import React, { useContext } from 'react';
import img1 from '../images/logo.png';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    
    const {openSignIn} = useClerk();
    const {user} = useUser();

    const navigate = useNavigate()

    const {setShowRecruiterLogin} = useContext(AppContext)
    return (
        <div className='shadow-md py-4 glass top-0 left-0 w-full z-10'>
            <div className='max-w-screen-2x1 px-4 mx-auto flex justify-between items-center'>
                <img onClick={()=> navigate('/')} src={img1} alt="" className="h-20 w-auto max-sm:h-16 cursor-pointer" />
                {
                    user
                    ?<div className='flex items-center gap-3'>
                        <Link to={'/applications'}>Applied Jobs</Link>
                        <p>|</p>
                        <p className='max-sm:hidden'>Hi, {user.firstName+" "+user.lastName}</p>
                        <UserButton />
                    </div>
                    :<div className='flex gap-4 max-sm:text-xs'>
                    <button onClick={e=> setShowRecruiterLogin(true)}className='text-gray-600 text-sm hover:underline'>Recruiter Login</button>
                    <button onClick={ e=> openSignIn()} className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full text-sm hover:bg-blue-700 transition'>Login</button>
                </div>
                }
                
            </div>
        </div>
    )
}

export default Navbar;