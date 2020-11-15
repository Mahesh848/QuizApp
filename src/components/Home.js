import React from 'react'
import Quiz from './Quiz'
import {getQuizzes} from '../api/quizApi'
import Header from './Header'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quizzes: getQuizzes()
        }
    }

    render() {
        return(
            <div className="home-page">
                <Header />
                <div className="quiz-container">
                    {
                        this.state.quizzes.map(quiz => (
                            <Quiz key={quiz.id} quiz={quiz}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}
export default Home