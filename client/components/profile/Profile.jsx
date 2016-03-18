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
			<ProfileDetails username='Bruker Brukernavn' />
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
					<img className='user' alt="profile-pic" src="http://elishaterada.com/wp-content/themes/et/assets/img/elishaterada.jpg" />
				</div>
				{this.props.username}
			</div>
		);
	}
})
