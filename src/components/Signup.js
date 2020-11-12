import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {matchUser, saveUser} from '../api/userApi'

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]: value})
    }

    handleSubmit(event) {
        event.preventDefault()
        saveUser(this.state)
        console.log(matchUser(this.state.email, this.state.password))
    }

    render() {
        return(
            <div className="signup">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="first-name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name="firstname" type="text" placeholder="First Name" onChange={this.handleChange} required/>
                    </Form.Group>
                    <Form.Group controlId="last-name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name="lastname" type="text" placeholder="Last Name" onChange={this.handleChange} required/>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter Email" onChange={this.handleChange} required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
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
export default Signup