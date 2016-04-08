import Data from './trailData';

const {Link} = ReactRouter;

LiteraryTrail = React.createClass({
  render(){

    const {params} = this.props;

    var currentTrail = {};

    Data.forEach((element) => {
      if(element.id === params.id){
        currentTrail = element;
      }
    });

    const trailPlaces = currentTrail.places.map(function(item, i){
        return (
            <LiteraryPlace
              key={i}
              place={item}
            />)
      }, this);

    return(
      <div className='literaryTrail'>
        <AppBarLiteraryTrail trail={ currentTrail } />
        <div className='literaryPlaces'>
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
