import React from 'react'
import QuizHeader from './QuizHeader'
import {getQuiz} from '../api/quizApi'

class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quiz: {},
            timeLeft: {}
        }
        this.timer = 0
        this.convertMinsToTime = this.convertMinsToTime.bind(this)
        this.countDown = this.countDown.bind(this)
    }

    componentDidMount() {
        let quiz = getQuiz(parseInt(this.props.match.params.id))[0]
        let time = this.convertMinsToTime(quiz.time)

        this.setState({quiz: quiz, timeLeft: time})

        this.timer = setInterval(this.countDown, 1000)
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

    render() {
        return (
            <div className="quiz-test">
                <QuizHeader detailes={{'title': this.state.quiz.title, 'time': this.state.timeLeft}}/>
            </div>
        )
    }
}
export default Quiz