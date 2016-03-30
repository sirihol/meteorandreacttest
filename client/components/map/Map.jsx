let firstRun = true;
var map = {};
var positions = {
    "type": "FeatureCollection",
    "features": []
}

var sourceTest = {
      "type": "geojson",
      "data": {
          "type": "FeatureCollection",
          "features": [{

              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [10.401319563388824,63.4302711580824]
              },
              "properties": {
                "marker-color": "#f2817f"
              }

            },{

              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [10.418454031921414, 63.424430265121174]
              },
              "properties": {
                  "title": "Mapbox SF",
                  "marker-symbol": "harbor"
              }
          }]
      }
  }



Meteor.startup(function() {
   Mapbox.load();
})


Tracker.autorun(function () {
  if (Mapbox.loaded()) {
    updateMap();
  }
})

function addMarkers(){
}

function createGeoJsonPoint(long, lat, name, symbol){
  var newFeauture = {
      "type": "Feature",
      "geometry": {
          "type": "Point",
          "coordinates": [long, lat]
      },
      "properties": {
        "title": name,
        "marker-size": "medium",
        "marker-symbol": "rocket"
      },
  };
  return newFeauture;

}

function updateMap(){
  if(Mapbox.loaded()){
      L.mapbox.accessToken = Meteor.settings.public.accessToken;
		  map = L.mapbox.map("map", "mapbox.streets");
  }
}

function test(){
  map.on('mousemove', function (e) {
      document.getElementById('debugpanel').innerHTML =
      JSON.stringify(e.point) + '<br />' +
      JSON.stringify(e.lngLat);
    });
}

Map = React.createClass({
  render() {
    // console.log("Rendrer MobileMap.jsx - nå rendrer() jeg siden");
    return(
      <div className="content-wrapper">
        <div id="map" className="mapbox"></div>
      </div>
    )
  },

  componentDidMount(nextProps,nextState){
    // console.log("MobileMap.jsx is mounted - jeg kalles når render() er ferdig");
    if(!firstRun){
      updateMap();
    }
    firstRun = false;
  },

  // console.log("MobileMap.jsx willUpdate - jeg skal kalles først");
  componentWillUpdate(nextProps,nextState){
  },

  // console.log("MobileMap.jsx didUpdate - jeg skal kalles sist");
  componentDidUpdate(nextProp, nextState){
  }
})

MapPage = React.createClass({
  render(){
    return(
      <div>
        <AppBar pageTitle="Kart" />
        <Map />
        <BottomNav />
      </div>
    )
  }
})
