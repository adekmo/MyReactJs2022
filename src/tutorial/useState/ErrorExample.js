import React, { useState } from 'react'

const ErrorExample = () => {
    // let title = "Tutorial";
    const [title, setTitle] = useState('Tutorial');

    const handleClik = () => {
        if(title === 'Tutorial'){
            setTitle('Okeyyy');
        }else{
            setTitle('Tutorial');
        }
        
    }

    return (
        <div>
            <h2>{title}</h2>
            <button onClick={handleClik}>change  title</button>
        </div>
    )
}

export default ErrorExample
