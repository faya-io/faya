import { connect } from 'react-redux'
import UserProfile from './UserProfile'

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return { }
}

const UserProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile)

export default UserProfileContainer
