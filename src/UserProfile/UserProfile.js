import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './userProfile.css';

const UserProfile = ({ user, setUser }) => {
  const [post, setPost] = useState([]);

  const getUser = () => {
    axios
      .get(
        `https://captain-citizen-america.herokuapp.com/users/1`
      )
      .then((res) => {
        setUser(res.data);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className='userBoard'>
      <div className='userInfo'>
        <img className='userIcon' src={user.photo_url} />
        <div className='user'>
          <p class='userName'>First Name: {user.first_name}</p>
          <p class='userName'>Last Name: {user.last_name}</p>
          <Link to='/edit-profile'>
            <button className='userBtn'>Edit profile</button>
          </Link>
        </div>

        <div className='postQuantity'>
          <div id='post'>
            <p>0</p> <p className='text'>Posts</p>
          </div>

          <div id='followers'>
            <p>0</p> <p className='text'>Followers</p>
          </div>

          <div id='following'>
            <p>0</p> <p className='text'>Following</p>
          </div>
        </div>

      </div>

      <div className='menu'>
        <p>My Request History</p>
        <p>Help History</p>
      </div>

    </div>
  );
};

export default UserProfile;
