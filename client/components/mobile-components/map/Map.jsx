let firstRun = false;

Meteor.startup(function() {
  Mapbox.load({
    gl: true
  });
  // Mapbox.load();
})

// var getUrl = function(lon, lat){
//   return `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lon},${lat}&key=${Meteor.settings.public.googleapis}`;
// }

Tracker.autorun(function () {
  if (Mapbox.loaded()) {
    // updateMap();
    updateMapboxGL();
  }
})

function updateMapboxGL(){
    if(Mapbox.loaded()) {
      mapboxgl.accessToken = Meteor.settings.public.accessToken;
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/siriholtnaes/cijj81zhp0078bolxxddj29nq',
        center: [10.395151,63.427502], // starting position
        zoom: 13
      });
  };
}

function updateMap(){
  if(Mapbox.loaded()){
    L.mapbox.accessToken = Meteor.settings.public.accessToken;
		var map = L.mapbox.map("map", "mapbox.streets");
  }
}

Map = React.createClass({
  render() {
    // console.log("Rendrer MobileMap.jsx - nå rendrer() jeg siden");
    return(
      <div>
        <AppBar pageTitle="Kart" />
        <div className="content-wrapper">
          <div id="map" className="mapbox"></div>
        </div>
        <BottomNav />
      </div>
    )
  },


  componentDidMount(nextProps,nextState){
    // console.log("MobileMap.jsx is mounted - jeg kalles når render() er ferdig");
      if(firstRun){
        updateMapboxGL();
      }
      firstRun = true;
  },

  componentWillUpdate(nextProps,nextState){
    // console.log("MobileMap.jsx willUpdate - jeg skal kalles først");
  },

  componentDidUpdate(nextProp, nextState){
    // console.log("MobileMap.jsx didUpdate - jeg skal kalles sist");
  }
})
