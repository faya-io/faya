import React, { Component } from 'react'
import { Link } from 'react-router'
import './UserProfile.scss'

class UserProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showText: true,
    }
  }

  onMouseEnterHandler() {
    this.setState({
      showText: false,
    })
  }

  onMouseLeaveHandler() {
    this.setState({
      showText: true,
    })
  }

  render() {
    const el = this.state.showText ? (
      <p className="text">Welcome back! {this.props.user.name}</p>
    ) : (
      <Link className="link" to="/publish">+ Publish</Link>
    )

    return(
      <div className="userProfile"
        onMouseEnter={this.onMouseEnterHandler.bind(this)}
        onMouseLeave={this.onMouseLeaveHandler.bind(this)}
      >
        {el}
      </div>
    )
  }
}

export default UserProfile
