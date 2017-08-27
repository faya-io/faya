import React from 'react'
import { Link } from 'react-router'
import './SecondBounty.scss'

const SecondBounty = ({ data }) => {
  const style = {
    background: `url(${data.content.image}) no-repeat center center`,
    backgroundSize: 'cover',
  }

  return(
    <Link className="secondBountyLink" to={`/bounty/${data.address}`}>
      <div className="secondBounty" style={style}>
        <div className="secondBountyData">
          <div className="title" >{data.content.title}</div>
          <div className="meta">
            <span>
              <i className="bounty-icon icon black"></i>
              $ {data.reward}
            </span>
            <span>
              <i className="claim-icon icon black"></i>
              {data.claims.length}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default SecondBounty
