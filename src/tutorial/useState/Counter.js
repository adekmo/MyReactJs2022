import React, { useState } from 'react'

const Counter = () => {
    const [value, setValue] = useState(0);

    const reset = () => {
        setValue(0)
    }

    const handleIncrease = () => {
        setTimeout(() => {
            // setValue(value + 1);
            setValue((valueBaru) => {
                return valueBaru + 1;
            })
        }, 2000);
    }
    
    return (
        <div>
            <section style={{margin: '4rem 0'}}>
                <h2>Easy Counter</h2>
                <h1>{value}</h1>
                <button style={{marginRight: '10px'}} onClick={() => setValue(value -1)}>-</button>
                <button onClick={reset}>reset</button>
                <button style={{marginLeft: '10px'}} onClick={() => setValue(value +1)}>+</button>
            </section>

            <section style={{margin: '4rem 0'}}>
                <h2>Hard Counter</h2>
                <h1>{value}</h1>
                <button onClick={handleIncrease}>increase later</button>
                
            </section>

        </div>
    )
}

export default Counter
