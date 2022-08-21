import {useState, useEffect} from 'react'

export const UseFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);

    const getProducts = async () => {
        const response = await fetch(url);
        const products = await response.json();
        setLoading(false);
        setProduct(products);
    }

    useEffect(() => {
        getProducts();
    }, [url]);

    return {loading, product}
};


