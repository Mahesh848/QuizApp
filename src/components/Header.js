import React from 'react'
import Logo from '../assets/logo.jpg'

function Header() {
     return (
        <header className="header">
            <div className="logo">
                <img src={Logo} alt="logo.jpg"/>
            </div>
            <h1>Quiz App</h1>
        </header>
     )
 }
 export default Header           