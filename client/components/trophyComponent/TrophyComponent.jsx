TrophyComponent = React.createClass({
	getInitialState(){
    return{
        showModalState: false
      }
  },

	showModal(){
		this.setState({
			showModalState: true
		});
	},

	render() {
		return (
		<div>
			<TrophyItems showModal={this.props.showModal}/>
			<Modal showModalState={this.props.showModalState} />
		</div>
		);
	}
})

TrophyItems = React.createClass({

	callback(){
		console.log("Callback blir kalt");
	},

	toggleModal(childName, some){
		console.log("Child's name: "+ some);
	},

	render(){

let items = [{
        icon: 'fa fa-check',
        name: 'Nybegynner',
        desc: 'Lastet ned appen.'
    }, {
        icon: 'fa fa-fort-awesome',
        name: 'Eventyrlysten',
        desc: 'Gått en eventyrløype.'
    }, {
        icon: 'fa fa-flag',
        name: 'Lokal',
        desc: 'Gått tre løyper i samme område'
    }, {
        icon: 'fa fa-users',
        name: 'Sosial',
        desc: 'Delt på facebook tre ganger.'
    }, {
        icon: 'fa fa-search',
        name: 'Etterforsker',
        desc: 'Gjennomført en krimløype.'
    }, {
        icon: 'fa fa-facebook-square',
        name: 'Facebook',
        desc: 'Delt på facebook.'
    }, {
        icon: 'fa fa-thumbs-up',
        name: 'Aktiv',
        desc: 'Gått tre løyper.'
    }, {
        icon: 'fa fa-heart',
        name: 'Poet',
        desc: 'Gjennomført en poesiløype.'
    }, {
        icon: 'fa fa-play-circle',
        name: 'God lytter',
        desc: 'Lyttet til fem tekster.'
    }]

			// <div className='trophyContainer'>
			// 	<TrophyItem
			// 		trophyIcon='fa fa-check'
			// 		trophyName='Nybegynner'
			// 		trophyDescription='Lastet ned appen.'
			// 		child={this.toggleModal}/>
			// </div>

		// Legg merke til den siste "this"-en (uttales dissen) Hvis ikke så skjønner den ikke konteksten?
		return(
			<div className='trophyContainer'>
				{items.map(function(item, i) {
            return (
							<TrophyItem
							key={i}
							trophyIcon={item.icon}
							trophyName={item.name}
							trophyDescription={item.desc}
							child={this.toggleModal.bind(this, i)}/>)
          }, this)}
			</div>
		);
	}
})

TrophyItem = React.createClass({

	 propTypes: {
	      child:   React.PropTypes.func
	  },

	test: function(){
    if (typeof this.props.child === 'function') {
        this.props.child(this.props.trophyName);
		}
	},


	render(){
		return(
			<div className='trophyItem' onClick={this.test} >
				<div className='trophyIcon'>
					<i className={this.props.trophyIcon}></i>
				</div>
				<div className='trophyName'>{this.props.trophyName}</div>
			</div>
		);
	}
})

Modal = React.createClass({
	render(){
		let modalStyle = {
			visibility: 'hidden'
		}

		if (this.props.showModalState) {
      modalStyle.visibility =  "visible"
    }

		return(
			<div className='modalWrapper'>
				<div className='modalActiveDarken' style = {modalStyle}>
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
