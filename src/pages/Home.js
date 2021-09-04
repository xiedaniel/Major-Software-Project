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
            <h1 className="text-center mb-5 mt-4">Revision App</h1>

            <p>Welcome to the revision application, where you are able to create and edit personalised lists to assist in your revision of course concepts. Once created, these lists can be revised through gamification; new users are encouraged to read the instructions below outlining the details of game and how to create and edit lists. </p>

            <h2 className="mb-4">Instructions</h2>
            <Accordion>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Creating and Editing Lists
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <p>Before commencing the game, you must select a list. Please proceed to the “My Library” page either by clicking on the header link or the button below. Under the tab titled “Create list” you are able to name your list and enter the terms and definitions you wish to revise. Further explanation is provided on the My Library page. </p>
                            <p>Your collection of lists will be stored on the My Library Page along with the number of lists and the number of cards in that each respective list. By selecting the list you wish to revise, you will be brought to a separate page. Here, you will be able to edit your list by either adding or removing terms with the option to delete the list entirely also made available. </p>
                            <p>Under the list a button with a placeholder “Revise List” will transport you to the Play Game screen. To see instructions and details on how to play the game, see tab below. </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        How to Play
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <p>Definitions from the list selected will be displayed one by one in a random order, cycling through the list in its entirety until completion. You will be presented with four choices of terms from the list in which one choice corresponds to the definition displayed, and the other three are incorrect.</p>
                            <p>If the answer entered is correct, that is, matches the definition displayed, a point will be earned and further points will be accumulated and displayed upon the completion of the list in the form of a final score. If the answer entered is incorrect, the correct answer will be displayed. To proceed to the next question, click the next button. </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

            <h2 className="mb-4 mt-4">Select a list to revise</h2>
            {/* <div className="mb-4 mt-4">
                <Button onClick={()=>handleClick("/create")}>Create New List</Button>
            </div> */}
            <div>
                <Button onClick={()=>handleClick("/library")}>Go to My Library</Button>
            </div>
        </div>
    )
}

export default Home

