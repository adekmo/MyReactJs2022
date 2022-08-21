import React, { useState } from 'react'
import { dataa } from '../../dataa'


const FinalCase = () => {

    const [people, setPeople] = useState(dataa);
    
    const handleDelete = (id) => {
        
        setPeople((oldPeople) => {
            let newPeople = oldPeople.filter((x) => x.id  !== id);
            return newPeople;
        });
    }

    return (
        <div>
            {people.map((person) => {
                
                return (
                    <div key={person.id}>
                        <h4>{person.name}</h4>
                        {/* hapus satu-satu */}
                        <button onClick={() => handleDelete(person.id)}>delete</button>
                    </div>
                )
            })}
            {/* Hapus semua data */}
            <button onClick={() => setPeople([])}>delete all</button>
        </div>
    )
}

export default FinalCase
