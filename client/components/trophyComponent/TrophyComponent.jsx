TrophyComponent = React.createClass({
	getInitialState() {
	  return {
	    showModal: false
	  }
	},

	render() {
		return (
		<div>
			<TrophyItems showModal={this.props.showModal}/>
			<Modal showModal={this.state.showModal} />
		</div>
		);
	}
})

TrophyItems = React.createClass({
	render(){
		return(
			<div className='trophyContainer'>
				<TrophyItem
					trophyIcon='fa fa-check'
					trophyName='Nybegynner'
					trophyDescription='Lastet ned applikasjonen.'/>

				<TrophyItem
					trophyIcon='fa fa-fort-awesome'
					trophyName='Eventyrlysten'
					trophyDescription='Gått en eventyrløype.'/>

				<TrophyItem
					trophyIcon='fa fa-flag'
					trophyName='Lokal'
					trophyDescription='Gått tre løyper i samme område'/>

				<TrophyItem
					trophyIcon='fa fa-users'
					trophyName='Sosial'
					trophyDescription='Delt på facebook tre ganger.'/>

				<TrophyItem
					trophyIcon='fa fa-search'
					trophyName='Etterforsker'
					trophyDescription='Gjennomført en krimløype.'/>

				<TrophyItem
					trophyIcon='fa fa-facebook-square'
					trophyName='Facebook'
					trophyDescription='Delt på facebook.'/>

				<TrophyItem
					trophyIcon='fa fa-thumbs-up'
					trophyName='Aktiv'
					trophyDescription='Gått tre løyper.'/>

				<TrophyItem
					trophyIcon='fa fa-heart'
					trophyName='Poet'
					trophyDescription='Gjennomført en poesiløype.'/>

				<TrophyItem
					trophyIcon='fa fa-play-circle'
					trophyName='God lytter'
					trophyDescription='Lyttet til fem tekster.'/>

			</div>
		);
	}
})

TrophyItem = React.createClass({
	render(){
		return(
			<div className='trophyItem'>
				<div className='trophyIcon'>
					<i className={this.props.trophyIcon}></i>
				</div>
				<div className='trophyName' >{this.props.trophyName}</div>
			</div>
		);
	}
})

Modal = React.createClass({
	render(){
		let modalStyle = {
    	visibility: 'hidden'
  	}
  	if (!!this.props.showModal) {
    	modalStyle.visibility =  'visible'
  	}

		return(
			<div className='modalWrapper'>
				<div className='modalActiveDarken' style={modalStyle}>
					<div className='modalContainer'>
						<h1>{this.props.trophyName}</h1>
						<h2>{this.props.trophyDescription}</h2>
						<i className='fa fa-close closeModal'></i>
					</div>
				</div>
			</div>
		);
	}
})
