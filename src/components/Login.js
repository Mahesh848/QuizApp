import React from 'react'
import {Form, Button, Alert} from 'react-bootstrap'
import {matchUser} from '../api/userApi'

class Login extends React.Component {
    constructor(props) {
        super(props)
        if (localStorage.getItem("user") !== null) {
            this.props.history.push("/QuizApp/home");
        }
        this.state = {
            email: '',
            password: '',
            areWrongCreds: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
       const {name, value} = event.target
       this.setState({[name]: value})
    }

    handleSubmit(event) {
        event.preventDefault()
        if (matchUser(this.state.email, this.state.password) === true) {
            localStorage.setItem("user", this.state.email)
            this.props.history.push("/QuizApp/home");
        } else {
            this.setState({areWrongCreds: true})
        }
    }

    render() {
        return(
            <div className="login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter Email" onChange={this.handleChange} required/>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" onChange={this.handleChange} required/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                {this.state.areWrongCreds && <Alert className="alert-message" variant="danger">Wrong Credintials</Alert>}
            </div>
        )
    }
}
export default Login