import React from 'react'
import QuizHeader from './QuizHeader'
import {getQuiz} from '../api/quizApi'
import Question from './Question'
import { Button } from 'react-bootstrap'

class Quiz extends React.Component {
    constructor(props) {
        super(props)
        let quiz = getQuiz(parseInt(this.props.match.params.id))[0]
        let time = this.convertMinsToTime(quiz.time)

        this.state = {
            quiz: quiz,
            timeLeft: time,
            currentQuestionId: 0,
            currentQuestion: quiz.questions[0],
            answers: []
        }
        this.timer = 0
        this.convertMinsToTime = this.convertMinsToTime.bind(this)
        this.countDown = this.countDown.bind(this)
        this.setQuestion = this.setQuestion.bind(this)
        this.onSelectOption = this.onSelectOption.bind(this)
        this.clearAnswer = this.clearAnswer.bind(this)
    }

    componentDidMount() {
        const answers = this.state.quiz.questions.map(question => {
            return 0
        });
        this.setState({answers: answers})
        this.timer = setInterval(this.countDown, 1000)
    }

    setQuestion(id) {
        let question = this.state.quiz.questions[id]
        this.setState({currentQustionId: id, currentQuestion: question}, () => {
            console.log(this.state.currentQuestion)
        })
    }

    convertMinsToTime(minutes) {
        let hrs = 0
        let mins = 0
        if (minutes >= 60) {
            hrs = minutes / 60
            minutes = Math.floor(minutes / 60)
        }
        if (minutes > 0) {
            mins = Math.ceil(minutes)
        }
        return {
            hours: hrs < 10 ? "0"+hrs : hrs,
            minutes: mins < 10 ? "0"+mins : mins,
            seconds: "00"
        }
    }

    countDown() {
        let secs = parseInt(this.state.timeLeft.seconds)
        let mins = parseInt(this.state.timeLeft.minutes)
        let hrs = parseInt(this.state.timeLeft.hours)
        if (secs > 0) {
            secs -= 1
        } else {
            if(mins > 0) {
                secs = 59
                mins -= 1
            } else {
                if (hrs > 0) {
                    mins = 59
                    hrs -= 1
                } else {
                    clearInterval(this.timer)
                }
            }
        }
        let time = {
            hours: hrs < 10 ? "0"+hrs : hrs,
            minutes: mins < 10 ? "0"+mins : mins,
            seconds: secs < 10 ? "0"+secs : secs
        }
        this.setState({timeLeft: time})
    }

    onSelectOption(event) {
        const answer = event.target.value
        let allAnswers = this.state.answers
        allAnswers[this.state.currentQuestionId] = answer
        this.setState({answers: allAnswers})
    }

    clearAnswer() {
        let allAnswers = this.state.answers
        allAnswers[this.state.currentQuestionId] = -1
        this.setState({answers: allAnswers})
    }

    render() {
        return (
            <div className="quiz-test">
                <QuizHeader detailes={{'title': this.state.quiz.title, 'time': this.state.timeLeft}}/>
                <div className="quiz-body">
                    <div className="quiz-question">
                        <Question question={{question: this.state.currentQuestion, id: this.state.currentQuestionId, onSelectFn: this.onSelectOption, responses: this.state.answers}}/>
                        <div className="acion-buttons">
                            <div className="buttons-move">
                                <Button variant="primary">Mark</Button>
                                <Button variant="secondary" onClick={this.clearAnswer}>Clear Response</Button>
                                <Button variant="outline-primary">Next </Button>
                            </div>
                            <div className="buttons-end">
                                <Button variant="danger">End Test</Button>
                            </div>
                        </div>
                    </div>
                    <div className="question-palette">

                    </div>
                </div>
            </div>
        )
    }
}
export default Quiz