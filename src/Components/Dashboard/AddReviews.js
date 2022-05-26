import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReviews = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const users = {name:user?.displayName,email:user.email,image:user?.photoURL,feedback:e?.target?.feedback?.value}
    console.log('clicked');
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(users),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
    e.target.reset();
  }
  return (
    <div>
      <div className="card w-3/4">
        <div className="card-body">
          <h1 className='text-4xl text-amber-300 md:w-full'>Your Feedback matters!</h1>
          <p className='text-lg font-bold'>Please give us ratings/review to improve our product quality.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <textarea name="feedback" cols="30" rows="10" className='border border-2 rounded-xl p-5'></textarea>
            </div>
            <div className=" mt-6">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;