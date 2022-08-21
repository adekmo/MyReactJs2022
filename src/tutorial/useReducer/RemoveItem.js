import React, { useState, useReducer } from 'react'
import { dataa } from '../../dataa'
import Modal from './Modal'
import { reducer } from './Reducer'



const initialState = {
    people: [],
    showModal: false,
    modalContent: ''
}

const RemoveItem = () => {

    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name){
            const newPeople = {id: new Date().getTime().toString(), name};
            dispatch({type: 'ADD_NAME', payload: newPeople});
            setName('');
        }else {
            dispatch({type: 'NO_VALUE'});
        }
    }

    const closeModal = () => {
        dispatch({type : 'CLOSE_MODAL'});
    }

    return (
        <div>
            <h2>Use Reducer</h2>
            {state.showModal && <Modal modalContent={state.modalContent} closeModal={closeModal} />}
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <button type="submit">add name</button>
                </form>
            </div>

            {state.people.map((person) => {
                return (
                    <div key={person.id}>
                        <h3>{person.name}</h3>
                        <button onClick={() => dispatch({type : 'REMOVE_ITEM', payload : person.id})}>remove</button>
                    </div>
                )
            })}
        </div>
    )
}

export default RemoveItem
