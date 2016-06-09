let firstRun = true;
var map = {};
var positions = {
    'type': 'FeatureCollection',
    'features': []
}

Meteor.startup(function() {
   Mapbox.load();
})


Tracker.autorun(function () {
  let handle = Meteor.subscribe('trailsjson');
  if (Mapbox.loaded() && handle.ready()) {
    let trailsdata = LitteraryTrailsGeoJSON.find().fetch();
    updateMap(trailsdata);
  }
});

function addMarkers(markers){
  // Get geoJson data from meteor collection...
    if(Mapbox.loaded()){
      console.log('Adding markers...');
      L.mapbox.featureLayer(markers).addTo(map).set;
    }
}

function updateMap(trailsDataGeoJsonList){
  if(Mapbox.loaded()){
      L.mapbox.accessToken = Meteor.settings.public.accessToken;
		  map = L.mapbox.map('map', 'mapbox.streets')
            .setView([63.430502,10.395151], 14);

      var userPositionLayer = L.mapbox.featureLayer().addTo(map);

      map.locate();

      addMarkers(trailsDataGeoJsonList);
  }

  map.on('locationfound', function(e) {
    userPositionLayer.setGeoJSON({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [e.latlng.lng, e.latlng.lat]
            },
            properties: {
                'title': 'Here I am!'

            }
        });
    });
}

Map = React.createClass({
  render() {
    return(
      <div className='content-wrapper'>
        <div id='map' className='mapbox'></div>
      </div>
    )
  },

  componentDidMount(nextProps,nextState){
    // console.log('MobileMap.jsx is mounted - jeg kalles når render() er ferdig');

    if(firstRun){
      // $.getScript( 'https://api.mapbox.com/mapbox.js/plugins/mapbox-directions.js/v0.4.0/mapbox.directions.js', function() {
      // });
      //
      // $.getScript( 'https://api.mapbox.com/mapbox.js/plugins/mapbox-directions.js/v0.4.0/mapbox.directions.css', function() {
      // });
    }

    if(!firstRun){
      //updateMap();
      let trailsdata = LitteraryTrailsGeoJSON.find().fetch();
      updateMap(trailsdata);
    }
    firstRun = false;
  },

  // console.log('MobileMap.jsx willUpdate - jeg skal kalles først');
  componentWillUpdate(nextProps,nextState){
  },

  // console.log('MobileMap.jsx didUpdate - jeg skal kalles sist');
  componentDidUpdate(nextProp, nextState){
  }
})

MapPage = React.createClass({
  render(){
    return(
      <div>
        <AppBar pageTitle='Kart' />
        <Map />
        <BottomNav />
      </div>
    )
  }
})
