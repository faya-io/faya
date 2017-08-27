import React, { Component } from 'react'
import { Link } from 'react-router'

class ViewBounty extends Component {
  render() {
    return(
      <main className="container ViewBountyContainer">
        <img src="/images/bounty.png" style={ {width: '100%'} } alt="" />

        <Link className="ghostClaim" to="/claim/0x7eaac15feef6bcc9b10849644b6f8d8eeace2250"></Link>
      </main>
    )
  }
}

export default ViewBounty
