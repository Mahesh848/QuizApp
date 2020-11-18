import React from 'react'
import QuizHeader from './QuizHeader'
import {getQuiz} from '../api/quizApi'
import Question from './Question'
import { Button } from 'react-bootstrap'
import AlertBox from './AlertBox'
import QuestionPalette from './QuestionPalette'
import {Link} from 'react-router-dom'

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
            answers: [],
            markedQuestions: [],
            showQuizEndAlert: false,
            isQuizEnded: false
        }
        this.timer = 0
        this.convertMinsToTime = this.convertMinsToTime.bind(this)
        this.countDown = this.countDown.bind(this)
        this.setQuestion = this.setQuestion.bind(this)
        this.onSelectOption = this.onSelectOption.bind(this)
        this.clearAnswer = this.clearAnswer.bind(this)
        this.nextQuestion = this.nextQuestion.bind(this)
        this.closeAlert = this.closeAlert.bind(this)
        this.markTheQuestion = this.markTheQuestion.bind(this)
    }

    componentDidMount() {
        const answers = this.state.quiz.questions.map(question => {
            return -1
        });
        const markedQuestions = this.state.quiz.questions.map(question => {
            return false
        })
        this.setState({answers: answers, markedQuestions: markedQuestions})
        this.timer = setInterval(this.countDown, 1000)
    }

    setQuestion(id) {
        let question = this.state.quiz.questions[id]
        this.setState({currentQuestionId: id, currentQuestion: question}, () => {
            console.log(this.state)
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
                    this.setState({isQuizEnded: true})
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

    nextQuestion() {
        let currentuQuestionId = parseInt(this.state.currentQuestionId) + 1
        if (currentuQuestionId < this.state.quiz.questions.length) {
            let currentQuestion = this.state.quiz.questions[currentuQuestionId]
            this.setState({currentQuestionId: currentuQuestionId, currentQuestion: currentQuestion})
        } else {
            this.setState({showQuizEndAlert: true})
        }
    }

    markTheQuestion() {
        let markedQuestions = this.state.markedQuestions
        markedQuestions[this.state.currentQuestionId] = !markedQuestions[this.state.currentQuestionId]
        this.setState({markedQuestions: markedQuestions})
    }

    closeAlert() {
        this.setState({showQuizEndAlert: false})
    }

    calculateScore() {
        let score = 0
        this.state.quiz.questions.map((question, index) => {
            if (question.answer === this.state.answers[index]) {
                score += 1
            }
        })
        return score
    }

    render() {
        return (
            <div className="quiz-test">
                <QuizHeader detailes={{'title': this.state.quiz.title, 'time': this.state.timeLeft}}/>
                {!this.state.isQuizEnded ? <div className="quiz-body">
                    <div className="quiz-question">
                        <Question question={{question: this.state.currentQuestion, id: this.state.currentQuestionId, onSelectFn: this.onSelectOption, responses: this.state.answers}}/>
                        <div className="acion-buttons">
                            <div className="buttons-move">
                                <Button variant="primary" onClick={this.markTheQuestion}>{this.state.markedQuestions[this.state.currentQuestionId] ? "Un Mark" : "Mark"}</Button>
                                <Button variant="secondary" onClick={this.clearAnswer}>Clear Response</Button>
                                <Button variant="outline-primary" onClick={this.nextQuestion}>Next </Button>
                            </div>
                            <div className="buttons-end">
                                <Button variant="danger">End Test</Button>
                            </div>
                        </div>
                        {this.state.showQuizEndAlert && 
                        <div className="alert-box"><AlertBox detailes={{show: this.state.showQuizEndAlert, closeAlert: this.closeAlert, text: "You have visited all questions"}}/></div>}
                    </div>
                    <div className="question-palette">
                            <QuestionPalette questions={{answers: this.state.answers, markedQuestions: this.state.markedQuestions, onClickFn: this.setQuestion}}/>
                    </div>
                </div> : 
                <div className="quiz-end">
                    <h1>Your Score: {" " + this.calculateScore()}</h1>
                    <Link to="/home">Go To DashBoard</Link>
                </div>}
            </div>
        )
    }
}
export default Quiz