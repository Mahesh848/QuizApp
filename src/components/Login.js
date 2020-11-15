import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {matchUser} from '../api/userApi'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        console.log(this.props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
       const {name, value} = event.target
       this.setState({[name]: value})
    }

    handleSubmit(event) {
        event.preventDefault()
        if (matchUser(this.state.email, this.state.password)) {
            this.props.history.push("/home");
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
            </div>
        )
    }
}
export default Login