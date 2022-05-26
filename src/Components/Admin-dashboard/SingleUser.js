import React from 'react';

const SingleUser = ({ user, makeAdmin}) => {
    return (
        <tr>
            <th></th>
            <td>{user?.name}</td>
            <td>{user?.email}</td>
            <td><button onClick={()=>makeAdmin(user?.email)} className="btn btn-xs bg-accent border-accent hover:bg-orange-200" >{user?.role? "Already an admin":"Make admin"}</button></td>
            <td><button className="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button></td>
        </tr>
    );
};

export default SingleUser;