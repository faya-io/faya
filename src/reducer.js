import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import bountyReducer from './bounty/bountyReducer'
import userReducer from './user/userReducer'
import web3Reducer from './util/web3/web3Reducer'

const reducer = combineReducers({
  routing: routerReducer,
  bounties: bountyReducer,
  user: userReducer,
  web3: web3Reducer,
})

export default reducer
