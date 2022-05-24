import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <h1>Loading</h1>
    }
    return (
        <div className=''>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Page content here --> */}
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 text-base-content bg-slate-500">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="dashboard/myorders" className='text-white'>My orders</Link></li>
                        <li><Link to="dashboard/addreviews" className='text-white'>Add a review</Link></li>
                        <li><Link to="dashboard/myprofile" className='text-white'>My profile</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;