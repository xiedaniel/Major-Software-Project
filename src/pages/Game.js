import React, {useContext, useEffect, useState} from 'react';
import AppContext from "../context/appContext"
import { getQuestions} from '../utils/index'
import PlayGame from './PlayGame'

const Game = (props) => {
  const appContext = useContext(AppContext);
  const { setCurrentList, currentListTerms } = appContext;
  console.log('current terms', currentListTerms, props.match.params.listname)
  const [questions, setQuestions] = useState(null)

  useEffect(() => {
    setCurrentList(props.match.params.listname)
  }, [props.match.params.listname] )

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