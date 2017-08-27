import { connect } from 'react-redux'
import BountyCollection from './BountyCollection'
import { fetchBounty } from '../../bountyModule'

const mapStateToProps = (state, ownProps) => {
  return {
    bounties: state.bounties,
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
