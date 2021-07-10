import React from 'react'

const CardItem = (props) => {
    return (
        <div>
            Term: {props.card.term}
            Definition: {props.card.def}
            <button onClick={() => props.deleteCard(props.card.id)}>Delete</button>
        </div>
    )
}

export default CardItem
