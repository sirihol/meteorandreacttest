const { IconButton, Avatar, FontIcon, FloatingActionButton, Divider, TextField} = mui;
const { MenuItem } = mui.Menus;
const Styles = mui.Styles;
const Colors = Styles.Colors;

Profile = React.createClass({

	childContextTypes : {
		muiTheme: React.PropTypes.object
	},

	getInitialState() {
		return {
			open: false,
		};
	},

	getChildContext() {
		return {
			muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
		};
	},

	render: function() {
		return (
		<div>
			<div className="profile-wrapper">
				<FloatingActionButton iconClassName="fa fa-trophy" />
				<div className="profile-banner" >
						<Avatar
							src="http://jackrussellterrierpet.com/wp-content/uploads/2013/03/Jack-Russell-Terrier-Crate-Training.jpg"
							size={92}
						/> 
				</div>
				<FloatingActionButton iconClassName="fa fa-wrench" />
				<TextField className="username-textfield" disabled={true} defaultValue="Old Normann" underlineShow={false}/>
				<Divider/>
			</div>
			<div className="user-content">
				<TrophyComponent />
			</div>

		</div>

			);
	}

});