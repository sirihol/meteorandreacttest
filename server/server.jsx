//This method adds a profile-picture of a new user when the users uses  facebook.
Accounts.onCreateUser(function(options, user) {
  if (options.profile) {
    options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
    user.profile = options.profile;
  }
  Meteor.call('createIntialTrophies', user);
  return user;
});

if(Meteor.isServer){
  if (LitteraryTrailsGeoJSON.find().count() === 0) {
    console.log("Inserting GeoData");
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
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            10.401319563388824,
            63.4302711580824
          ]
        },
        "properties": {
          "title": "Intro",
          "marker-color": "#f2817f",
          "marker-size": "large",
          "marker-symbol": 1
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            10.395378470420837,
            63.43048830589045
          ]
        },
        "properties": {
          "title": "Drapet",
          "marker-color": "#f2817f",
          "marker-size": "large",
          "marker-symbol": 2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            10.396558642387388,
            63.4277252472258
          ]
        },
        "properties": {
          "title": "Doktor Fredriki",
          "marker-color": "#f2817f",
          "marker-size": "large",
          "marker-symbol": 3
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            10.394973456859589,
            63.427314904894665
          ]
        },
        "properties": {
          "title": "Domen",
          "marker-color": "#f2817f",
          "marker-size": "large",
          "marker-symbol": 4
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            10.393431186676024,
            63.42650740121977
          ]
        },
        "properties": {
          "title": "Avslutning",
          "marker-color": "#f2817f",
          "marker-size": "large",
          "marker-symbol": 5
        }
      },{
      "type": "Feature",
      "properties": {
        "stroke": "#e18884",
        "stroke-width": 6,
        "stroke-opacity": 1
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            10.40131688117981,
            63.430284354957465
          ],
          [
            10.395426750183105,
            63.43050030295894
          ],
          [
            10.395351648330688,
            63.4304091251124
          ],
          [
            10.395222902297974,
            63.43037073435337
          ],
          [
            10.395115613937378,
            63.43036593550486
          ],
          [
            10.395609140396116,
            63.42947333570737
          ],
          [
            10.396113395690918,
            63.428513519955295
          ],
          [
            10.396585464477539,
            63.42774084491778
          ],
          [
            10.395013689994812,
            63.42761366348933
          ],
          [
            10.394965410232544,
            63.427330502809994
          ],
          [
            10.394911766052244,
            63.42701614318537
          ],
          [
            10.394847393035889,
            63.426483403734174
          ],
          [
            10.393431186676024,
            63.42651220071447
          ]
        ]
      }
    },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            10.413451194763182,
            63.434372694163855
          ]
        },
        "properties": {
          "title": "Første stopp",
          "marker-color": "#47A2CC",
          "marker-size": "large",
          "marker-symbol": 1
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            10.40804386138916,
            63.43249174670518
          ]
        },
        "properties": {
          "title": "Andre stopp",
          "marker-color": "#47A2CC",
          "marker-size": "large",
          "marker-symbol": 2
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            10.402336120605469,
            63.42811518697868
          ]
        },
        "properties": {
          "title": "Tredje stopp",
          "marker-color": "#47A2CC",
          "marker-size": "large",
          "marker-symbol": 3
        }
      },
      {
      "type": "Feature",
      "properties": {
        "stroke": "#4092b3",
        "stroke-width": 6,
        "stroke-opacity": 1
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            10.413408279418944,
            63.434401483216426
          ],
          [
            10.412571430206299,
            63.433998433847535
          ],
          [
            10.412356853485107,
            63.43405601267597
          ],
          [
            10.411176681518555,
            63.433585782190605
          ],
          [
            10.410854816436768,
            63.433499412486945
          ],
          [
            10.410597324371338,
            63.43351860577693
          ],
          [
            10.40804386138916,
            63.4325301346224
          ],
          [
            10.407485961914062,
            63.43221343276708
          ],
          [
            10.407936573028564,
            63.43203108768661
          ],
          [
            10.40630578994751,
            63.43089860278133
          ],
          [
            10.405876636505127,
            63.43083142006693
          ],
          [
            10.405104160308838,
            63.430553090000664
          ],
          [
            10.404825210571289,
            63.43031314811837
          ],
          [
            10.40477693080902,
            63.43026755893359
          ],
          [
            10.404353141784668,
            63.42990044338078
          ],
          [
            10.403945446014404,
            63.42956451653168
          ],
          [
            10.403945446014404,
            63.4294493407054
          ],
          [
            10.403838157653809,
            63.42931496832296
          ],
          [
            10.403666496276854,
            63.42913740385111
          ],
          [
            10.403462648391722,
            63.42899343185
          ],
          [
            10.40330171585083,
            63.42888305282592
          ],
          [
            10.403183698654175,
            63.42874387866781
          ],
          [
            10.403119325637817,
            63.42861430211986
          ],
          [
            10.40305495262146,
            63.42841273743626
          ],
          [
            10.402958393096924,
            63.42816317919694
          ],
          [
            10.402883291244507,
            63.428062395445764
          ],
          [
            10.4025399684906,
            63.42809119083942
          ],
          [
            10.402368307113647,
            63.428129584652595
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
    //console.log("SERVER - feature added", feature);
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
        return "resources/profile.png";
      }
    }
    else {
      return "resources/profile.png";
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
      return "ANONYM BRUKER";
    }
  },

  //When a new user joins WordSpaces, then create initial trophies for the new user
    createIntialTrophies(user){
      let newUser = user._id;
      console.log("SERVER: USER: ", newUser);
      const trophies =[{
          title: "Nybegynner",
          icon: "fa fa-check",
          desc: 'Lastet ned appen.',
          activeTrophy: false,
          owner: newUser
      },

      {
          title: "Eventyrlysten",
          icon: "fa fa-fort-awesome",
          desc: 'Gått en eventyrløype.',
          activeTrophy: false,
          owner: newUser
      },

      {
          title: "Lokal",
          icon: "fa fa-flag",
          desc: 'Gått tre løyper i samme område',
          activeTrophy: false,
          owner: newUser
      },

      {
          title: "Sosial",
          icon: "fa fa-users",
          desc: 'Delt på facebook tre ganger.',
          activeTrophy: false,
          owner: newUser
      },

      {
          title: "Etterforsker",
          icon: "fa fa-search",
          desc: 'Gjennomført en krimløype.',
          activeTrophy: false,
          owner: newUser
      },

      {
          title: "Facebook",
          icon: "fa fa-facebook-square",
          desc: 'Delt på facebook.',
          activeTrophy: false,
          owner: newUser
      },

      {
          title: "Aktiv",
          icon: "fa fa-thumbs-up",
          desc: 'Gått tre løyper.',
          activeTrophy: false,
          owner: newUser
      },

      {
          title: "Poet",
          icon: "fa fa-heart",
          desc: 'Gjennomført en poesiløype.',
          activeTrophy: false,
          owner: newUser
      },

      {
          title: "God lytter",
          icon: "fa fa-play-circle",
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
      console.log("SERVER: trophy inserted", index)
    }
  },
});
