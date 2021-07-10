import React from 'react'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/library">My Library</Link>
            <Link to="/create">Create</Link>
        </div>
    )
}

export default Header;
