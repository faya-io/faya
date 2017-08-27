import React, { Component } from 'react'
import ThirdTierBounty from '../bountyItem/ThirdTierBounty'
import FirstBounty from '../bountyItem/FirstBounty'

class BountyCollection extends Component {
  constructor(props) {
    super(props)

    this.bountyData = {}
  }

  componentWillMount() {
    this.props.fetchBounty()
  }

  render() {
    const [
      firstBounty,
      secondBounty,
      thirdBounty,
    ] = props.activeBounty

    const thirdTierBounties = this.props.activeBounty.slice(3, 11)

    return(
      <div className="bountyCollectionContainer">

        {firstBounty ? <FirstBounty data={firstBounty} /> : null}

        <div className="secondaryBountyCollection">
          <div className="secondBounty"></div>
          <div className="thirdBounty"></div>
        </div>

        <div className="thirdTierBountyCollection">
          {
            thirdTierBounties.map(data =>
              <ThirdTierBounty bounty={data} />
            )
          }

        </div>
      </div>
    )
  }
}

export default BountyCollection
