import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    return (
        <div className='text-8xl text-green-200'>
        My orders
    </div>
    );
};

export default MyOrders;