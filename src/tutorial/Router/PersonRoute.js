import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router';
import { Link, useParams } from 'react-router-dom';
import { dataa } from '../../dataa';

const PersonRoute = () => {
    const [name, setName] = useState('default');
    const { id } = useParams();

    useEffect(() => {
        // pakai parseInt krna id berupa integer. sdngkan kimak defaul string
        const newPerson = dataa.find((person) => person.id === parseInt(id));
        setName(newPerson.name);
    }, []);


    return (
        <div>
            <h2>Person</h2>
            <h3>{name}</h3>
            <Link to="/people">Back</Link>
        </div>
    )
}

export default PersonRoute
