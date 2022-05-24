import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <div class="drawer drawer-mobile bg-slate-200">
                <input id="admin-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col">
                    {/* <!-- Page content here --> */}
                    <Outlet/>
                </div>
                <div class="drawer-side">
                    <label for="admin-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
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