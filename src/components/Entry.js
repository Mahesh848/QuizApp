import React from 'react'
import Logo from '../assets/logo.jpg'
import Signup from './Signup'
import {Nav} from 'react-bootstrap'
import {Switch, Route, Link} from 'react-router-dom'
import Login from './Login'

class Entry extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            key: '1'
        }
        this.handleSelect = this.handleSelect.bind(this)
    }

    handleSelect(key) {
        this.setState({key: key})
    }

    render() {
        return (
            <div className="login-signup-page">
                <header className="header">
                    <div className="logo">
                        <img src={Logo} alt="logo.jpg"/>
                    </div>
                    <h1>Quiz App</h1>
                </header>
                <div className="login-signup">
                    <Nav justify variant="tabs" activeKey={this.state.key} onSelect={this.handleSelect}>
                        <Nav.Item id="login">
                            <Nav.Link as={Link} eventKey="1" to="/login"> LogIn </Nav.Link>
                        </Nav.Item>
                        <Nav.Item id="signup">
                            <Nav.Link as={Link} eventKey="2" to="/signup"> SignUp </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Switch>
                        <Route path="/signup" exact component={Signup}/>
                        <Route path="/login" exact component={Login}/>
                    </Switch>
                </div>
            </div>
        )
    }
}
export default Entry