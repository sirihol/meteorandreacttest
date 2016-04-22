import Data from './trailData';
import { Link } from 'react-router';

var trails = Data;

LiteraryTrails = React.createClass({
  render: function() {
    return (
      <div>
        <AppBar pageTitle="Litterære løyper" />
          <div className="content-container">
            <div className='literaryTrailCardContainer'>
              { trailContainers }
            </div>
          </div>
        <BottomNav />
      </div>
    );
  }
})

LiteraryTrailCard = React.createClass({
  getInitialState(){
    return{
        expandDetails: false
      }
  },

  expandDetailsToggle(){
    this.setState({
      expandDetails: !this.state.expandDetails
    });
  },

  render() {

    let {trailTitle, author, length, readBy, introText, id, places,genre, trailColor} = this.props.trail;

    let colorStyle = {
      backgroundColor: trailColor
    }

  	return (
      <div>
        <div className={this.state.expandDetails ? 'literaryTrailCardExpanded' : 'literaryTrailCard'} onClick={this.expandDetailsToggle}>
          <div className='trailDetails'>
            <h1>{trailTitle}</h1>
            <h3>{author}</h3>
            <p className={this.state.expandDetails ? 'fa fa-chevron-up' : 'fa fa-chevron-down'} onClick={this.expandDetailsToggle} />
            <div className='trailLengthAndColor'>
              <div className='circle' style={colorStyle}><p>1</p></div>
              <div className='line' style={colorStyle}></div>
              <div className='circle' style={colorStyle}><p>{places.length}</p></div>
            </div>
          </div>

            <div className='moreTrailDetails'>
              <p><b>Sjanger:</b> {genre}</p>
              <p><b>Lengde:</b> {length}</p>
              <p><b>Lest av:</b> {readBy}</p>
              <br/>
              <p>{introText}</p>
              <Link to={'/literaryTrail/' + id}>
                <button className='flatbutton'>Start litterær løype</button>
              </Link>
            </div>
        </div>
    </div>
    );
	}
})

const trailContainers = trails.map(function(item, i){
  return (
      <LiteraryTrailCard
        key={i}
        trail={item}
      />)
}, this);
