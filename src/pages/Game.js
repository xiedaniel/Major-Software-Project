import React, {useContext} from 'react';
import AppContext from "../context/appContext"
import { getQuestions} from '../utils/index'
import PlayGame from './PlayGame'

const Game = () => {
  const appContext = useContext(AppContext);
  const { cards } = appContext;
  const questions = getQuestions(cards)

  return (
    <PlayGame questions={questions} />
  )
}
export default Game;