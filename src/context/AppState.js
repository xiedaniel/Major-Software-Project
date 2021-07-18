import React, { useReducer, useEffect} from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";
import { v4 as uuidv4 } from 'uuid';

import {
  ADD_CARD,
  DELETE_CARD,
  SET_CARDS,
} from "./types"

const AppState = (props)=> {
  const initialState= {
    cards: []
  }
  const [state, dispatch] = useReducer(appReducer, initialState)

  useEffect(() => {
    const cardArrayStr = localStorage.getItem("cards")
    if (cardArrayStr) {
        setCards(JSON.parse(cardArrayStr))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(state.cards));
  }, [state.cards])

  const addCard = (term, def) => {
    dispatch({
      type: ADD_CARD,
      payload: {id: uuidv4(), term: term, def: def},
    })
  }

  const deleteCard = (id) => {
    dispatch({
      type: DELETE_CARD,
      payload: id
    })
  }

  const setCards = (cards) => {
    dispatch({
      type: SET_CARDS,
      payload: cards
    })
  }

  return (
    <AppContext.Provider
      value={{
        cards: state.cards,
        addCard,
        deleteCard,
        setCards,
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppState;