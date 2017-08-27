import React from 'react'
import { Link } from 'react-router'
import './ThirdBounty.scss'

const ThirdTierBounty = ({ data }) => {
  const style = {
    background: `url(${data.content.image}) no-repeat center center`,
    backgroundSize: 'cover',
  }

  return(
    <Link to={`/bounty/${data.address}`} className="thirdBountyLink pure-u-1-4">
      <div className="thirdBountyContainer">
        <div className="thirdBounty" style={style} >
          <div className="thirdBountyData pure-g">
            <div className="title pure-u-2-3">{data.content.title}</div>
            <div className="meta pure-u-1-3">
              <span>
                <i className="bounty-icon icon"></i>
                $ {data.reward}
              </span>
              <span>
                <i className="claim-icon icon"></i>
                {data.claims.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ThirdTierBounty
