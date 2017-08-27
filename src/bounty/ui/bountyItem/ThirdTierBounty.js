import React from 'react'
import { Link } from 'react-router'

const ThirdTierBounty = ({ data }) => {
  return(
    <Link to={`/bounty/${data.address}`}>
      <div className="thirdTierBounty">
        <div className="cover">
        </div>
        <div className="title"></div>
      </div>
    </Link>
  )
}

export default ThirdTierBounty
