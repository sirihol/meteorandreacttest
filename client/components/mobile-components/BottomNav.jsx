const { Tabs, Tab, FontIcon } = mui;

const styles = {
  slide: {
    height: 100,

  }
}

BottomNav = React.createClass({
  
  getInitialState() {
    let ThemeManager = mui.Styles.ThemeManager

    let DefaultRawTheme = mui.Styles.LightRawTheme

    return {
      hovered: false,
      isKeyboardFocused: false,
      touch: false,
      muiTheme: this.context.muiTheme ? this.context.muiTheme : ThemeManager.getMuiTheme(DefaultRawTheme),
    };
  },
  // Loads items from the Tasks collection and puts them on this.data.tasks

  contextTypes: {
    muiTheme: React.PropTypes.object,
  },

  //for passing default theme context to children
  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext () {
    return {
      muiTheme: this.state.muiTheme,
    };
  },

  _setLabelAppBar(title){
	this.props.setAppBarTitle(title);

  },

  render: function() {
    return (
      <div > 
        <div className="bottomnav">
          <Tabs
            onChange={this.props._handleChange}
            value={this.props.slideIndex}
            >
            <Tab
              icon={<FontIcon className="fa fa-list"></FontIcon>}
              onActive={this._setLabelAppBar.bind(null, "LITTERÆRE STEDER")}
              value={0}
              />
            <Tab
              icon={<FontIcon className="fa fa-map"></FontIcon>}
              onActive={this._setLabelAppBar.bind(null, "KART")}
              value={1}
              />
            <Tab
              icon={<FontIcon className="fa fa-user"></FontIcon>}
              onActive={this._setLabelAppBar.bind(null, "MIN PROFIL")}
              value={2}
              />
          </Tabs>
        </div>
      </div>
    );
  }
});

/*        <div>
          <SwipeableViews
            index={this.props.slideIndex}
            onChangeIndex={this.props._handleChange} 
            children={<LiteraryTrails />, <MobileMap />, <Profile />}
            >
            <div style={Object.assign({}, styles.slide)}>
              <LiteraryTrails />
            </div>

              <MobileMap />

              <Profile /> 
          </SwipeableViews>
          </div>
          */
