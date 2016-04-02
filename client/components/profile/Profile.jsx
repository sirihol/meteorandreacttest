Profile = React.createClass({
	mixins: [ReactMeteorData],

	getMeteorData(){
		let handle =  Meteor.subscribe("trophies");
		return {
			// To use collection in HTML: trophies={this.data.trophies}
			trophies: Trophies.find().fetch(),
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

			<AppBar pageTitle="Min profil"/>
			<div className="content-container">
      			<button onClick={this.handleLogout}> Logout </button>
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
