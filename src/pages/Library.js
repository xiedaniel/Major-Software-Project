import React from 'react'
import CardList from '../components/CardList'
import {Link} from 'react-router-dom'

const Library = () => {
    return (
        <div>
            <h1>My Library</h1>
            <CardList />
            <br />
            <Link to="/">Home</Link>
        </div>
    )
}

export default Library
