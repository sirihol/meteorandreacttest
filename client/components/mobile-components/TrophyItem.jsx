const { RaisedButton, FloatingActionButton, Dialog} = mui;
const { MenuItem } = mui.Menus;
const Styles = mui.Styles;
const Colors = Styles.Colors;

TrophyItem = React.createClass({

	propTypes: {
		trophy: React.PropTypes.object.isRequired,
	},

	childContextTypes : {
		muiTheme: React.PropTypes.object
	},

	render: function() {
		return (
				<div className="trophy-item">
				<FloatingActionButton iconClassName={this.props.trophy.icon} onTouchTap={this.props.handleDialogOpen} />
					<Dialog title={this.props.trophy.title} actions={this.props.actions} modal={true} open={this.props.dialogState}> 
						{this.props.trophy.description}
					</Dialog> 
				<p>{this.props.trophy.title}</p>
				</div>
		);
	}

});