import React, { useState, useContext } from 'react'
import { dataa } from '../../dataa'

const PersonContext = React.createContext();



const ContextApi = () => {
    const [people, setPeople] = useState(dataa);

    const removeItem = (id) => {
        setPeople((peoples) => {
            return peoples.filter((person) => person.id !== id);
        });
    }
    
    return (
        <PersonContext.Provider value={{removeItem, people}}>
            <h2>Context API</h2>
            <List />
        </PersonContext.Provider>
    )
}

const List = () => {
    const mainData = useContext(PersonContext);
    return(
        <>
            {mainData.people.map((person) => {
                return(
                    <SinglePerson key={person.id} {...person} />
                )
            })}
        </>
    )
}

const SinglePerson = ({id, name}) => {
    const {removeItem} = useContext(PersonContext);
    // console.log(data);
    return(
        <div>
            <h4>{name}</h4>
            <button onClick={()=> removeItem(id)}>remove</button>
        </div>
    )
}

export default ContextApi
