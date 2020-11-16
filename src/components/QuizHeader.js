import React from 'react'

class QuizHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="quiz-header">
                <h1>{this.props.detailes.title}</h1>
                <h1 className="timer">{this.props.detailes.time.hours + " : " + this.props.detailes.time.minutes + " : " + this.props.detailes.time.seconds}</h1>
            </div>
        )
    }
}
export default QuizHeader