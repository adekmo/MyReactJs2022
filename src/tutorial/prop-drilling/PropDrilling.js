import React, { useState } from 'react'
import { dataa } from '../../dataa'


const PropDrilling = () => {
    const [people, setPeople] = useState(dataa);

    const removeItem = (id) => {
        setPeople((people) => {
            return people.filter((person) => person.id !== id);
        });
    }
    
    return (
        <div>
            <h2>Prop Drilling</h2>
            <List people={people} removeItem={removeItem} />
        </div>
    )
}

const List = ({people, removeItem}) => {
    return(
        <>
            {people.map((person) => {
                return(
                    <SinglePerson key={person.id} {...person} removeItem={removeItem} />
                )
            })}
        </>
    )
}

const SinglePerson = ({id, name, removeItem}) => {
    return(
        <div>
            <h4>{name}</h4>
            <button onClick={()=> removeItem(id)}>remove</button>
        </div>
    )
}

export default PropDrilling
