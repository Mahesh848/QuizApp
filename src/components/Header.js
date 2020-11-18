import React from 'react'
import { Button } from 'react-bootstrap'
import Logo from '../assets/logo.jpg'

function Header(props) {
     return (
        <header className="header">
            <div className="logo-name">
                <div className="logo">
                    <img src={Logo} alt="logo.jpg"/>
                </div>
                <h1>Quiz App</h1>
            </div>
            {localStorage.getItem("user") !== null && <div className="logout">
                <Button variant="outline-dark" onClick={() => {props.logout()}}>Log out</Button>
            </div>}
        </header>
     )
 }
 export default Header