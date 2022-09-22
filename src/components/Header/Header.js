import './Header.css'
import 'animate.css';
import logo from '../../assets/images/logo2.png'
import React from 'react'

const Header = () => {
  return (
    <div className="title">
      <h1>alexGrandolph</h1>
      {/* <h2>..art<span className="animate__animated animate__hinge">...dump</span></h2> */}
      {/* <h2>..art.<span className="dump">..dump</span></h2> */}
      <div className="logo-container">
        <img src={logo} className="logo" />

      </div>
    </div>
  )
}

export default Header