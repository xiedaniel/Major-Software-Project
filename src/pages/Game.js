import React, {useState} from 'react'

const list = [
    {id: 1, term: 'term 1', def: 'defintion 1'},
    {id: 2, term: 'term 2', def: 'defintion 2'},
    {id: 3, term: 'term 3', def: 'defintion 3'},
    {id: 4, term: 'term 4', def: 'defintion 4'},
    {id: 5, term: 'term 5', def: 'defintion 5'},
    {id: 6, term: 'term 6', def: 'defintion 6'},
    {id: 7, term: 'term 7', def: 'defintion 7'},
    {id: 8, term: 'term 8', def: 'defintion 8'},
    {id: 9, term: 'term 9', def: 'defintion 9'},
    {id: 10, term: 'term 10', def: 'defintion 10'}
];

//create a list of definitions
const defList = list.map((item)=>{
    return item.def
});
console.log(defList)

// randomise list to determine random order for terms to be tested
function shuffle(list) {
    for (var i = list.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }
}

shuffle(list)
// console.log(list)

const questions = list.map((item)=>{
    const filteredDefintion = defList.filter(def => def !== item.def)
    let choices = [item.def];
    // shuffle list of definitons without correct definition and take the first three defintions
    shuffle(filteredDefintion);
    choices = choices.concat(filteredDefintion.slice(0, 3))
    shuffle(choices)
    // console.log(choices)
    return {
        ...item,
        choices
    }
})
console.log(questions)

const Game = () => {
    const [questionNo, setQuestionNo] = useState(0)
    const [result, setResult] = useState(null)
    const [score, setScore] = useState(0)

    const onSubmit = (answer) => {
        if (answer === questions[questionNo].def) {
            setResult(true)
            setScore(score + 1)
        } else {
            setResult(false)
        }
    }

    const onNext = () => {
        setQuestionNo(questionNo + 1);
        setResult(null)
    }

    return (

        <div>
            Score: {score} / {result === null ? questionNo : questionNo + 1}
            <br />
            {questions[questionNo].term}
            <button onClick={() => onSubmit(questions[questionNo].choices[0])}>{questions[questionNo].choices[0]}</button>
            <button onClick={() => onSubmit(questions[questionNo].choices[1])}>{questions[questionNo].choices[1]}</button>
            <button onClick={() => onSubmit(questions[questionNo].choices[2])}>{questions[questionNo].choices[2]}</button>
            <button onClick={() => onSubmit(questions[questionNo].choices[3])}>{questions[questionNo].choices[3]}</button>
            { result === null ? '' : (<p>Your answer is {result ? 'Correct' : 'Wrong'}</p>)}

            {(result !== null && questionNo < questions.length - 1) && <button onClick={onNext} >Next</button>}
        </div>
    )
}



export default Game
