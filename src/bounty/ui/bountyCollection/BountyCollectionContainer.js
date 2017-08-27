import { connect } from 'react-redux'
import BountyCollection from './BountyCollection'
import { fetchBounty } from '../../bountyModule'

const mapStateToProps = (state, ownProps) => {
  return {
    activeBounty: state.bounty.activeBounty,
    pastBounty: state.bounty.pastBounty,
  }
}

const mapDispatchToProps = {
  fetchBounty,
}

const BountyCollectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BountyCollection)

export default BountyCollectionContainer
