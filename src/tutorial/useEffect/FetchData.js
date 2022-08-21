import React, { useState, useEffect } from 'react'

const FetchData = () => {

    const url = 'https://api.github.com/users';

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        // console.log(users);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <div>
            <h3>Github Users</h3>
            {users.map((user) => {
                return (<div key={user.id}>
                    <h2>{user.login}</h2>
                    <img src={user.avatar_url}></img>
                </div>)
            })}
        </div>
    )
}

export default FetchData
