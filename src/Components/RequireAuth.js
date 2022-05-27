import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from "react-router-dom";
import auth from '../firebase.init';
import ClipLoader from "react-spinners/ClipLoader";

function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <div className='flex items-center justify-center h-screen'><ClipLoader size={150} color={"#123abc"}  speedMultiplier={0.5} /></div>
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
export default RequireAuth