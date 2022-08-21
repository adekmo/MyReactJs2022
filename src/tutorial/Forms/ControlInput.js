import React, { useState } from 'react'

const ControlInput = () => {

    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName && email){
            const person = {id: new Date().getTime().toString(), firstName, email};
            console.log(person);
            setPeople((peoples) => {
                return [...peoples, person];
            });
            setFirstName('');
            setEmail('');
        }else{
            console.log('kosong');
        }
    }

    return (
        <div>
            <h2>Control Input</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">Name : </label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}>
                </input>
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <button type="submit">add person</button>
            </form>
            {people.map((person) => {
                return(
                    <div key={person.id}>
                        <h4>{person.firstName}</h4>
                        <p>{person.email}</p>
                        <p>{person.id}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ControlInput
