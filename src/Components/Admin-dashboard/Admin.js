import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <div className="drawer drawer-mobile ">
                <input id="admin-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="admin-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-60 bg-slate-700 text-white">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="">Manage Products</Link></li>
                        <li><Link to="addProducts">Add Products</Link></li>
                        <li><Link to="manageOrders">Manage Orders</Link></li>
                        <li><Link to="makeadmin">Make Admin</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Admin;