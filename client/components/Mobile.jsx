const { AppBar, IconButton, IconMenu, LeftNav } = mui;
const { MenuItem } = mui.Menus;
const { NavigationMoreVert } = mui.SvgIcons;
const Styles = mui.Styles;
const Colors = Styles.Colors;
 
Mobile = React.createClass({
  childContextTypes : {
    muiTheme: React.PropTypes.object
  },
 
  getInitialState() {
    return {
      open: false,
      AppBarTitleState: "LOL"
    };
  },
 
  getChildContext() {
    return {
      muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
    };
  },
 
  handleToggle() {
    this.setState({open: ! this.state.open});
  },

  setAppBarTitle(titleState){
    this.setState({
      AppBarTitleState: titleState
    });
  },
 
  render() {
    return (
      <div className="app">
        <LeftNav
          docked={false}
          open={this.state.open}
          onRequestChange={open => this.setState({open})} 
        >
          <MenuItem linkButton={true} href="/home" primaryText="Home" index={1} onTouchTap={this.handleToggle}/>
          <MenuItem linkButton={true} href="/feature" primaryText="Feature" index={2} onTouchTap={this.handleToggle}/>
          <MenuItem linkButton={true} href="/contact" primaryText="Contact" index={3} onTouchTap={this.handleToggle}/>
        </LeftNav>
        <AppBar
          title={this.state.AppBarTitleState}
          className="title"
          onLeftIconButtonTouchTap={this.handleToggle}
          style={{backgroundColor: Colors.deepOrange300}}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <NavigationMoreVert />
                </IconButton>
              }
            >
              <MenuItem primaryText="Help" index={1} />
              <MenuItem primaryText="Sign out" index={2} />
            </IconMenu>
          }
        />
          <Profile />
          <BottomNav
            setAppBarTitle={this.setAppBarTitle} /> 
      </div>
    );
  }
});