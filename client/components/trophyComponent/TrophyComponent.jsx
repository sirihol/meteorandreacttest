TrophyComponent = React.createClass({

	getInitialState(){
    return{
        showModalState: false,
				title: "null",
				desc: "null",
      }
  },

	showModal(title, desc){
		this.setState({
			showModalState: true,
			title: title,
			desc: desc
		});
	},

	hideModal(e) {
		//e.preventDefault();
    this.setState({
      showModalState: false
    });
 	},

	render() {
		let { showModalState, title, desc} = this.state;
		return (
		<div>
			<TrophyItems showModal={this.showModal} trophies={this.props.trophies}/>
			<Modal showModalState={showModalState} title={title} desc={desc} hideModal={this.hideModal}/>
		</div>
		);
	}
})

TrophyItems = React.createClass({

	callback(){
		console.log("Callback blir kalt");
	},

	toggleModal(childName, some){
		console.log("TROPHYITEMS-component: Child's name: "+ some);
	},

	render(){

		return(
			<div className='trophyContainer'>
				{this.props.trophies.map(function(trophy, i) {
	        	    return (
							<TrophyItem
							key={trophy._id}
	 						trophy={trophy}
							showModal={this.props.showModal}
							child={this.toggleModal.bind(this, i)}/>)
    		    	  }, this)}
			</div>
		);
	}
})

TrophyItem = React.createClass({

	propTypes: {
 		trophy: React.PropTypes.object.isRequired,
    child:  React.PropTypes.func
  },

	test: function(){
    if (typeof this.props.child === 'function') {
        this.props.child(this.props.trophy.title);
		}
	},

	render(){
		let {
    	trophy
    } = this.props;

		return(
			<div className='trophyItem' onClick={this.props.showModal.bind(null, trophy.title, trophy.desc)} >
				<div className={trophy.activeTrophy ? 'activeTrophyIcon' : 'inactiveTrophyIcon'}>
					<i className={trophy.icon}></i>
				</div>
				<div className='trophyName'>{trophy.title}</div>
			</div>
		);
	}
})

Modal = React.createClass({

	render(){
		let modalStyle = {
			visibility: 'hidden',
			opacity: "0"
		}

	if (!!this.props.showModalState) {
      modalStyle.visibility =  "visible",
			modalStyle.opacity = "1"
    }

		return(
			<div className='modalWrapper'>
				<div className='modalActiveDarken' style = {modalStyle}>
					<div className='modalContainer'>
						<div className="closeModal" onClick={this.props.hideModal}><i className='fa fa-close closeModal'></i></div>
						<div className='modaltext'>
							<h1>{this.props.title}</h1>
							<h2>{this.props.desc}</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
})
