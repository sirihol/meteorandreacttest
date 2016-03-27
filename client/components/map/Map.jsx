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
  var map = updateMapboxGL();

  map.on('mousemove', function (e) {
      document.getElementById('debugpanel').innerHTML =
      JSON.stringify(e.point) + '<br />' +
      JSON.stringify(e.lngLat);
    });

    map.on('click', function(data) {
      var e = data && data.originalEvent;
      console.log('got click ' + (e ? 'button = ' + e.button : ''));
      console.log(data);
      layerTest();
    });
  }
})

function layerTest(){
  map.addSource("markers", {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-77.03238901390978, 38.913188059745586]
                },
                "properties": {
                    "title": "Mapbox DC",
                    "marker-symbol": "monument"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [-122.414, 37.776]
                },
                "properties": {
                    "title": "Mapbox SF",
                    "marker-symbol": "harbor"
                }
            }]
        }
    });

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
}

function updateMapboxGL(){
    if(Mapbox.loaded()) {
      mapboxgl.accessToken = Meteor.settings.public.accessToken;
      var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/siriholtnaes/cijj81zhp0078bolxxddj29nq',
        center: [10.395151,63.427502], // starting position
        zoom: 13
      });
      return map;
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

MapPage = React.createClass({
  render(){
    return(
      <div>
        <div className='appBarTitle'>KART</div>
        <AppBar />
        <Map />
        <BottomNav />
      </div>
    )
  }
})
