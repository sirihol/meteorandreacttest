const { RaisedButton, FloatingActionButton, Divider, FlatButton} = mui;
const { MenuItem } = mui.Menus;
const Styles = mui.Styles;
const Colors = Styles.Colors;

TrophyComponent = React.createClass({

		childContextTypes : {
		muiTheme: React.PropTypes.object
	},

	getInitialState() {
		return {
			dialogState: false,
		};
	},

	getChildContext() {
		return {
			muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
		};
	},

	handleDialogOpen() {
		this.setState({ dialogState: true});
	},

	handleDialogClose() {
		this.setState({ dialogState: false});
	},

	renderTrophies() { 
	   	const actions = [
    		<RaisedButton
    			label = "OK"
    			secondary = {true}
    			onTouchTap={this.handleDialogClose} 
    		/>,
    	];
		return this.props.trophies.map((trophy) => {
				return <TrophyItem 
							key={trophy._id}  
							trophy={trophy} 
							actions={actions} 
							handleDialogOpen={this.handleDialogOpen}
							handleDialogClose={this.handleDialogClose}
							dialogState={this.state.dialogState}
						/>

		});
	},

	render: function() {
		let trophyStyle = {
      		visibility: "hidden",
      		opacity: "0"
    	}
    	if (!!this.props.trophyState) {
     		trophyStyle.visibility =  "visible"
      		trophyStyle.opacity = "1"
    	}

		return (
			<div className="trophy-container" style={trophyStyle}>
				{this.renderTrophies()}
			</div>
		);
	}
});