import React from 'react'
import CardList from '../components/CardList'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Library = () => {
    const history = useHistory()
    const handleClick = (link)=> {
        history.push(link)
    }

    return (
        <div>
            <h1 className="mb-4">My List <Button onClick={()=>handleClick("/game")}>Revise List</Button></h1>
            <CardList />
        </div>
    )
}

export default Library
