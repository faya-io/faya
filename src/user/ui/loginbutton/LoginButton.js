import React from 'react'
import { Link } from 'react-router'

const LoginButton = ({ onLoginUserClick }) => {
  return(
    <div className="userProfile">
      <Link to="/signup" className="">Get Verified</Link>
    </div>
  )
}

export default LoginButton
