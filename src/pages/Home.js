import React from 'react'
import {Accordion, Card} from 'react-bootstrap';
import { useHistory} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const Home = () => {

    const history = useHistory()
    const handleClick = (link)=> {
        history.push(link)
    }
    return (
        <div>
            <h1 className="text-center mb-5 mt-4">Welcome to Revision App</h1>
            <h2 className="mb-4">Instructions</h2>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Accessing Lists
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                        To display all created lists, visit ‘My Library’. Once on my library, select the list you wish to revise. You will be brought to the difficulty selection page before the game commences. 

                        If no lists are available, visit ‘Create’ to create your first list.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        How to Play
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body>

                            
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <h2 className="mb-4 mt-4">Select a list to revise</h2>
            {/* <div className="mb-4 mt-4">
                <Button onClick={()=>handleClick("/create")}>Create New List</Button>
            </div> */}
            <div>
                <Button onClick={()=>handleClick("/library")}>View my lists</Button>
            </div>
        </div>
    )
}

export default Home

