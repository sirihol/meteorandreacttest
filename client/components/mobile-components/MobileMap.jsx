const { IconButton, FontIcon} = mui;
const { MenuItem } = mui.Menus;
const Styles = mui.Styles;
const Colors = Styles.Colors;

Meteor.startup(function() {
  Mapbox.load({
    gl: true
  });
});

var getUrl = function(lon, lat){
  return `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lon},${lat}&key=${Meteor.settings.public.googleapis}`;
}

var xhr = new XMLHttpRequest();
var map = {};

Tracker.autorun(function () {
  if (Mapbox.loaded()) {
    mapboxgl.accessToken = Meteor.settings.public.accessToken;
    map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/siriholtnaes/cijj81zhp0078bolxxddj29nq',
      center: [10.395151,63.427502], // starting position
      zoom: 13
    });
  }
});

MobileMap = React.createClass({

  childContextTypes : {
		muiTheme: React.PropTypes.object
	},

	getChildContext() {
		return {
			muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
		};
	},

  render() {
    return(
      <div>
        <div className="content-wrapper">
          <div onClick={this.handleClick} id="map" className="mapbox"></div>
        </div>
      </div>
    )
  }
})
