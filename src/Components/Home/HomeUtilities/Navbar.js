import { Icon } from '@iconify/react';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [users, setUsers] = useState([])
  const location = useLocation()
  useEffect(() => {
    if (user) {
      fetch("https://wrench-and-screws.vercel.app/user", {
        method: 'GET',
        headers: {
          email: `${user?.email}`,
        },
      })
        .then(res => res.json())
        .then(data => setUsers(data)
        )
    }
  }, [user])
  return (
    <div className={`py-5 ${location.pathname === '/myportfolio' ? 'bg-slate-800' : 'bg-amber-400'}  text-white`}>
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/blogs">About</Link></li>
              <li><Link to="/blogs">Carrer</Link></li>
              <li><Link to="/blogs">Contact</Link></li>
              <li><Link to="/blogs">FAQ</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/myportfolio">Portfolio</Link></li>
              {(user && !users?.role) && <div className='flex items-center'><li><Link to="/dashboard">Dashboard</Link></li>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden bg-white text-black border-0 w-1">&gt;</label></div>}
              {(user && users?.role) && <div className='flex items-center'><li><Link to="/admin">Admin</Link></li>
                <label htmlFor="admin-drawer" className="btn btn-primary drawer-button lg:hidden bg-white text-black border-0 w-1">&gt;</label></div>}
              {!user && <li> <Link to="/login">Log in</Link></li>}
            </ul>
          </div>

          <Link to='/' className="btn btn-ghost normal-case text-xl"><span className={`${location.pathname === '/myportfolio' ? 'text-white' : 'text-black'} text-4xl`}><Icon icon="entypo:tools" /></span> &nbsp;<span className={`${location.pathname === '/myportfolio' ? 'text-white' : 'text-black'}`}>Wrench &amp; </span>&nbsp;Screws</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold text-lg">
            <li><Link className="p-3 rounded-lg" to="/">Home</Link></li>
            <li><Link className="p-3 rounded-lg" to="/blogs">About</Link></li>
            <li><Link className="p-3 rounded-lg" to="/blogs">Carrer</Link></li>
            <li><Link className="p-3 rounded-lg" to="/blogs">Contact</Link></li>
            <li><Link className="p-3 rounded-lg" to="/blogs">FAQ</Link></li>
            <li><Link className="p-3 rounded-lg" to="/blogs">Blogs</Link></li>
            <li><Link className="p-3 rounded-lg" to="/myportfolio">Portfolio</Link></li>
            {(user && !users?.role) && <li><Link to="/dashboard">Dashboard</Link></li>}
            {(user && users?.role) && <li><Link to="/admin">Admin</Link></li>}

            {!user && <li> <Link className="p-3 rounded-lg" to="/login">Log in</Link></li>}
          </ul>
        </div>
        <div className="dropdown dropdown-end">
          {user && <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full bg-white">
              {
                user?.photoURL ? <img src={user?.photoURL} alt="" /> : <span className='inline-block mt-1 text-xl text-black'>{user?.email?.slice(0, 1)}</span>
              }

            </div>
          </label>}
          <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
            <li>
              <Link to="dashboard/dashboard/myprofile" className="justify-between">
                My Profile
              </Link>
            </li>
            {/* <li><a>Settings</a></li> */}
            <li>{user ? <span onClick={() => signOut(auth)}>Log out</span> : <Link to="/login">Log in</Link>}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;