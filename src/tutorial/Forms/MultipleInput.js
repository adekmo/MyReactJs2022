import React, { useState } from 'react'

const MultipleInput = () => {
    // const [firstName, setfirstName] = useState('');
    // const [email, setEmail] = useState('');
    // const [age, setAge] = useState('');
    const [person, setPerson] = useState({firstName: '', email: '', age: '' })
    const [people, setPeople] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(person.firstName && person.email && person.age){
            const newPerson = {...person, id: new Date().getTime().toString()};
            console.log(newPerson);
            setPeople([...people, newPerson])
            setPerson({firstName: '', email: '', age: '' });
        }else{
            console.log('kosong');
        }
    };


    return (
        <div>
            <h2>Multiple Input</h2>
            <form>
                <div>
                    <label htmlFor="firstName">Name : </label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={person.firstName}
                        onChange={handleChange}
                        >
                    </input>
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={person.email}
                        onChange={handleChange}
                        >
                    </input>
                </div>
                <div>
                    <label htmlFor="age">Age : </label>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        value={person.age}
                        onChange={handleChange}
                        >
                    </input>
                </div>
                <button type="submit" onClick={handleSubmit}>Add Person</button>
            </form>
            {people.map((persons) => {
                return(
                    <div key={persons.id}>
                        <h3>{persons.firstName}</h3>
                        <p>{persons.email}</p>
                        <p>{persons.age}</p>
                        <p>{persons.id}</p>
                    </div>
                )
            } )};
        </div>
    )
}

export default MultipleInput
