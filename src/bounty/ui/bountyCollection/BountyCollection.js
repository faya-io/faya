import React, { Component } from 'react'

class BountyCollection extends Component {
  constructor(props) {
    super(props)

    
    
  }

  componentDidMount() {
    this.props.fetchBounty()
  }

  render() {
    const [
      firstBounty,
      secondBounty,
      thirdBounty,
    ] = this.props.bounties

    this.state = {
      firstBounty,
      secondBounty,
      thirdBounty,
      thirdTierBounties: this.props.bounties.slice(3, 11),
    }

    

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
