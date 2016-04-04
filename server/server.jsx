Accounts.onCreateUser(function(options, user) {
    if (options.profile) {
        options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        user.profile = options.profile;
    }
    Meteor.call('createIntialTrophies', user);
    return user;
});


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
