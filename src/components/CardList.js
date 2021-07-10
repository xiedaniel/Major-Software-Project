import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CardItem from './CardItem';

const CardList = () => {
    const [term, setTerm] = useState(''); // remember term inputted
    const [def, setDef] = useState(''); // rememeber definition inputted
    const [cards, setCards] = useState([]);
    // const [error, setError] = useState('');

    useEffect(() => {
        const cardArrayStr = localStorage.getItem("cards")
        if (cardArrayStr) {
            setCards(JSON.parse(cardArrayStr))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cards", JSON.stringify(cards))
    }, [cards])

    const deleteCard = (id) => {
        setCards(
            (prevCards)=>{
                return prevCards.filter(
                (card) => card.id !== id
                )}
        )
    }

    const addCard = (event) => {
        event.preventDefault() // doesn't go to server
        if (term.trim() === '' || def.trim() === '') {
            // setError('Input field cannot be empty')
        } else {
            // setError('')
            setCards(
                (prevCards)=>(
                   [...prevCards, {id: uuidv4(), term: term, def: def}]
                )
            )
            setTerm('')
            setDef('')
        }
    }
    return (
        <div>
            {cards.map(
                (card)=>(<CardItem card={card} deleteCard={deleteCard} key={card.id}/>)
            )}
            <br />
            {/* {error && <div style={{color:"red"}}>{error}</div>} */}
            <form onSubmit={addCard}>
                <input type="text" placeholder="Enter a Term" value={term} onChange={(event)=>{setTerm(event.target.value)}}/>
                <input type="text" placeholder="Enter a Definition" value={def} onChange={(event)=>{setDef(event.target.value)}}/>
                <input type="submit" value="Add Card" disabled={term.trim() === '' || def.trim() === ''}></input>
            </form>
        </div>
    )
}

export default CardList
