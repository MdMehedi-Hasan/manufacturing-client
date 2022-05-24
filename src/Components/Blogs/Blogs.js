import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Blogs = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return (
            <h1>Loading</h1>
        )
    }
    return (
        <div className='text-8xl text-center text-orange-600'>
            This is blog
        </div>
    );
};

export default Blogs;