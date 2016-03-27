Profile = React.createClass({

	mixins: [ReactMeteorData],

	getMeteorData(){
		return {
			trophies: Trophies.find({}).fetch()
			// To use collection in HTML: trophies={this.data.trophies}
		}
	},

	render() {
		return (
		<div>
      <div className='appBarTitle'>MIN PROFIL</div>
			<AppBar />
			<ProfileDetails username='Siri Holtnæs' />
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
					<img className='user' alt='profile-pic' src='/resources/profilepic.jpg'/>
				</div>
				<div className='userName'>{this.props.username}</div>
			</div>
		);
	}
})
