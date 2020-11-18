import React from 'react'

class QuizHeader extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="quiz-header">
                <h1>{this.props.detailes.title + " Quiz"}</h1>
                <div className="name-timer">
                    <h4>{localStorage.getItem("user")}</h4>
                    {this.props.detailes.time && <h3 className="timer">{this.props.detailes.time.hours + " : " + this.props.detailes.time.minutes + " : " + this.props.detailes.time.seconds}</h3>}
                </div>
            </div>
        )
    }
}
export default QuizHeader