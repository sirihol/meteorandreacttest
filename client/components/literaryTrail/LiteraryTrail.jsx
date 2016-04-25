import initialData from './trailData';
// import { Trophies } from '../../../lib/collections.js'
import { Link } from 'react-router';

let allDone = false;


LiteraryTrail = React.createClass({
	mixins: [ReactMeteorData],

	getInitialState(){
		return{
			data: initialData
	}},

  getMeteorData(){
    let handle =  Meteor.subscribe("trophies");
    return {
      // To use collection in HTML: trophies={this.data.trophies}
      trophies: Trophies.find().fetch(),
    }
  },
  render(){
    const {params} = this.props;
    let currentTrail = {};

		const self = this;


		// Sjekk ant. godkjente og evt gi trophy
    const completedPlaces = (id, value) => {
			// (`Oppdaterer listen over ferdige steder (${id} - ${value})`);

			// currentTrail is now just a referance to the element in this.state.data
      currentTrail.places[id].initiallyCompleted = value;

      let isFinished = 0;

      currentTrail.places.forEach((item) => {
        if(item.initiallyCompleted == true){
          isFinished++;
        }
      })

      if(isFinished >= currentTrail.places.length){
        allDone = true;
        Trophies.update(
					"ZhbFshudLyW6nqW8a",
					{$set:
						{ activeTrophy: true},
        	}
				);
        this.forceUpdate();
      }else{
        Trophies.update("ZhbFshudLyW6nqW8a", {
            $set: { activeTrophy: false},
        });
        allDone = false;
        this.forceUpdate();
      }
    };

		// Setter current trail
    this.state.data.forEach((element) => {
      if(element.id === params.id){
        currentTrail = element;
      }
    });

		// Lag html elementer for hvert sted (trail place)
    const trailPlaces = currentTrail.places.map(function(item, i){
        return (
            <LiteraryPlace
              key={i}
              id={i}
              place={item}
              checkCompleted={(id, val) => completedPlaces(id, val)}
            />)
      }, this);

			// Lag html-element for sluttskjermen
      const finished = (
        <div className='literaryPlacesCompleted'>
          <p>Ferdig med { currentTrail.trailTitle }!</p>
					<strong>Nye trofeer: </strong>
					<div className='activeTrophyItem'>
						<div className='trophyIcon'>
							<i className='fa fa-search'></i>
						</div>
						<div className='trophyName'>Etterforsker</div>
					</div>
          <button className="btn-default fb-blue">Del på Facebook</button>
        </div>
      )

    return(
      <div className='literaryTrail'>
        <AppBarLiteraryTrail trail={ currentTrail } />
        <div className='literaryPlaces'>
          { allDone && finished }
          { trailPlaces }
        </div>
    </div>
    );
  }
})


AppBarLiteraryTrail = React.createClass({
  render(){

    return(
      <div className='appBarLiteraryTrail'>
        <Link to={'/literaryTrails'}><p id='chevron-left-icon'className='fa fa-chevron-left' /></Link>
        <Link to={'/literaryTrails'}><p className='previouseSite'>Litterære løyper</p></Link>
        <div className='mapButton'>
          <Link to={'/literaryTrail/map/' + this.props.trail.id}><i id='map-icon' className='fa fa-map'></i></Link>
          <p>Kart</p>
        </div>
        <div className='title'>
          <h2>{ this.props.trail.trailTitle }</h2>
          <i>{ this.props.trail.author }</i>
        </div>
      </div>
    );
  }
})


LiteraryTrailMap = React.createClass({
  render(){

    const {params} = this.props;
    var currentTrail = {};

    Data.forEach((element) => {
      if(element.id === params.id){
        currentTrail = element;
      }
    });

    return(
      <div>
        <div className='appBarLiteraryTrail mapTrail'>
          <Link to={'/literaryTrails'}><p id='chevron-left-icon'className='fa fa-chevron-left' /></Link>
          <Link to={'/literaryTrails'}><p className='previouseSite'>Litterære løyper</p></Link>
          <div className='mapButton'>
            <Link to={'/literaryTrail/' + params.id}><i id='map-icon' className='fa fa-list'></i></Link>
            <p>Liste</p>
          </div>
            <div className='title'>
              <h2>{ currentTrail.trailTitle }</h2>
              <i>{ currentTrail.author }</i>
            </div>
        </div>
        <Map className='trailMap'/>
      </div>
    );
  }
})




SocialComponent = React.createClass({
  getInitialState(){
    return{
        showSocial: false
      }
  },

  render(){
    return(
      <div className='social'>
        <div className={this.state.showSocial ? 'social-buttons' : 'hidden-social-buttons'}>

          <div className='facebook-share'>
            <h2>Del på facebook</h2>
            <i className='fa fa-facebook-square'></i>
          </div>

          <div className='feedback'>
            <h2>La forfatteren vite hva du syns</h2>
            <textarea></textarea>
          </div>
        </div>
      </div>
    );
  }
})
