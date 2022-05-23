import React from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Icon } from '@iconify/react';
import auth from '../firebase.init';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        <h1>Loading</h1>
    }
    return (
        <div className='grid' style={{ gridTemplateColumns:"2fr 3fr"}}>
            <div className='bg-slate-600 py-16 flex lg:items-center justify-center'>
                <div className="avatar flex-col">
                    <div className="w-36 rounded-full mx-auto">
                        <img src={user.photoURL} alt='' />                       
                    </div>
                    <button className="btn btn-accent mt-5">Edit profile</button>
                    <div className='mt-5'>
                        <div className='flex items-center mb-3'><Icon icon="ic:baseline-person" /><span className='ml-2'>{user.displayName}</span></div>
                        <div className='flex items-center'><Icon icon="ic:baseline-email" /><span className='ml-2'>{user.email}</span></div>
                    </div>
                    <button className="btn btn-outline" onClick={()=>signOut(auth)}> Log out</button>
                    </div>
            </div>
            <div className='bg-green-600'>
                details more about me
            </div>
        </div>
    );
};

export default MyProfile;