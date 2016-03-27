 TestLayout = React.createClass({

	render() {
		return (
		<div>
      <div className='appBarTitle'>FRANK</div>
			<AppBar />
			<ProfileDetails username='Siri Holtnæs' />
			<TrophyComponent />
			<BottomNav />
		</div>
		);
	}
})
