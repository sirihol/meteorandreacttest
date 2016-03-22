const {Router, Route, Rederict} = ReactRouter;

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
					<Router component={LiteraryTrail} path="literaryTrail/:id" onEnter={requireAuth}/>
					<Router component={LiteraryTrails} path="literaryTrails" onEnter={requireAuth}/>
					<Router component={Map} path="/" onEnter={requireAuth} />
	        		<Router component={AccountsUIWrapper} path="login" />
					<Router component={Profile} path="profile" onEnter={requireAuth} />
					<Router component={LiteraryTrailMap} path="literaryTrail/map/:id" onEnter={requireAuth} />
	      </Route>
	    </Router>
	  )
	  ReactDOM.render(AppRoutes, document.getElementById("render-target"));
	})
}
