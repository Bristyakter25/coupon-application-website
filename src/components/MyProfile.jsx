import React, { useContext } from 'react';
import welcomeMessage from '../assets/welcome image.jpeg'
import { AuthContext } from '../provider/AuthProvider';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={welcomeMessage}
      alt="message" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Welcome here!</h2>
    <p className='text-xl font-semibold text-blue-950'>{user && user.email}</p>
    
  </div>
</div>
    );
};

export default MyProfile;