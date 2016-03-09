const { IconButton, FontIcon, FlatButton, Card, CardExampleWithoutAvatar, CardHeader, CardText, CardActions} = mui;
const { MenuItem } = mui.Menus;
const Styles = mui.Styles;
const Colors = Styles.Colors;

LiteraryTrailsList = React.createClass({
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
       <LiteraryTrails title="Blodig byhistorie" author="Jørgen Brekke" text="Tekst"></LiteraryTrails>
       <LiteraryTrails title="En annen løype" author="En annen forfatter" text="OG en annen tekst"></LiteraryTrails>
      </div>
    );
  }
})

LiteraryTrails = React.createClass({
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

LiteraryTrail = React.createClass({
  render:function(){
    return(
      <div className="literaryTrail">
        <LiteraryPlace placeTitle="Kongens gate" placeText="Tekst"> </LiteraryPlace>
        <LiteraryPlace placeTitle="Munkegata" placeText="En annen tekst"> </LiteraryPlace>
      </div>
    );
  }
})

LiteraryPlace = React.createClass({
  render:function(){
    return(
      <Card>
          <CardHeader
             title = {this.props.placeTitle}
          />
        <CardText expandable={true}>
            {this.props.placeText}
        </CardText>
    </Card>
    );
  }
})
