import React from 'react'
import QuizHeader from './QuizHeader'
import {getQuiz} from '../api/quizApi'

class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: getQuiz(parseInt(this.props.match.params.id))[0]
        }
        console.log(this.state.quiz)
    }

    render() {
        return (
            <div className="quiz-test">
                <QuizHeader title={this.state.quiz.title}/>
            </div>
        )
    }
}
export default Quiz