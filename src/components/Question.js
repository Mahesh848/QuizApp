import React from 'react'
import {Form, Col} from 'react-bootstrap'

function Question(props) {
    return (
        <div className="question-options">
            <div className="question">
                {props.question.question.question}
            </div>
            <div className="options">
                <Form.Group>
                    <Col>
                        {props.question.question.options.map((option, index) => {
                            return <Form.Check key={index}
                                type="radio"
                                label={option}
                                value={index}
                                name={"question" + props.question.id}
                                checked={props.question.responses[props.question.id] == index}
                                onChange={props.question.onSelectFn} />
                        })}
                    </Col>
                </Form.Group>
            </div>
        </div>
    )
}
export default Question