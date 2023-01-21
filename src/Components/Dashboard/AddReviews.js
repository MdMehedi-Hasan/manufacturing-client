import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReviews = () => {
  const [user] = useAuthState(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const feedback = { name: user?.displayName, email: user.email, image: user?.photoURL, feedback: e?.target?.feedback?.value, ratings: e?.target?.ratings?.value }

    fetch('https://wrench-and-screws.vercel.app/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(feedback),
    })
      .then(response => response.json())
      .then(data => {
      })
    e.target.reset();
  }
  return (
    <div>
      <div className="card w-3/4">
        <div className="card-body">
          <h1 className='text-4xl text-amber-300 md:w-full'>Your Feedback matters!</h1>
          <p className='text-lg font-bold text-white'>Please give us ratings/review to improve our product quality.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <textarea name="feedback" cols="30" rows="10" placeholder='Feedback' className='border border-2 rounded-xl p-5'></textarea>
              <input type="number" name="ratings" placeholder='Ratings (1-5)' className='input input-bordered mt-5' />
            </div>
            <div className=" mt-6">
              <input type="submit" value="Submit" className="btn btn-accent" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReviews;