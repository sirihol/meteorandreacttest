Profile = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){
		return {
			user: Meteor.user(),
			// To use collection in HTML: trophies={this.data.trophies}
			trophies: Trophies.find({owner: Meteor.userId()}).fetch(),
		}
	},

	getInitialState: function() {
		return {
			serviceImage: "null",
			serviceUsername: "null",
		};
	},

	componentWillMount() {
		Meteor.call('getServiceProfileImage', (error, result) => {
			if (error) {
				console.log("Error: ", error);
			}
			else{
  				this.setState({serviceImage: result});
			}
		});

		Meteor.call('getServiceUsername', (error, username) => {
			if (error) {
				console.log("Error", error);
			} else {
				this.setState({serviceUsername: username});
			}
		});
	},

	handleLogout(){
		AccountsTemplates.logout();
	},

	render() {
		return (
		<div>
      		<button onClick={this.handleLogout}> Logout </button> 

			<AppBar pageTitle="Min profil"/>
			<div className="content-container">
				<ProfileDetails username={this.state.serviceUsername} profileimage={this.state.serviceImage}/>
				<TrophyComponent trophies={this.data.trophies}/>
			</div>
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
				<div className='userName'>{this.props.username}</div>
			</div>
		);
	}
})