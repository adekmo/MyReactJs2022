import React, { useState, useEffect } from 'react'

const MultipleReturns = () => {
    const url = 'https://api.github.com/users/QuincyLarson';

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [user, setUser] = useState('Default User');

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if(res.status >= 200 && res.status <= 299){
                return res.json();
            } else{
                setLoading(false);
                setError(true);
                throw new Error(res.statusText);
            }
        })
        .then((user) => {
            setUser(user.login);
            setLoading(false);
        })
        .catch(e => console.log(e))
    }, [])

    if(loading){
        return (
            <div>
                <h2>Loading . . .</h2>
            </div>
        )
    }

    if(error){
        return (
            <div>
                <h2>Error . . .</h2>
            </div>
        )
    }

    return (
        <div>
            <h2>{user}</h2>
        </div>
    )
}

export default MultipleReturns
