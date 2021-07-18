import React from 'react'
import { Button} from 'react-bootstrap'

const CardItem = (props) => {
    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>{props.card.term}</td>
            <td>{props.card.def}</td>
            <td><Button onClick={() => props.deleteCard(props.card.id)} variant="outline-danger">Delete</Button></td>         
        </tr>
    )
}

export default CardItem
