TrophyComponent = React.createClass({

		renderTrophies() { 
 	   	
 		return this.props.trophies.map((trophy) => {
 			return <TrophyItem
 						key={trophy._id}
 						trophy={trophy} />
 		});
 	},

	render() {
		return (
		<div className='trophyWrapper'>
			<div className='trophyContainer'>
				{this.renderTrophies()}
			</div>
		</div>
		);
	}
})

TrophyItem = React.createClass({

	propTypes: {
 		trophy: React.PropTypes.object.isRequired,
  },

	getInitialState(){
    return{
        showTrophyDescription: false,
      }
  },

	showDescription(){
		this.setState({
			showTrophyDescription: !this.state.showTrophyDescription
		});
		console.log('Shows description: ' + this.state.showTrophyDescription);
	},

	render(){
		return(
			<div className='trophyItem' onClick={this.showDescription}>
				<div className='trophyIcon'>
					<i className={this.props.trophy.icon}></i>
				</div>
				<p>{this.props.trophy.title}</p>
			</div>
		);
	}
})

TrophyDescription = React.createClass({

	render(){
		return(
			<div className='trophyDescriptionWrapper'>
				<div className='trophyDescription'>
					{this.props.description}
				</div>
			</div>
		);
	}
})
