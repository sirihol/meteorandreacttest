
import { Router, Route, browserHistory } from 'react-router';


function requireAuth(nextState, replace) {
  if (!Meteor.user())
    replace('/login')
}

if (Meteor.isClient) {
	Meteor.startup(function() {
	  	let AppRoutes = (
      <Router history={browserHistory}>
	      <Route component={App}>
					<Router component={MapPage} path="/" />
					<Route component={LiteraryTrail} path="literaryTrail/:id" onEnter={requireAuth}/>
					<Route component={LiteraryTrails} path="literaryTrails" onEnter={requireAuth}/>
	        <Route component={Login} path="login" />
					<Route component={Profile} path="profile" onEnter={requireAuth} />
					<Route component={LiteraryTrailMap} path="literaryTrail/map/:id" onEnter={requireAuth} />
	      </Route>
	    </Router>
	  )
	  ReactDOM.render(AppRoutes, document.getElementById("render-target"));
	})
}
