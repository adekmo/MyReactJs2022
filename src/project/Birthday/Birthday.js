import React, { useState } from 'react'
import data1 from '../../data1'
import List from './List'


const Birthday = () => {

    const [people, setPeople] = useState(data1);

    return (
        <div>
            <section className='content'>
                <h3>{people.length} birthday today</h3>
                <List people={people} />
                <button onClick={() => setPeople([])}>Clear</button>
            </section>
        </div>
    )
}

export default Birthday
