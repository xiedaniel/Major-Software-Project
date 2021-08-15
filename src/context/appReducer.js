import {
  CREATE_LIST,
  DELETE_LIST,
  ADD_CARD,
  DELETE_CARD,
  SET_CARDS,
  SET_LIBRARY,
  ADD_LIST_TO_LIBRARY,
  SET_CURRENT_LIST,
  SET_LOADING
} from "./types"

const appReducer = (state, action)=> {
  switch(action.type) {
    case CREATE_LIST: 
      return {
        ...state,
        [action.payload]:[]
      }
    case DELETE_LIST:
      return {

      }
    case ADD_CARD:
      const newListTerms = [...state.currentListTerms, action.payload]
      return {
        ...state,
        currentListTerms: newListTerms,
        library: {
          ...state.library,
          [state.currentList]: newListTerms
        }
      }
    case DELETE_CARD:
      const filteredListTerms = state.currentListTerms.filter((card) => card.id !== action.payload)
      return {
        ...state,
        currentListTerms: filteredListTerms,
        library: {
          ...state.library,
          [state.currentList]: filteredListTerms
        }
      }
    case SET_CARDS:
      return {
        ...state,
        currentListTerms: action.payload
      }
    case SET_LIBRARY: 
      return {
        ...state,
        library: action.payload
      }
    case ADD_LIST_TO_LIBRARY:
      return {
        ...state,
        library: {
          ...state.library,
          [action.payload.title]: action.payload.terms
        }
      }
    case SET_CURRENT_LIST: {
      return {
        ...state,
        currentListTerms: state.library[action.payload],
        currentList: action.payload
      }
    }
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
}

export default appReducer;