const { IconButton, FontIcon, FlatButton, Card, CardExampleWithoutAvatar, CardHeader, CardText, CardActions} = mui;
const { MenuItem } = mui.Menus;
const Styles = mui.Styles;
const Colors = Styles.Colors;

LiteraryTrails = React.createClass({
  childContextTypes : {
		muiTheme: React.PropTypes.object
	},

	getChildContext() {
		return {
			muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
		};
	},

  render: function() {
    return (
      <div className="literaryTrails">
       <LiteraryTrail title="Blodig byhistorie" author="Jørgen Brekke" text="Tekst"></LiteraryTrail>
       <LiteraryTrail title="Blodig byhistorie 2" author="Jørgen Brekke 2" text="En annen tekst"></LiteraryTrail>
      </div>
    );
  }
})

LiteraryTrail = React.createClass({
  render: function() {
		return (
		<Card>
      <CardHeader
        title={this.props.title}
        subtitle={this.props.author}
        actAsExpander={true}
        showExpandableButton={true}/>

      <CardText expandable={true}>
        {this.props.text}
      </CardText>
      <CardActions expandable={true}>
        <FlatButton label="Start løype"/>
      </CardActions>
    </Card>
    );
	}
})
