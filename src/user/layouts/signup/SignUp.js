import React, { Component } from 'react'
import SignUpFormContainer from '../../ui/signupform/SignUpFormContainer'

class SignUp extends Component {
  render() {
    return(
      <main className="signupContainer container black">
        <div className="pure-g signupFormContainer">
          <div className="pure-u-1-1">
            <h1>Get Verified</h1>
            <p>We've got your wallet information, simply input your name and your account is verified!</p>
            <SignUpFormContainer />
          </div>
        </div>
      </main>
    )
  }
}

export default SignUp
