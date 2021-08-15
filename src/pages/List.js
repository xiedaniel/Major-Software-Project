import React, { useContext, useEffect } from 'react'
import CardList from '../components/CardList'
import { useHistory } from 'react-router-dom'
import AppContext from "../context/appContext"
import { Button } from 'react-bootstrap'

const List = (props) => {
    const history = useHistory()
    const appContext = useContext(AppContext);
    const { setCurrentList, currentListTerms } = appContext;

    useEffect(() => {
        // console.log("SETTING CURRENT LIST")
        setCurrentList(props.match.params.listname)
    // eslint-disable-next-line
    }, [props.match.params.listname])

    const handleClick = (link)=> {
        history.push(link)
    }

    return (
        <div>
            <h1 className="mb-4">My List <Button onClick={()=>handleClick("/game")}>Revise List</Button></h1>
            <CardList cards={currentListTerms}/>
        </div>
    )
}

export default List
