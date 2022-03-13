import React from 'react';

import UserList from '../components/UserList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Tim Newman',
      image:
        'https://images.pexels.com/photos/2306831/pexels-photo-2306831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      places: 5,
    },
  ];

  return <UserList items={USERS} />;
};

export default Users;
