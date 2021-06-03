import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <ul>
                <li><Link to={"/"}>About</Link></li>
                <li><Link to={"/contact"}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Nav