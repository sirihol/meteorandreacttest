Accounts.onCreateUser(function(options, user) {
    if (options.profile) {
        options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
        user.profile = options.profile;
    }
    return user;
});


Meteor.methods({
	getServiceProfileImage(currentUser){
	var user= Meteor.users.findOne(user._id);
    	if (user.services)
    	{
        	if (user.services.facebook){
            	return user.profile.picture;
        	}
    	}
    	else
    	{
        return "http://elishaterada.com/wp-content/themes/et/assets/img/elishaterada.jpg";
    	}
	}
});
