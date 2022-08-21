import React, { useEffect, useRef } from 'react'

const UseRefBasic = () => {

    const refContainer = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
    }

    useEffect(() => {
        refContainer.current.focus();
    });
    

    return (
        <div>
            <h2>UseRef Basics</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" ref={refContainer}></input>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UseRefBasic
