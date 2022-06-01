import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Icon } from '@iconify/react';
import auth from '../../firebase.init';
import './Myprofile.css'

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [form, setForm] = useState(false)
    const [info, setInfo] = useState([])
    const [update, setUpdate] = useState(false)
    useEffect(() => {
        fetch("https://blooming-ravine-00694.herokuapp.com/users", {
            method: "GET",
            headers: {
                'email': `${user?.email}`
            }
        })
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [update])
    const handleUpdate = (e) => {
        const number = e.target.number.value;
        const address = e.target.address.value;
        e.preventDefault();
        fetch('https://blooming-ravine-00694.herokuapp.com/user/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: user.email, number, address }),
        })
            .then(response => response.json())
            .then(data => {
                setUpdate(true);
            })
        setForm(false)
    }
    return (
        <div className='myGrid' >
            <div className='bg-cyan-900 py-16 flex lg:items-center justify-center text-white'>
                <div className="avatar flex-col ">
                    <div className="w-36 rounded-full mx-auto ring ring-white">
                        {user.photoURL ? <img src={user.photoURL} alt='' /> : <div className='text-8xl text-center mt-2'> {user.email.slice(0, 1)}</div>}
                    </div>
                    <button onClick={() => setForm(true)} className="btn btn-accent mt-5">Edit profile</button>
                    <div className='mt-5'>
                        <div className='flex items-center mb-3'><Icon icon="ic:baseline-person" /><span className='ml-2'>{user.displayName}</span></div>
                        <div className='flex items-center mb-3'><Icon icon="ic:baseline-email" /><span className='ml-2'>{user.email}</span></div>
                        <div className='flex items-center'><Icon icon="carbon:phone" /><span className='ml-2'>{info[0]?.number}</span></div>
                    </div>
                    <button className="btn btn-outline btn-accent text-white" onClick={() =>  signOut(auth) }> Log out</button>
                </div>
            </div>
            {form ? <div>
                <form onSubmit={handleUpdate} className="flex lg:items-center justify-center lg:h-screen">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl py-10 lg:mt-[-80px]">
                        <div className="card-body">
                            <div className="form-control mb-10">
                                <input type="number" name="number" placeholder="Phone number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" name="address" placeholder="Address" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Update" className="btn btn-outline btn-accent" />
                            </div>
                        </div>
                    </div>
                </form>
            </div> : <div className='bg-cyan-800 pl-5 text-white flex items-center'>
                <div>
                    <h1 className=' pt-10 text-5xl'>Details information:</h1>
                    <div className='mt-16'>
                        <div className='flex items-center mb-10'><span className='font-bold text-xl'>User name:</span><span className='ml-2'>{user.displayName}</span></div>
                        <div className='flex items-center mb-10'><span className='font-bold text-xl'>Email:</span><span className='ml-2'>{user.email}</span></div>
                        <div className='flex items-center mb-10'><span className='font-bold text-xl'>Phone number:</span> &nbsp; {info ? <span className='ml-2 text-white'>{info[0]?.number}</span> : "N/A"}</div>
                        <div className='flex items-center mb-10'><span className='font-bold text-xl'>Address:</span>&nbsp; {info ? <span className='ml-2 text-white'>{info[0]?.address}</span> : "N/A"}</div>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default MyProfile;