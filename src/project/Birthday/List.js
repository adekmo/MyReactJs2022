import React from 'react'

const List = ({people}) => {
    return (
        <div>
            {people.map((person) => {
                    return (
                        <div key={person.id} className="list">
                            <img src={person.image}></img>
                            <div>
                                <h4>{person.name}</h4>
                                <h5>{person.age} years</h5>
                            </div>
                        </div>
                    )
                })}
        </div>
    )
}

export default List
