import React from 'react'
import { Link } from 'react-router-dom'

const NavbarRoute = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/people">People</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavbarRoute
