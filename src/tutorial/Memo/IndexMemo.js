import React, { useState } from 'react'

const IndexMemo = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Count {count}</h3>
            <button onClick={() => setCount(count + 1)}>klik</button>
        </div>
    )
}

export default IndexMemo
