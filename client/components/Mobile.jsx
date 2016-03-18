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
      AppBarTitleState: "WordSpaces",
      slideIndex: 2,
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

  _handleChange(value) {
    this.setState({
      slideIndex: value,  
    });
  },

  showComponent(){
    if(this.state.slideIndex == 0){
      return <LiteraryTrails />;
    }
    if(this.state.slideIndex == 1){
      return <MobileMap />;
    }
    if(this.state.slideIndex == 2){
      return <Profile />;
    }
  },

  render() {
    return (

      <div className="app">

        <AppBar
          title={this.state.AppBarTitleState}
          className="title"
          iconElementLeft={<i> </i>}
          style={{backgroundColor: Colors.deepOrange300}}/>

          {this.showComponent()}
          
        <BottomNav
          setAppBarTitle={this.setAppBarTitle}
          slideIndex={this.state.slideIndex}
          _handleChange={this._handleChange}
           />

      </div>
    );
  }
});
