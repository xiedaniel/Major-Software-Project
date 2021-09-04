import React, { useContext, useEffect } from 'react'
import CardList from '../components/CardList'
import { useHistory } from 'react-router-dom'
import AppContext from "../context/appContext"
import { Button } from 'react-bootstrap'

const List = (props) => {
    const history = useHistory()
    const appContext = useContext(AppContext);
    const { currentList, setCurrentList, currentListTerms, deleteList } = appContext;

    useEffect(() => {
        console.log("SETTING CURRENT LIST", props.match.params.listname)
        setCurrentList(props.match.params.listname)
    // eslint-disable-next-line
    }, [props.match.params.listname])

    const handleClick = (link)=> {
        history.push(link)
    }

    const handleDeleteList = () => {
        if (window.confirm("Are you sure you wish to delete this list?")) {
            deleteList(currentList);
            history.push('/library')
        }
    }

    return (
        <div>
            <h1 className="mb-4">List - {props.match.params.listname}
            <Button onClick={()=>handleClick("/game/" + currentList)} style={{marginLeft: '1rem'}}>Revise List</Button>
            <Button onClick={handleDeleteList} className="btn btn-danger" style={{marginLeft: '1rem'}}>Delete List</Button>
            </h1>
            <CardList cards={currentListTerms}/>
        </div>
    )
}

export default List
