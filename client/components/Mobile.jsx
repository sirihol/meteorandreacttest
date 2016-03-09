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

        <AppBar
          title={this.state.AppBarTitleState}
          className="title"
          iconElementLeft={<i> </i>}
          style={{backgroundColor: Colors.deepOrange300}}/>

        <LiteraryTrails />

        <BottomNav
          setAppBarTitle={this.setAppBarTitle} />

      </div>
    );
  }
});
