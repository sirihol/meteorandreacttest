Login = React.createClass({
	render(){
		return(
			<div className="login-container">
				<AppBar pageTitle='Velkommen' />
				<div className='login-wrapper'>
					<AccountsUIWrapper/>
				</div>
			</div>
		)
	}
})

AccountsUIWrapper = React.createClass({
	componentDidMount() {
		this.view = Blaze.render(Template.atForm, ReactDOM.findDOMNode(this.refs.app));
	},

	componentWillUnmount() {
		Blaze.remove(this.view);
	},

	render: function() {
		return (
			<span ref="app"/>
		);
	}

});
