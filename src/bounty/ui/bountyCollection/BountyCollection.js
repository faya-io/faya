import React, { Component } from 'react'
import ThirdTierBounty from '../bountyItem/ThirdTierBounty'
import FirstBounty from '../bountyItem/FirstBounty'
import SecondBounty from '../bountyItem/SecondBounty'
import './BountyCollection.scss'

class BountyCollection extends Component {
  componentWillMount() {
    this.props.fetchBounty()
  }

  render() {
    const [
      firstBountyData,
      secondBountyData,
      thirdBountyData,
    ] = this.props.bounties

    const thirdTierBounties = this.props.bounties.slice(3, 11)

    return(
      <div className="bountyCollectionContainer">

        {firstBountyData && <FirstBounty data={firstBountyData} />}

        {secondBountyData && (
          <div className="secondaryBountyCollection">
            <div className="secondaryItem">
              <SecondBounty data={secondBountyData} />
            </div>
            <div className="secondaryItem">
              <SecondBounty data={thirdBountyData} />
            </div>
          </div>
        )}


        <div className="thirdTierBountyCollection pure-g">
          {
            thirdTierBounties.map((data, index) =>
              <ThirdTierBounty key={index} data={data} />
            )
          }

        </div>

        <img className="fakeImg" src="https://ipfs.io/ipfs/QmX8UU6KiCyCmHPzs8hP5C9rKSyw4R4QqWanZ6SRaxmz2h" alt="" />
      </div>
    )
  }
}

export default BountyCollection
