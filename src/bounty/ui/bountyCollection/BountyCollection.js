import React, { Component } from 'react'

class BountyCollection extends Component {
  constructor(props) {
    super(props)

    const [
      firstBounty,
      secondBounty,
      thirdBounty,
    ] = props.activeBounty

    this.state = {
      firstBounty,
      secondBounty,
      thirdBounty,
      thirdTierBounties: props.activeBounty.slice(3, 11),
    }
  }

  render() {
    return(
      <div className="bountyCollectionContainer">
        <div className="firstBounty">
        </div>

        <div className="secondaryBountyCollection">
          <div className="secondBounty"></div>
          <div className="thirdBounty"></div>
        </div>

        <div className="thirdTierBountyCollection">

        </div>
        div
      </div>
    )
  }
}

export default BountyCollection
