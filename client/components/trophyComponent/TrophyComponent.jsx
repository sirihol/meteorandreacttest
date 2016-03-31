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

	renderTrophies() { 
	   	
 		return this.props.trophies.map((trophy) => {
 			return <TrophyItem
 						key={trophy._id}
 						trophy={trophy} />
 		});
 	},

	render() {
		return (
		<div>
			<TrophyItems showModal={this.props.showModal} trophies={this.props.trophies}/>
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
				{this.props.trophies.map(function(trophy, i) {
	        	    return (
							<TrophyItem
							key={trophy._id}
	 						trophy={trophy}
							child={this.toggleModal.bind(this, i)}/>)
    		    	  }, this)}
			</div>
		);
	}
})

TrophyItem = React.createClass({

	propTypes: {
 		trophy: React.PropTypes.object.isRequired,
    	child:   React.PropTypes.func
  },

	getInitialState(){
    return{
        showTrophyDescription: false,
      }
  },

	test: function(){
    if (typeof this.props.child === 'function') {
        this.props.child(this.props.trophy.title);
		}
	},

	render(){
		return(
			<div className='trophyItem' onClick={this.test} >
				<div className='trophyIcon'>
					<i className={this.props.trophy.icon}></i>
				</div>
				<div className='trophyName'>{this.props.trophy.title}</div>
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
