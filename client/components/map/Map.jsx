let firstRun = true;
var map = {};
var positions = {
    "type": "FeatureCollection",
    "features": []
}

Meteor.startup(function() {
   Mapbox.load();
})


Tracker.autorun(function () {
  let handle = Meteor.subscribe("trailsjson");
  if (Mapbox.loaded() && handle.ready()) {
    let trailsdata = LitteraryTrailsGeoJSON.find().fetch();
    updateMap(trailsdata);
  }
});

function addMarkers(markers){
  // Get geoJson data from meteor collection...
    if(Mapbox.loaded()){
      console.log("Adding markers...");
      // L.mapbox.featureLayer(createGeoJsonPoint("10.401319563388824", "63.4302711580824", "test", "rocket")).addTo(map);
      L.mapbox.featureLayer(markers).addTo(map).set;
    }
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
        "marker-size": "large",
        "marker-symbol": ""
      },
  };
  return newFeauture;
}

function updateMap(trailsDataGeoJsonList){
  if(Mapbox.loaded()){
      L.mapbox.accessToken = Meteor.settings.public.accessToken;
		  map = L.mapbox.map("map", "mapbox.streets")
            .setView([63.427502,10.395151], 16);
      addMarkers(trailsDataGeoJsonList);
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
    //console.log("TrailsData", this.data.trailsData);
    return(
      <div className="content-wrapper">
        <div id="map" className="mapbox"></div>
      </div>
    )
  },

  componentDidMount(nextProps,nextState){
    // console.log("MobileMap.jsx is mounted - jeg kalles når render() er ferdig");
    if(!firstRun){
      //updateMap();
      let trailsdata = LitteraryTrailsGeoJSON.find().fetch();
      updateMap(trailsdata);
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
