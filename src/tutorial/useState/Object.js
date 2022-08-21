import React, { useState } from 'react'

const Object = () => {
    const [person, setPerson] = useState({
        name: 'Adek',
        age: 29,
        message: 'random message',
    });

    const changeMessage = () => {
        if(person.age === 29) {
            setPerson({...person, message: 'message has changed', age: 30})
        }else{
            setPerson({...person, message: 'random message', age: 29})
        }
        
    }
    
    return (
        <div>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button onClick={changeMessage}>Change Message</button>
        </div>
    )
}

export default Object
