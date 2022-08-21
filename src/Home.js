import React, {  } from 'react'

import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    // let name = 'adek'
    // const [name, setName] = useState('adek');
    // const [age, setAge] = useState(25);

    const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    

    // const handleClick = () => {
    //     setName('monang');
    //     setAge(29);
    // }
    return (
        <div>
            <div>
                {error && <div>{error}</div>}
                {isPending && <div>Loading . . .</div>}
                {blogs && <BlogList blogs={blogs} title='All Blogs!!'/>}
                {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'Adek' )} title='Adek Blogs!' /> */}

                {/* <h2>Homepage</h2>
                <p>My name is {name} and I am {age} years old</p>
                <button onClick={handleClick}>Click Me</button> */}
            </div>
        </div>
    )
}

export default Home
