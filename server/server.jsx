Accounts.onCreateUser(function(options, user) {
    if (options.profile) {
        options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        user.profile = options.profile;
    }
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
	}
});
