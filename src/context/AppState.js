import React, { useReducer, useEffect} from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";
import { v4 as uuidv4 } from 'uuid';

import {
  ADD_CARD,
  DELETE_CARD,
  SET_CARDS,
  SET_LIBRARY,
  ADD_LIST_TO_LIBRARY,
  SET_CURRENT_LIST,
  SET_LOADING,
  DELETE_LIST,
} from "./types"

const AppState = (props)=> {
  const initialState= {
    library: null,
    currentList: null,
    currentListTerms: null,
    loading: true
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  useEffect(() => {
    const libaryStr = localStorage.getItem("library")
    if (libaryStr) {
      setLibrary(JSON.parse(libaryStr))
    } else {
      setLibrary({});
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    localStorage.setItem("library", JSON.stringify(state.library));
  }, [state.library])

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

  const setLibrary = (library) => {
    dispatch({
      type: SET_LIBRARY,
      payload: library
    })
  }

  const addListToLibrary = (list) => {
    dispatch({
      type: ADD_LIST_TO_LIBRARY,
      payload: list
    })
  }

  const setCurrentList = (listname) => {
    dispatch({
      type: SET_CURRENT_LIST,
      payload: listname
    })
  }

  const deleteList = (listname) => {
    dispatch({
      type: DELETE_LIST,
      payload: listname
    })
  }

  const setLoading = (loading) => {
    dispatch({
      type: SET_LOADING,
      loading
    })
  }

  return (
    <AppContext.Provider
      value={{
        library: state.library,
        currentList: state.currentList,
        loading: state.loading,
        currentListTerms: state.currentListTerms,
        addCard,
        deleteCard,
        setCards,
        setLibrary,
        addListToLibrary,
        setCurrentList,
        deleteList
      }}
    >
      {state.loading? 'LOADING...' : (
        <div>{props.children}</div>
      )}
      
    </AppContext.Provider>
  )
}

export default AppState;