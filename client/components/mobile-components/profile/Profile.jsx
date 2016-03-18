const { IconButton, Avatar, FloatingActionButton} = mui;

Profile = React.createClass({
	render() {
		return (
		<div>
      <div className='appBarTitle'>MIN PROFIL</div>
			<TopNavigation />
			<ProfileDetails username='Bruker Brukernavn' />
			<TrophyComponent />
			<BottomNavigation />
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
