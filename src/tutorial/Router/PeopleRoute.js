import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { dataa } from '../../dataa';

const PeopleRoute = () => {
    const [people, setPeople] = useState(dataa);
    
    return (
        <div>
            <h2>People</h2>
            {people.map((person) => {
                return (
                <div key={person.id}>
                    <h3>{person.name}</h3>
                    <Link to={`/person/${person.id}`}>Check It</Link>
                </div>
                )
            })}
        </div>
    )
}

export default PeopleRoute
