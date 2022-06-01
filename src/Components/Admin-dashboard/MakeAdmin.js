import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import SingleUser from './SingleUser';
import 'react-toastify/dist/ReactToastify.css';
// import ClipLoader from "react-spinners/ClipLoader";
// import auth from '../../firebase.init';
// import { useAuthState } from 'react-firebase-hooks/auth';

const MakeAdmin = () => {
  // const [user] = useAuthState(auth);
  const [users, setUsers] = useState([])
  const [deleteUser, setDeleteUser] = useState(false)
  const [admin,setAdmin] =useState(false)
  useEffect(() => {
    fetch("https://blooming-ravine-00694.herokuapp.com/users")
      .then(res => res.json())
      .then(data =>
         setUsers(data),
        //  setDeleteUser(true)
      )}, [admin])
  const makeAdmin = (email) => {
    fetch('https://blooming-ravine-00694.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.modifiedCount != 0) {
          toast.success(`Created ${email} as admin!`);
          setAdmin(!admin)
        }
        else { 
          toast.error(`${email} is already an admin!`);
          setAdmin(false)
      }
      })
  }
  const handleDelete = (email) => {
    fetch('https://blooming-ravine-00694.herokuapp.com/user/delete', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(response => response.json())
      .then(data => {
        setAdmin(!admin)
      })
  }
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <ToastContainer />
        <thead>
          <tr>
            <th></th>
            {/* <th>Name</th> */}
            <th>Email</th>
            <th>Create new admin</th>
            <th>Remove user</th>
          </tr>
        </thead>
        <tbody>
          {
            users?.map(user => <SingleUser key={user._id} user={user} makeAdmin={() => makeAdmin(user.email)} handleDelete={() => handleDelete(user.email)} />)
          }
        </tbody>
      </table>
    </div>
  );
};

export default MakeAdmin;