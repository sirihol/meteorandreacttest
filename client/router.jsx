const {Router, Route, Rederict} = ReactRouter;

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

if (Meteor.isClient) {
	Meteor.startup(function() {
		Session.setDefault('count', 0);
	  	let AppRoutes = (
	    <Router history= {history}>
	      <Route component={App}>
	        <Router component={Mobile} path="/" />
	      </Route>
	    </Router>
	  )
	  ReactDOM.render(AppRoutes, document.body)
	})
	
}

/*

	        <Router component={Login} path="login" />
*/