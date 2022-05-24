import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <h1>loading</h1>
  }
  return (
    <div className='border-b-2'>
      <div className="navbar bg-base-100 justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/">Home</Link></li>
              {/* <li><Link to="/purchase">Purchase</Link></li> */}
              <li><Link to="/blogs">Blogs</Link></li>
              {user && <li><Link to="/dashboard">Dashboard</Link></li>}
              <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">Final project</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/purchase">Purchase</Link></li> */}
            <li><Link to="/blogs">Blogs</Link></li>
            {user && <li><Link to="/dashboard">Dashboard</Link></li>}
            {user && <li><Link to="/admin">Admin</Link></li>}

            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="dashboard/dashboard/myprofile" className="justify-between">
                My Profile
              </Link>
            </li>
            <li><a>Settings</a></li>
            <li>{user ? <span onClick={() => signOut(auth)}>Log out</span> : <Link to="/login">Log in</Link>}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;