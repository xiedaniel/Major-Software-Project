import {CREATE_LIST, DELETE_LIST, ADD_CARD, DELETE_CARD, SET_CARDS} from "./types"

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
      return {
        cards: [...state.cards, action.payload] 
      }
    case DELETE_CARD:
      return {
        cards: state.cards.filter((card) => card.id !== action.payload )
      }
    case SET_CARDS:
      return {
        cards: action.payload
      }
    default:
      return state;
  }
}

export default appReducer;