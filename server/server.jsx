//This method adds a profile-picture of a new user when the users uses  facebook.
Accounts.onCreateUser(function(options, user) {
  if (options.profile) {
    options.profile.picture = 'http://graph.facebook.com/' + user.services.facebook.id + '/picture/?type=large';
    user.profile = options.profile;
  }
  Meteor.call('createIntialTrophies', user);
  return user;
});

if(Meteor.isServer){
  if (LitteraryTrailsGeoJSON.find().count() === 0) {
    console.log('Inserting GeoData');
    addGeoJsonMarkers();
  }
  Meteor.publish('trailsjson', function() {
    return LitteraryTrailsGeoJSON.find();
  })
  Meteor.publish('trophies', function() {
    return Trophies.find({owner: this.userId});
  })
}

//Adding GEOJSON - markers to the collection: LitteraryTrailsGeoJSON
function addGeoJsonMarkers() {
  var sourceTest = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [
          10.400834083557127,
          63.43031314811837
          ]
        },
        'properties': {
          'title': 'Intro',
          'marker-color': '#f2817f',
          'marker-size': 'large',
          'marker-symbol': 1
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [
          10.397792458534239,
          63.43049790354564
          ]
        },
        'properties': {
          'title': 'Drapet',
          'marker-color': '#f2817f',
          'marker-size': 'large',
          'marker-symbol': 2
        }
      },
      {
      'type': 'Feature',
      'properties': {
        'stroke': '#f2817f',
        'stroke-width': 6,
        'stroke-opacity': 1
      },
      'geometry': {
        'type': 'LineString',
        'coordinates': [
          [
            10.40082335472107,
            63.43031794697571
          ],
          [
            10.39779782295227,
            63.43041392395366
          ],
          [
            10.39779782295227,
            63.43049550413216
          ]
        ]
      }
    },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [
            10.40006160736084,
            63.43515958452299
          ]
        },
        'properties': {
          'title': 'Første stopp',
          'marker-color': '#47A2CC',
          'marker-size': 'large',
          'marker-symbol': 1
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [
            10.397100448608398,
            63.43447825388189
          ]
        },
        'properties': {
          'title': 'Andre stopp',
          'marker-color': '#47A2CC',
          'marker-size': 'large',
          'marker-symbol': 2
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [
            10.398505926132202,
            63.43375852081677
          ]
        },
        'properties': {
          'title': 'Tredje stopp',
          'marker-color': '#47A2CC',
          'marker-size': 'large',
          'marker-symbol': 3
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [
            10.398838520050049,
            63.43333147065114
          ]
        },
        'properties': {
          'title': 'Tredje stopp',
          'marker-color': '#47A2CC',
          'marker-size': 'large',
          'marker-symbol': 4
        }
      },
      {
      'type': 'Feature',
      'properties': {
        'stroke': '#4092b3',
        'stroke-width': 6,
        'stroke-opacity': 1
      },
      'geometry': {
        'type': 'LineString',
        'coordinates': [
          [
            10.40006160736084,
            63.43515958452299
          ],
          [
            10.400083065032959,
            63.4349100850419
          ],
          [
            10.40004014968872,
            63.434804526915
          ],
          [
            10.399943590164185,
            63.43472295900509
          ],
          [
            10.397186279296875,
            63.43453103359506
          ],
          [
            10.397089719772337,
            63.43451663913747
          ],
          [
            10.397143363952637,
            63.43419516103359
          ],
          [
            10.398441553115845,
            63.43424794126831
          ],
          [
            10.398505926132202,
            63.433777713933175
          ],
          [
            10.398463010787964,
            63.43360497542271
          ],
          [
            10.398892164230347,
            63.43360497542271
          ],
          [
            10.39882779121399,
            63.43336026075007
          ]
        ]
      }
    }
    ]
  }

  for(index in sourceTest.features){
    var feature = sourceTest.features[index];
    LitteraryTrailsGeoJSON.insert({
      type: feature.type,
      geometry: feature.geometry,
      properties: feature.properties //_id of logged in user
    });
    //console.log('SERVER - feature added', feature);
  }

};


//Meteor methods for the server-side
Meteor.methods({
  getServiceProfileImage(){
    const user = Meteor.user();
    if (user.services){
      if (user.services.facebook){
        return user.profile.picture;
      }
      if (user.services.password){
        return 'resources/profile.png';
      }
    }
    else {
      return 'resources/profile.png';
    }
  },

  getServiceUsername(){
    const user = Meteor.user();
    if(user.services){
      if (user.services.facebook) {
        return user.services.facebook.name;
      }
      if(user.services.password){
        return user.emails[0].address;
      }
    }
    else{
      return 'ANONYM BRUKER';
    }
  },

  //When a new user joins WordSpaces, then create initial trophies for the new user
    createIntialTrophies(user){
      let newUser = user._id;
      console.log('SERVER: USER: ', newUser);
      const trophies =[{
          title: 'Nybegynner',
          icon: 'fa fa-check',
          desc: 'Lastet ned appen.',
          activeTrophy: true,
          owner: newUser
      },

      {
          title: 'Eventyrlysten',
          icon: 'fa fa-fort-awesome',
          desc: 'Gått en eventyrløype.',
          activeTrophy: false,
          owner: newUser
      },

      {
          title: 'Lokal',
          icon: 'fa fa-flag',
          desc: 'Gått tre løyper i samme område',
          activeTrophy: false,
          owner: newUser
      },

      {
          title: 'Sosial',
          icon: 'fa fa-users',
          desc: 'Delt på facebook tre ganger.',
          activeTrophy: false,
          owner: newUser
      },

      {
          title: 'Etterforsker',
          icon: 'fa fa-search',
          desc: 'Gjennomført en krimløype.',
          activeTrophy: false,
          owner: newUser
      },

      {
          title: 'Facebook',
          icon: 'fa fa-facebook-square',
          desc: 'Delt på facebook.',
          activeTrophy: false,
          owner: newUser
      },

      {
          title: 'Aktiv',
          icon: 'fa fa-thumbs-up',
          desc: 'Gått tre løyper.',
          activeTrophy: false,
          owner: newUser
      },

      {
          title: 'Poet',
          icon: 'fa fa-heart',
          desc: 'Gjennomført en poesiløype.',
          activeTrophy: false,
          owner: newUser
      },

      {
          title: 'God lytter',
          icon: 'fa fa-play-circle',
          desc: 'Lyttet til fem tekster',
          activeTrophy: false,
          owner: newUser
      },
  ];
    for (var index in trophies) {
      let trophy = trophies[index];
      Trophies.insert({
        title: trophy.title,
        icon: trophy.icon,
        desc: trophy.desc,
        activeTrophy: trophy.activeTrophy,
        owner: trophy.owner, //_id of logged in user
        createdAt: new Date(),
      });
      console.log('SERVER: trophy inserted', index)
    }
  },
});
