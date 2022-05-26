import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import SingleUser from './SingleUser';
import 'react-toastify/dist/ReactToastify.css';
// import auth from '../../firebase.init';
// import { useAuthState } from 'react-firebase-hooks/auth';

const MakeAdmin = () => {
    // const [user] = useAuthState(auth);
    const [users, setUsers] = useState([])
    // const uEmail = user.email
    // const [adminEmail, setAdminEmail] = useState('')
    // console.log(users);
    useEffect(() => {
        fetch("http://localhost:5000/users",{
            method: 'GET',
            headers: {
                // email: `${uEmail}`,
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`,
            },
          })
        .then(res =>res.json())
        .then(data =>setUsers(data))
    }, [])
    const makeAdmin = (email) => {
            fetch('http://localhost:5000/users/admin', {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({email}),
              })
              .then(response => response.json())
              .then(data => {
                  console.log('Success:', data);
                  if (data.modifiedCount != 0) {
                      toast.success(`Created ${email} as admin!`)
                  }
                  else (
                    toast.error(`${email} is already an admin!`)
                  )
              })
    }
    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
            <ToastContainer />
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Create new admin</th>
        <th>Remove user</th>
      </tr>
    </thead>
    <tbody>
        {
            users?.map(user=> <SingleUser key={user._id} user={user} makeAdmin={()=>makeAdmin(user.email)}/>)
        }
    </tbody>
  </table>
</div>
    );
};

export default MakeAdmin;