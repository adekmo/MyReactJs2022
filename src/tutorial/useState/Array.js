import React, { useState } from 'react'
import { dataa } from '../../dataa';


const Array = () => {

    const [people, setPeople] = useState(dataa);
    const handleDelete = (id) => {
        let newPeople = people.filter((x) => x.id  !== id);
        setPeople(newPeople);
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
            })};
            {/* Hapus semua data */}
            <button onClick={() => setPeople([])}>delete all</button>
        </div>
    )
}

export default Array
