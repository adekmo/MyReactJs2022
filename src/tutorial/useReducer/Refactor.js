import React, { useState, useReducer } from 'react'
import { dataa } from '../../dataa'
import Modal from './Modal'

const reducer = (state, action) => {
    const newPeoples = [...state.people, action.payload];
    if(action.type === 'ADD_NAME'){
        return {...state, people:newPeoples, showModal: true, modalContent: 'sukses'};
    }

    if(action.type === 'NO_VALUE'){
        return {...state, showModal: true, modalContent: 'isi nama'};
    }
    throw new Error('nama tidak sesuai');
    // return state;
}

const initialState = {
    people: [],
    showModal: false,
    modalContent: ''
}

const Refactor = () => {

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
    return (
        <div>
            <h2>Use Reducer</h2>
            {state.showModal && <Modal modalContent={state.modalContent}/>}
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
                    </div>
                )
            })}
        </div>
    )
}

export default Refactor
