import React, { useState } from 'react'

const ShortCircuit = () => {
    const [text, setText] = useState('adek');
    // Klw text = false, maka dia akan jalankan yg kanan
    // Klw text = true, maka dia akan jalankan yg kiri
    const firstValue = text || 'hello dek';
    // Klw text = false, maka dia akan jalankan yg kiri
    // Klw text = true, maka dia akan jalankan yg kanan
    const secondValue = text && 'hello dek';

    const [error, setError] = useState(false);
    return (
        <div>
            <h1>Short Circuit dan Ternary</h1>
            <h3>1. Short Circuit</h3>
            <h4>{firstValue}</h4>
            <h4>Value : {secondValue}</h4>
            <hr></hr>
            <h3>{text || 'Hello Mon' }</h3>
            {error && <h3>Error ...</h3>}
            <button onClick={() => setError(!error)}>Test Error</button>

            <h3>2. Ternary</h3>
            {error ? <h3>Tidak ada Error</h3> : <h3>Wah ada error nih</h3>}
            <button onClick={() => setError(!error)}>Test Error</button>
        </div>
    )
}

export default ShortCircuit
