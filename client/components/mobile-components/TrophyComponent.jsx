const { IconButton, Avatar, FontIcon, FloatingActionButton, Divider, TextField} = mui;
const { MenuItem } = mui.Menus;
const Styles = mui.Styles;
const Colors = Styles.Colors;

TrophyComponent = React.createClass({

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
			<div className="trophy-setup">
				<div className="trophy-item">
				<FloatingActionButton iconClassName="fa fa-trophy" disabled={true} />
				<TextField className="username-textfield" disabled={true} defaultValue="Krim" underlineShow={false}/>
				</div>
				<div className="trophy-item"> 
				<FloatingActionButton iconClassName="fa fa-diamond" disabled={true} />
				</div>

			</div>
		);
	}

});
			/*<FloatingActionButton iconClassName="fa fa-trophy" disabled={true}/>
				<FloatingActionButton iconClassName="fa fa-trophy" disabled={true}/>
				<FloatingActionButton iconClassName="fa fa-trophy" disabled={true}/>
				<FloatingActionButton iconClassName="fa fa-trophy" disabled={true}/>
				<br />
				<FloatingActionButton iconClassName="fa fa-star" disabled={true}/>
				<FloatingActionButton iconClassName="fa fa-star" disabled={true}/>
				<FloatingActionButton iconClassName="fa fa-star" disabled={true}/>
				<FloatingActionButton iconClassName="fa fa-star" disabled={true}/>
				<FloatingActionButton iconClassName="fa fa-diamond" disabled={true}/>*/