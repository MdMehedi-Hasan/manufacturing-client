import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Icon } from '@iconify/react';
import auth from '../../firebase.init';
import './Myprofile.css'

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className='myGrid' >
            <div className='bg-cyan-900 py-16 flex lg:items-center justify-center text-white'>
                <div className="avatar flex-col ">
                    <div className="w-36 rounded-full mx-auto ring ring-white">
                       {user.photoURL? <img src={user.photoURL} alt='' />:<div className='text-8xl text-center mt-2'> {user.email.slice(0,1)}</div>}                        
                    </div>
                    <button className="btn btn-accent mt-5">Edit profile</button>
                    <div className='mt-5'>
                        <div className='flex items-center mb-3'><Icon icon="ic:baseline-person" /><span className='ml-2'>{user.displayName}</span></div>
                        <div className='flex items-center'><Icon icon="ic:baseline-email" /><span className='ml-2'>{user.email}</span></div>
                    </div>
                    <button className="btn btn-outline text-white" onClick={() => { signOut(auth);localStorage.removeItem('accessToken') }}> Log out</button>
                    </div>
            </div>
            <div className='bg-cyan-800 pl-5 text-white flex items-center'>
                <div>
                <h1 className=' pt-10 text-5xl'>Details information:</h1> 
                <div className='mt-16'>
                        <div className='flex items-center mb-10'><span className='font-bold text-xl'>User name:</span><span className='ml-2'>{user.displayName}</span></div>
                        <div className='flex items-center mb-10'><span className='font-bold text-xl'>Email:</span><span className='ml-2'>{user.email}</span></div>
                        <div className='flex items-center mb-10'><span className='font-bold text-xl'>Phone number:</span> &nbsp; {user.phoneNumber? <span className='ml-2'>{user.phoneNumber}</span>: "N/A"}</div>
                        <div className='flex items-center mb-10'><span className='font-bold text-xl'>Address:</span><span className='ml-2'>N/A</span></div>
                    </div>
                    </div>
            </div>
        </div>
    );
};

export default MyProfile;