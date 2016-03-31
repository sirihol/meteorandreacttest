let firstRun = true;
var map = {};
var positions = {
    "type": "FeatureCollection",
    "features": []
}

var sourceTest = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            5.6689453125,
            60.141504734793386
          ],
          [
            6.96533203125,
            60.403001945865476
          ],
          [
            4.96533203125,
            244.40300194586547
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Intro",
        "marker-color": "#f2817f",
        "marker-size": "large",
        "marker-symbol": 1
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          10.401319563388824,
          63.4302711580824
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Drapet",
        "marker-color": "#f2817f",
        "marker-size": "large",
        "marker-symbol": 2
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          10.395378470420837,
          63.43048830589045
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Doktor Fredriki",
        "marker-color": "#f2817f",
        "marker-size": "large",
        "marker-symbol": 3
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          10.396558642387388,
          63.4277252472258
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Domen",
        "marker-color": "#f2817f",
        "marker-size": "large",
        "marker-symbol": 4
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          10.394973456859589,
          63.427314904894665
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "title": "Avslutning",
        "marker-color": "#f2817f",
        "marker-size": "large",
        "marker-symbol": 5
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          10.393431186676024,
          63.42650740121977
        ]
      }
    }
  ]
}



Meteor.startup(function() {
   Mapbox.load();
})


Tracker.autorun(function () {
  if (Mapbox.loaded()) {
    updateMap();
  }
});

function addMarkers(){

  // Get geoJson data from meteor collection...

    if(Mapbox.loaded()){
      console.log("Adding markers...");
      // L.mapbox.featureLayer(createGeoJsonPoint("10.401319563388824", "63.4302711580824", "test", "rocket")).addTo(map);
      L.mapbox.featureLayer(sourceTest).addTo(map);
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

function updateMap(){
  if(Mapbox.loaded()){
      L.mapbox.accessToken = Meteor.settings.public.accessToken;
		  map = L.mapbox.map("map", "mapbox.streets")
            .setView([63.427502,10.395151], 16);
      addMarkers();
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
