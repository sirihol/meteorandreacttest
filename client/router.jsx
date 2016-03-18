const {Router, Route, Rederict} = ReactRouter;

const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

if (Meteor.isClient) {
	Meteor.startup(function() {
	  	let AppRoutes = (
	    <Router history= {history}>
	      <Route component={App}>
	        <Router component={AccountsUIWrapper} path="/" />
	        <Router component={Mobile} path="/mobile" /> 
	      </Route>
	    </Router>
	  )
	  ReactDOM.render(AppRoutes, document.body)
	})
	
}

/*

	        <Router component={Login} path="login" />
*/