Profile = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData(){
		return {
			trophies: Trophies.find({}).fetch(),
			// To use collection in HTML: trophies={this.data.trophies}
			user: Meteor.user()
		}
	},

	getServiceImage(currentUser){
		console.log("currentUser", currentUser.services[0] === "facebook");
		if (currentUser.services.facebook) {
				return currentUser.profile.picture; 
		}
		else {
        return "http://elishaterada.com/wp-content/themes/et/assets/img/elishaterada.jpg";
    	}
	},

	getUserName(currentUser){
		if(currentUser.services){
			if (currentUser.services.facebook) {
				return currentUser.services.facebook.name;
			}
		}
		else{
			return currentUser.emails[0].address;
		}
	},

	render() {
//		let currentUserImage  = this.getServiceImage(this.data.user);
		return (
		<div>
      <div className='appBarTitle'>
      MIN PROFIL
      <button onClick={AccountsTemplates.logout()}> Logout </button> 

      </div>
			<AppBar />
			<ProfileDetails username={this.data.user.services.facebook.name} profileimage={this.data.user.profile.picture}/>
			<TrophyComponent />
			<BottomNav />
		</div>
		);
	}
})

ProfileDetails = React.createClass({
	render(){
		return(
			<div className='profileDetailsContainer'>
				<div className='user'>
					<img className='user' alt="profile-pic" src={this.props.profileimage} />
				</div>
				{this.props.username}
			</div>
		);
	}
})
