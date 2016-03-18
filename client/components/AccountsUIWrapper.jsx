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