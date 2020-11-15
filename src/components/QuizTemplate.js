import React from 'react'
import {Card, Button} from 'react-bootstrap'

class  QuizTemplate extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='quiz'>
                <Card style={{width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.quiz.title + " Quiz"}</Card.Title>
                        <Card.Text style={{height: '7rem'}}>
                            {this.props.quiz.description}
                        </Card.Text>
                        <Button variant="primary" onClick={() => {this.props.clickFn(this.props.quiz.id)}}>Go</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
export default QuizTemplate