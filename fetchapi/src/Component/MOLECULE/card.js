import React, { useState } from 'react';
import UserCard from './UserCard';

export function UserList() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://reqres.in/api/users/');
    const data = await response.json();
    setUsers(data.data);
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      <div className="user-list">
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
        }