const { Tabs, Tab, FontIcon } = mui;

BottomNav = React.createClass({
  // This mixin makes the getMeteorData method work

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
    	<div className="bottomnav">
    	<Tabs 
    		initialSelectedIndex={1}
    		ref="bottomTabs"
    		> 
    		<Tab 
    			ref="tab1"
    			icon={<FontIcon className="fa fa-list"></FontIcon>} 
    			label= "LITTERATUR"
    			onActive={this._setLabelAppBar.bind(null, "LITTERATUR")}
    			/>
    		<Tab 
    			ref="tab2"
    			icon={<FontIcon className="fa fa-map"></FontIcon>}
    			label= "MAP"
    			onActive={this._setLabelAppBar.bind(null, "HOME")}
    			/>
    		<Tab 
    			ref="tab3"
    			icon={<FontIcon className="fa fa-user"></FontIcon>}
    			label= "USER"
    			onActive={this._setLabelAppBar.bind(null, "USER")}
    			/>
    	</Tabs>
    	</div>
    );
  }
});