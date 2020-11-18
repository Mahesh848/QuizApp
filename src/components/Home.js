import React from 'react'
import QuizTemplate from './QuizTemplate'
import {getQuizzes} from '../api/quizApi'
import Header from './Header'

class Home extends React.Component {
    constructor(props) {
        super(props)
        if (localStorage.getItem("user") === null) {
            this.props.history.push("/login");
        }
        this.state = {
            quizzes: getQuizzes()
        }
        this.handleClick = this.handleClick.bind(this)
        this.logout = this.logout.bind(this)
    }

    handleClick = (id) => {
        this.props.history.push(`/quiz/${id}`)
    }

    logout = () => {
        localStorage.clear()
        this.props.history.push('/login')
    }

    render() {
        return(
            <div className="home-page">
                <Header logout={this.logout}/>
                <div className="quiz-container">
                    {
                        this.state.quizzes.map(quiz => (
                            <QuizTemplate key={quiz.id} quiz={quiz} clickFn={this.handleClick}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default Home