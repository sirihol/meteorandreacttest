const {Link} = ReactRouter;

LiteraryTrails = React.createClass({
  render: function() {
    return (
      <div>
        <div className='appBarTitle'>LITTERÆRE LØYPER</div>
        <TopNavigation />
        <div className='literaryTrailCardContainer'>

         <LiteraryTrailCard
           id='blodigbyhistorie'
           title='Blodig byhistorie'
           author='Jørgen Brekke'
           length='3km'
           numLiteraryPlaces='5'
           readBy='Jørgen Brekke'
           text='Kort intro til den litterære løypen'>

         </LiteraryTrailCard>

         <LiteraryTrailCard
          id='enannenhistorie'
          title='En annen historie'
          author='Forfatter #1, Forfatter #2'
          length='5km'
          numLiteraryPlaces='7'
          readBy='Forfatter #2'
          text='En intro til historien'>
         </LiteraryTrailCard>

        </div>
        <BottomNavigation />
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

  render: function() {
		return (
      <div>
        <div className='literaryTrailCard'>
          <div className='trailDetails'>
            <h1>{this.props.title}</h1>
            <h2>{this.props.author}</h2>
            <p className={this.state.expandDetails ? 'fa fa-chevron-up' : 'fa fa-chevron-down'} onClick={this.expandDetailsToggle} />
          </div>
        </div>

        <div className='moreTrailDetailsContainer'>
          <div className='moreTrailDetails'>
            <p>Lengde: {this.props.length}</p>
            <p>Antall litterære steder: {this.props.numLiteraryPlaces}</p>
            <p>Lest av: {this.props.readBy}</p> <b/>
            <p>{this.props.text}</p>
            <Link to={'literaryTrail/' + this.props.id}>
              <div className='flatbutton'>Start litterær løype</div>
            </Link>
          </div>
        </div>
    </div>
    );
	}
})

LiteraryTrail = React.createClass({
  render:function(){
    return(
      <div className='literaryTrail'>
        <AppBarLiteraryTrail />
        <div className='literaryPlaces'>
          <LiteraryPlace placeTitle='Intro' placeAdress='Kongens gate 1'> </LiteraryPlace>
          <LiteraryPlace placeTitle='Drapet' placeAdress='Torvet'> </LiteraryPlace>
          <LiteraryPlace placeTitle='Doktor Fredriki' placeAdress='Munkegata 2'> </LiteraryPlace>
          <LiteraryPlace placeTitle='Domen' placeAdress='Kongsgårdsgata1'> </LiteraryPlace>
          <LiteraryPlace placeTitle='Avslutning' placeAdress='Prinsens gate 9'> </LiteraryPlace>
        </div>
    </div>
    );
  }
})

AppBarLiteraryTrail = React.createClass({
  render:function(){
    return(
      <div className='appBarLiteraryTrail'>
        <Link to={'literaryTrails'}><p id='chevron-left-icon'className='fa fa-chevron-left' /></Link>
        <Link to={'literaryTrails'}><p className='previouseSite'>Litterære løyper</p></Link>
        <Link to={'literaryTrail/map/' + this.props.id}><p id='map-icon' className='fa fa-map' /></Link>
        <div className='title'>
          <h2>Blodig byhistorie</h2>
          <i>Jørgen Brekke</i>
          <br />
          <div className='flatbutton'>Start</div>
        </div>
      </div>
    );
  }
})



LiteraryPlace = React.createClass({
  getInitialState(){
    return{
        playTrack: false,
        showText: false
      }
  },

  togglePlay(){
    this.setState({
        playTrack: !this.state.playTrack
      });
  },

  toggleShowText(){
      this.setState({
        showText: !this.state.showText
      });
  },

  render:function(){
    return(
      <div className='literaryPlaceCard'>
        <div className='primarytext'>
          <h1>{this.props.placeTitle}</h1>
          <p id='map-marker' className='fa fa-map-marker'/><p id='address'>{this.props.placeAdress}</p>
          <p id='book' className={this.state.showText ? 'fa fa-times' : 'fa fa-book'} onClick={this.toggleShowText} />
          <p id='play-circle' className={this.state.playTrack ? 'fa fa-pause-circle-o' : 'fa fa-play-circle-o'} onClick={this.togglePlay}/>
      </div>
    </div>
    );
  }
})

LiteraryTrailMap = React.createClass({
  render:function(){
    return(
      <div>
        <h1>Kart over løypen</h1>
        <MobileMap koord="{dataelement}"/>
      </div>
    );
  }
})
