import React from 'react'
import { Button } from 'react-bootstrap'

function QuestionPalette(props) {
    let printBreak = (index) => {
        if (index % 3 === 0) {
            return <br/>
        }
    }
    return (
        <div className="question-palettee">
            {
                props.questions.answers.map((answer, index) => {
                    return <span key={index} className="question-button">
                                <Button onClick={() => {props.questions.onClickFn(index)}}>{index+1 < 10 ? "0"+(index+1) : (index+1)}</Button>
                                {printBreak(index+1)}
                            </span>
                })
            }
        </div>
    )
}
export default QuestionPalette