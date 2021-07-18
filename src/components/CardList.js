import React, { useState, useContext } from 'react';
import CardItem from './CardItem';
import {Form, Row, Col, Card, Table, Button} from 'react-bootstrap'
import AppContext from "../context/appContext"

const CardList = () => {
    const [term, setTerm] = useState(''); // remember term inputted
    const [def, setDef] = useState(''); // rememeber definition inputted

    const appContext = useContext(AppContext);
    const { cards, deleteCard, addCard } = appContext;

    const delete_card = (id) => {
        console.log("DELETING ", id)
        deleteCard(id)
    }

    const add_card = (event) => {
        event.preventDefault() // doesn't go to server
        if (term.trim() === '' || def.trim() === '') {
        } else {
            addCard(term, def)
            setTerm('')
            setDef('')
        }
    }
    return (
        <div>
            <Table striped bordered hover size="sm" responsive="md">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Term</th>
                    <th>Defintion</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cards.map(
                        (card, index)=>(<CardItem card={card} deleteCard={delete_card} key={card.id} index={index} />)
                    )}
                </tbody>
            </Table>
            <br />
            {/* {error && <div style={{color:"red"}}>{error}</div>} */}

            <Card>
                <Card.Header>Add cards</Card.Header>
                <Card.Body>
                    <Form onSubmit={add_card} responsive="md">
                        <Row>
                            <Col>
                            <Form.Control placeholder="Enter a Term" value={term} onChange={(event)=>{setTerm(event.target.value)}}/>
                            </Col>
                            <Col>
                            <Form.Control placeholder="Enter a Definition" value={def} onChange={(event)=>{setDef(event.target.value)}} />
                            </Col>
                            <Col xs={2}>
                            <Button variant="primary" value="Add Card" disabled={term.trim() === '' || def.trim() === ''} type="submit">Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardList
