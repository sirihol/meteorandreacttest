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
      var geolocate = document.getElementById('geolocate');
      var myLayer = L.mapbox.featureLayer().addTo(map);

    geolocate.onclick = function (e) {
          e.preventDefault();
          e.stopPropagation();
          map.locate();
      };

      addMarkers(trailsDataGeoJsonList);
  }

  var directions = L.mapbox.directions({
      profile: 'mapbox.walking'
  });
  // var directionsLayer = L.mapbox.directions.layer(directions)
  //     .addTo(map);
  console.log(directions);
  console.log(L.mapbox.directions.layer(directions));

      // for (var i = 0; i < 5; i++) {
        // L.mapbox.directions.layer(directions);

      // }

  // var directionsRoutesControl = L.mapbox.directions.routesControl('routes', directions)
      // .addTo(map);

  map.on('locationfound', function(e) {
      myLayer.setGeoJSON({
              type: 'Feature',
              geometry: {
                  type: 'Point',
                  coordinates: [e.latlng.lng, e.latlng.lat]
              },
              properties: {
                  'title': 'Here I am!',

              }
          });
      // And hide the geolocation button
      // geolocate.parentNode.removeChild(geolocate);
  });
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
    if(firstRun){
      console.log("JEG KJLRER");
      $.getScript( "https://api.mapbox.com/mapbox.js/plugins/mapbox-directions.js/v0.4.0/mapbox.directions.js", function() {
      });

      $.getScript( "https://api.mapbox.com/mapbox.js/plugins/mapbox-directions.js/v0.4.0/mapbox.directions.css", function() {
      });
    }


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
       <a href='#' id='geolocate' className='ui-button'>Find me</a>

        <Map />
        <BottomNav />
      </div>
    )
  }
})
