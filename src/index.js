import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { UserIsAuthenticated, UserIsNotAuthenticated } from './util/wrappers.js'
import getWeb3 from './util/web3/getWeb3'
import { loginUser } from './user/ui/loginbutton/LoginButtonActions'

// Layouts
import App from './App'
import Home from './layouts/home/Home'
import SignUp from './user/layouts/signup/SignUp'
import PublishBounty from './bounty/layouts/publishBounty/PublishBounty'
import ViewBounty from './bounty/layouts/viewBounty/ViewBounty'
import Claim from './bounty/layouts/Claim'

// Redux Store
import store from './store'

// Initialize react-router-redux.
const history = syncHistoryWithStore(browserHistory, store)

// Initialize web3 and set in Redux.
getWeb3
.then(results => {
  console.log('Web3 initialized!')
  loginUser()(store.dispatch)
})
.catch(() => {
  console.log('Error in web3 initialization.')
})

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="signup" component={UserIsNotAuthenticated(SignUp)} />
          <Route path="publish" component={UserIsAuthenticated(PublishBounty)} />
          <Route path="bounty/:id" component={UserIsAuthenticated(ViewBounty)} />
          <Route path="claim/:id" component={UserIsAuthenticated(Claim)} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
