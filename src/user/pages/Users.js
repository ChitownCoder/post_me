import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Ken Newman',
      image:
        'https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      places: 5,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
