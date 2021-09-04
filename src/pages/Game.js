import React, {useContext, useEffect, useState} from 'react';
import AppContext from "../context/appContext"
import { getQuestions} from '../utils/index'
import PlayGame from './PlayGame'

const Game = (props) => {
  const appContext = useContext(AppContext);
  const { setCurrentList, currentListTerms } = appContext;
  const [questions, setQuestions] = useState(null)

  useEffect(() => {
    setCurrentList(props.match.params.listname)
    // eslint-disable-next-line
  }, [props.match.params.listname, setCurrentList] )

  useEffect(() => {
    if (currentListTerms) {
      setQuestions(getQuestions(currentListTerms))
    }
  }, [currentListTerms])

  return (
    questions ? <PlayGame questions={questions} /> : <p>Loading...</p>
  )
}
export default Game;