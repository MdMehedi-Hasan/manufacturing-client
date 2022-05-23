import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <div className="navbar bg-base-100">
      {/*   <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl">Final project</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/purchase">Purchase</Link></li>
      <li><Link to="/blogs">Blogs</Link></li>
      {user && <li><Link to="/dashboard">Dashboard</Link></li>}
      <li>{user ? <span onClick={()=>signOut(auth)}>Log out</span> : <Link to="/login">Log in</Link>}</li>
            <li>
              {user && <div class="avatar">
  <div class="w-10 rounded-full">
    {user?.photoURL ? <img src={user?.photoURL && user.photoURL} alt=''/> : <div className='text-white bg-slate-500 w-10 h-10 rounded-full text-center text-2xl'>{user?.email.slice(0,1)}</div>}
  </div>
</div>}
            
      </li>
    </ul>
  </div> */}
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
              <li><Link to="/purchase">Purchase</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              {user && <li><Link to="/dashboard">Dashboard</Link></li>}
              <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">Final project</Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">
          <li><Link to="/">Home</Link></li>
            <li><Link to="/purchase">Purchase</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              {user && <li><Link to="/dashboard">Dashboard</Link></li>}
            <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
          </ul>
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a class="justify-between">
               My Profile
              </a>
            </li>
            <li><a>Settings</a></li>
            <li>{user ? <span onClick={()=>signOut(auth)}>Log out</span> : <Link to="/login">Log in</Link>}</li>
          </ul>
        </div>  
      </div>
    </div>
  );
};

export default Navbar;