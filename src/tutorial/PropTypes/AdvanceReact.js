import React from 'react'
import { UseFetch } from '../Cutom-Hook/UseFetch';
import Product from './Product';


const url = 'https://jsonplaceholder.typicode.com/posts';

const AdvanceReact = () => {

    const {product} = UseFetch(url);
    return (
        <div>
            <h2>Advance React</h2>
            {product.map((prod) => {
                return <Product key={prod.id} {...prod} />
            })}
        </div>
    )
}

export default AdvanceReact
