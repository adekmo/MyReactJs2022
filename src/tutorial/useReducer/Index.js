import React, { useState } from 'react'
import { dataa } from '../../dataa'
import Modal from './Modal'

const Index = () => {

    const [showModal, setShowModal] = useState(false);
    const [people, setPeople] = useState(dataa);
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name){
            setShowModal(true);
            setPeople([...people, {id: new Date().getTime().toString(), name }]);
            setName('');
        }else {
            setShowModal(true);
        }
    }

    return (
        <div>
            <h2>Use Reducer</h2>
            {showModal && <Modal />}
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <button type="submit">add name</button>
                </form>
            </div>

            {people.map((person) => {
                return (
                    <div key={person.id}>
                        <h3>{person.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Index
