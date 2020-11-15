import React from 'react'

class QuizHeader extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        return (
            <div className="quiz-header">
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}
export default QuizHeader