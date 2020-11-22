import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [
        {
            id: "u1",
            name: "Anoop",
            image: "https://pbs.twimg.com/profile_images/1178196849095630848/b3eDfU0B_400x400.jpg",
            places: 4
        }
    ]
    return <UsersList items={USERS} />;
}

export default Users;