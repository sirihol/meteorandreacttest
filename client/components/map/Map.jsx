let firstRun = false;

var map = {};
var counter = 0;
var temp = {
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
                  "coordinates": [10.387597899413436, 63.436177872401856]
              },
              "properties": {
                  "title": "Mapbox DC",
                  "marker-symbol": "monument"
              }
          }, {
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

  map.on('mousemove', function (e) {
      document.getElementById('debugpanel').innerHTML =
      JSON.stringify(e.point) + '<br />' +
      JSON.stringify(e.lngLat);
    });

    map.on('source.change', function(res){
    })

    map.on('click', function(data) {
      var e = data && data.originalEvent;
      let point = createGeoJsonPoint(data.lngLat.lng, data.lngLat.lat, "New point!", counter++);
      temp.features.push(point);
      console.log(temp);
      map.getSource('markers').setData(temp);
    });

    map.on('style.load', function(){
      map.addSource("markers", sourceTest);

      map.addLayer({
          "id": "markers",
          "type": "symbol",
          "source": "markers",
          "layout": {
              "icon-image": "{marker-symbol}-15",
              "text-field": "{title}",
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 0.6],
              "text-anchor": "top"
          }
      });
    })
  }
})

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
  // sourceTest.data.features.push(newFeauture);

}

function updateMapboxGL(){
    if(Mapbox.loaded()) {
      mapboxgl.accessToken = Meteor.settings.public.accessToken;
      map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/siriholtnaes/cijj81zhp0078bolxxddj29nq',
        center: [10.395151,63.427502], // starting position
        zoom: 13
      });
      // return map;
  };
}

function updateMap(){
  if(Mapbox.loaded()){
    L.mapbox.accessToken = Meteor.settings.public.accessToken;
		var map = L.mapbox.map("map", "mapbox.streets");
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
        <pre id='debugpanel'></pre>
        <div id="map" className="mapbox"></div>
      </div>
    )
  },

  // console.log("MobileMap.jsx is mounted - jeg kalles når render() er ferdig");
  componentDidMount(nextProps,nextState){

      if(firstRun){         // The first time we have to wait for things to load...
        updateMapboxGL();
      }
      firstRun = true;
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
