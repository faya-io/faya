import React from 'react'
import { Link } from 'react-router'
import './FirstBounty.scss'

const FirstBounty = ({ data }) => {
  const style = {
    background: `url(${data.content.image}) no-repeat center center`,
    backgroundSize: 'cover',
  }

  return(
    <div className="firstBounty" style={style}>
      <div className="firstBountyData">
        <Link className="title" to={`/bounty/${data.address}`}>{data.content.title}</Link>
        <div className="meta">
          <span>
            <i className="bounty-icon icon"></i>
            $ {data.reward}
          </span>
          <span>
            <i className="claim-icon icon"></i>
            {data.claims.length}
          </span>
        </div>
        <Link to={`/claim/${data.address}`} className="claimBtn">Claim Your Bounty</Link>
      </div>
    </div>
  )
}

export default FirstBounty
