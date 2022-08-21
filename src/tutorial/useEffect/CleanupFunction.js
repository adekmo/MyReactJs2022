import React, { useState, useEffect } from 'react'

const CleanupFunction = () => {

    const [size, setSize] = useState(window.innerWidth);
    const checkSize = () => {
        setSize(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return () => {
            window.removeEventListener('resize', checkSize);
        }
    }, [])

    return (
        <div>
            <h2>Window</h2>
            <h3>{size} PX</h3>
        </div>
    )
}

export default CleanupFunction
