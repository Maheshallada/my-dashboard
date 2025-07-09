import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const USERS_API = 'https://jsonplaceholder.typicode.com/users';

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(USERS_API)
      .then(res => res.json())
      .then(data => setUser(data[0]));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="profile-wrapper">
      <div className="profile-header" onClick={() => navigate('/dashboard')}>
        <span className="back-arrow">←</span>
        <span className="welcome-text">Welcome, {user.name}</span>
      </div>

      <div className="profile-card">
        <div className="profile-grid">
          <div className="profile-field">
            <label>User ID</label>
            <p>{user.id}</p>
          </div>
          <div className="profile-field">
            <label>Name</label>
            <p>{user.name}</p>
          </div>
          <div className="profile-field">
            <label>Email</label>
            <p>{user.email}</p>
          </div>
          <div className="profile-field">
            <label>Phone</label>
            <p>{user.phone}</p>
          </div>
          <div className="profile-field">
            <label>Address</label>
            <p>{user.address.street}, {user.address.city}</p>
          </div>
          <div className="profile-field">
            <label>Company</label>
            <p>{user.company.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
