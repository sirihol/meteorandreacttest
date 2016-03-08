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
				<div className="trophy-item">
				<FloatingActionButton iconClassName="fa fa-trophy" disabled={false} />
				<p>Krim</p>
				</div>
				<div className="trophy-item">
				<FloatingActionButton iconClassName="fa fa-diamond" disabled={true} />
				<p>Kjærlughet</p>
				</div>
				<div className="trophy-item">
				<FloatingActionButton iconClassName="fa fa-diamond" disabled={true} />
				<p>Kjærlughet</p>
				</div>
				<div className="trophy-item">
				<FloatingActionButton iconClassName="fa fa-diamond" disabled={true} />
				<p>Kjærlughet</p>
				</div>
				<div className="trophy-item">
				<FloatingActionButton iconClassName="fa fa-diamond" disabled={true} />
				<p>Kjærlughet</p>
				</div>
				<div className="trophy-item">
				<FloatingActionButton iconClassName="fa fa-diamond" disabled={true} />
				<p>Kjærlughet</p>
				</div>
				<div className="trophy-item">
				<FloatingActionButton iconClassName="fa fa-diamond" disabled={true} />
				<p>Kjærlughet</p>
				</div>
				<div className="trophy-item">
				<FloatingActionButton iconClassName="fa fa-diamond" disabled={true} />
				<p>Kjærlughet</p>
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