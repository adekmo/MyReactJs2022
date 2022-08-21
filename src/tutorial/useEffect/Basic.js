import React, { useEffect, useState } from 'react'

const Basic = () => {
    const [value, setValue] = useState(0)
    
    useEffect(() => {
        if(value > 2){
            document.title = `New Message(${value})`;
        }
    }, [value]);

    return (
        <div>
            <h2>{value}</h2>
            <button onClick={()=> setValue(value + 1)}>click me</button>
        </div>
    )
}

export default Basic
