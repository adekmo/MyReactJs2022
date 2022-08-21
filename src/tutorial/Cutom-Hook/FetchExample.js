import React from 'react'
import { UseFetch } from './UseFetch';

const url = 'https://jsonplaceholder.typicode.com/posts';

const FetchExample = () => {
    const {loading, product} = UseFetch(url);
    return (
        <div>
            {/* <h2>Fetch Example</h2> */}
            <h3>{loading ? 'loading...' : 'data'}</h3>
        </div>
    )
}

export default FetchExample
