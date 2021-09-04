import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ProgressBar, Row, Col, Button, Alert} from 'react-bootstrap'

const PlayGame = (props) => {
    const history = useHistory();
    const [questionNo, setQuestionNo] = useState(0)
    const [result, setResult] = useState(null)
    const [score, setScore] = useState(0)
    const questions = props.questions

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

    const onGoToLibrary = () => {
        history.push('/library')
    }

    const onPlayAgain = () => {
        window.location.reload(false);
    }

    return ( questions && questions.length > 0 ? (
        <div>
            <div>Score: {score} / {result === null ? questionNo : questionNo + 1}</div>
            <div><ProgressBar now={result === null ? questionNo : questionNo + 1} max={questions.length} label={`${result === null ? questionNo : questionNo + 1}`}/></div>
            <br />
            {questions[questionNo].term}
            <Row className="mt-4">
                <Col md={4}>
                    <Button variant="outline-secondary" disabled={result !== null} 
                        onClick={() => onSubmit(questions[questionNo].choices[0])}>{questions[questionNo].choices[0]}
                    </Button>
                </Col>
                <Col md={{ span: 4, offset: 2 }}>
                    <Button variant="outline-secondary" disabled={result !== null} 
                        onClick={() => onSubmit(questions[questionNo].choices[1])}>{questions[questionNo].choices[1]}
                    </Button>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col md={4}>
                    <Button variant="outline-secondary" disabled={result !== null} 
                        onClick={() => onSubmit(questions[questionNo].choices[2])}>{questions[questionNo].choices[2]}
                    </Button>
                </Col>
                <Col md={{ span: 4, offset: 2 }}>
                    <Button variant="outline-secondary" disabled={result !== null} 
                        onClick={() => onSubmit(questions[questionNo].choices[3])}>{questions[questionNo].choices[3]}
                    </Button>
                </Col>
            </Row>
            { 
                result === null ? 
                    '' : 
                    ( result ? <Alert className="mt-4" variant="success">Your answer is correct</Alert> : <Alert className="mt-4" variant="danger">{'Your answer is wrong. The correct definition is "' + questions[questionNo].def + '"'}</Alert>)
            }

            {
                (result !== null && questionNo < questions.length - 1) && 
                    <div><Button variant="outline-primary" onClick={onNext} >Next</Button></div>
            }
            {
                (result !== null && questionNo === questions.length - 1) && (
                    <>
                    <div><Button variant="outline-secondary" onClick={onPlayAgain} >Play again</Button>
                    <Button variant="outline-primary" onClick={onGoToLibrary} style={{marginLeft: '1rem'}}>Go to Library</Button></div>
                    </>
                )
                    
            }
            {questionNo} {questions.length}
        </div>
        ) : '<p>Loading...</p>' ) ;
}

export default PlayGame
