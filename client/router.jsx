const {Router, Route, Redirect} = ReactRouter;

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)();

function requireAuth(nextState, replaceState) {
  if (!Meteor.user())
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
}

if (Meteor.isClient) {
	Meteor.startup(function() {
	  	let AppRoutes = (
	    <Router history= {history}>
	      <Route component={App}>
					<Router component={MapPage} path="/" onEnter={requireAuth}/>
					<Route component={LiteraryTrail} path="literaryTrail/:id" onEnter={requireAuth}/>
					<Route component={LiteraryTrails} path="literaryTrails" onEnter={requireAuth}/>

	        		<Route component={AccountsUIWrapper} path="login" />
					<Route component={Profile} path="profile" onEnter={requireAuth} />
					<Route component={LiteraryTrailMap} path="literaryTrail/map/:id" onEnter={requireAuth} />
	      </Route>
	    </Router>
	  )
	  ReactDOM.render(AppRoutes, document.getElementById("render-target"));
	})
}