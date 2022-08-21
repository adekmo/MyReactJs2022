import React from 'react'
import { useHistory, useParams } from 'react-router'
import useFetch from './useFetch';

const BlogDetail = () => {

    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading . . .</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Penulis : {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>delete</button>
                </article>
            )}
            {/* <h2>Blog Detail - {id}</h2> */}
        </div>
    )
}

export default BlogDetail
