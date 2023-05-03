import React from 'react';


 function UserCard({ user }) { 
  return (
    <div className="user-card">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <p>{user.email}</p>
    </div>
  );
}

export default UserCard;