import React from 'react'
import Logo from '../assets/logo.jpg'
import Signup from './Signup'
import {Nav} from 'react-bootstrap'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class Entry extends React.Component {
    render() {
        return (
            <Router>
                <div className="login-signup-page">
                    <header className="header">
                        <div className="logo">
                            <img src={Logo} />
                        </div>
                        <h1>Quiz App</h1>
                    </header>
                    <div className="login-signup">
                        <Nav justify variant="tabs" defaultActiveKey="/login">
                            <Nav.Item>
                                <Nav.Link href="/login">LogIn</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/signup">SignUp</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Switch>
                            <Route path="/signup" exact component={Signup}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
export default Entry