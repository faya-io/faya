import React from 'react'
import { Link } from 'react-router'

const LoginButton = ({ onLoginUserClick }) => {
  return(
    <Link to="/signup" className="pure-menu-link">Get Verified</Link>
  )
}

export default LoginButton
