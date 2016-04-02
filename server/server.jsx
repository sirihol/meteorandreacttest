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
        },
        "properties": {}
      },
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
        return "http://elishaterada.com/wp-content/themes/et/assets/img/elishaterada.jpg";
      }
    }
    else {
      return "http://elishaterada.com/wp-content/themes/et/assets/img/elishaterada.jpg";
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
      icon : "fa fa-check",
      desc: 'Lastet ned appen.',
      owner: newUser},

      {title: "Eventyrlysten",
        icon : "fa fa-fort-awesome",
        desc: 'Gått en eventyrløype.',
        owner: newUser },

        {title: "Lokal",
          icon : "fa fa-flag",
          desc: 'Gått tre løyper i samme område',
          owner: newUser },

          {title: "Sosial",
            icon : "fa fa-users",
            desc: 'Delt på facebook tre ganger.',
            owner: newUser },

            {title: "Etterforsker",
              icon : "fa fa-search",
              desc: 'Gjennomført en krimløype.',
              owner: newUser },

              {title : "Facebook",
                icon : "fa fa-facebook-square",
                desc: 'Delt på facebook.',
                owner : newUser },

                {title: "Aktiv",
                  icon : "fa fa-thumbs-up",
                  desc: 'Gått tre løyper.',
                  owner: newUser },

                  {title: "Poet",
                    icon : "fa fa-heart",
                    desc: 'Gjennomført en poesiløype.',
                    owner: newUser },

                    {title: "God lytter",
                      icon : "fa fa-play-circle",
                      desc: 'Lyttet til fem tekster',
                      owner: newUser },
                    ];

                    for (var index in trophies) {
                      let trophy = trophies[index];
                      Trophies.insert({
                        title: trophy.title,
                        icon: trophy.icon,
                        owner: trophy.owner, //_id of logged in user
                        createdAt: new Date(),
                      });
                      console.log("SERVER: trophy inserted", index)
                    }
                  },

                });
