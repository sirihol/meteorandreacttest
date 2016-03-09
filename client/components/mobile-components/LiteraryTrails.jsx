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
		<Card>
      <CardHeader
        title="Blodig Byhistorie"
        subtitle="Jørgen Brekke"
        actAsExpander={true}
        showExpandableButton={true}/>

      <CardText expandable={true}>
        Tekst som sier noe om den litterære løypen som er skrevet av Jørgen Brekke.
      </CardText>
      <CardActions expandable={true}>
        <FlatButton label="Start løype"/>
      </CardActions>
    </Card>
    );
	}
});
