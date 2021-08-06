import React from 'react'
import Signup from './Signup'
import {Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Login from './Login'
import Header from './Header'

class Entry extends React.Component {
    constructor(props) {
        super(props)
        if (this.props.location.pathname === '/') {
            this.props.history.push("/QuizApp/login")
        }
        let key = this.props.location.pathname === '/QuizApp/login' ? '1' : '2'    
        this.state = {
            key: key
        }
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(key) {
        this.setState({key: key})
    }

    some = () => {
        if (this.state.key === '1') {
            return <Login history={this.props.history}/>
        } else {
            return <Signup history={this.props.history}/>
        }
    }

    render() {
        return (
            <div className="login-signup-page">
                <Header />
                <div className="login-signup">
                    <Nav justify variant="tabs" activeKey={this.state.key} onSelect={this.handleSelect}>
                        <Nav.Item id="login">
                            <Nav.Link as={Link} eventKey="1" to="/QuizApp/login"> LogIn </Nav.Link>
                        </Nav.Item>
                        <Nav.Item id="signup">
                            <Nav.Link as={Link} eventKey="2" to="/QuizApp/signup"> SignUp </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    {this.some()}
                </div>
            </div>
        )
    }
}
export default Entry