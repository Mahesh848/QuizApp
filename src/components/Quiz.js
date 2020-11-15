import React from 'react'
import {Card, Button} from 'react-bootstrap'

function Quiz(props) {
    return (
        <div className='quiz'>
            <Card style={{width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.quiz.title + " Quiz"}</Card.Title>
                    <Card.Text style={{height: '7rem'}}>
                        {props.quiz.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Quiz