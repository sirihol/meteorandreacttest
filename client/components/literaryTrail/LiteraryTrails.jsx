const {Link} = ReactRouter;

LiteraryTrails = React.createClass({
  render: function() {
    return (
      <div>
        <AppBar pageTitle="Litterære løyper" />
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

  render: function() {
		return (
      <div>
        <div className={this.state.expandDetails ? 'literaryTrailCardExpanded' : 'literaryTrailCard'} onClick={this.expandDetailsToggle}>
          <div className='trailDetails'>
            <h1>{this.props.title}</h1>
            <h2>{this.props.author}</h2>
            <p className={this.state.expandDetails ? 'fa fa-chevron-up' : 'fa fa-chevron-down'} onClick={this.expandDetailsToggle} />
          </div>
          <div className='moreTrailDetailsContainer'>
            <div className='moreTrailDetails'>
              <p><b>Antall litterære steder:</b> {this.props.numLiteraryPlaces}</p>
              <p><b>Lengde:</b> {this.props.length}</p>
              <p><b>Lest av:</b> {this.props.readBy}</p>
              <br/>
              <p>{this.props.text}</p>
              <Link to={'literaryTrail/' + this.props.id}>
                <div className='flatbutton'>Start litterær løype</div>
              </Link>
            </div>
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
          <LiteraryPlace placeTitle='Domen' placeAdress='Kongsgårdsgata 1'> </LiteraryPlace>
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
        <Link to={'literaryTrail/' + this.props.id + '/map'}><p id='map-icon' className='fa fa-map' /></Link>
        <div className='title'>
          <h2>Blodig byhistorie</h2>
          <i>Jørgen Brekke</i>
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
      <div className={this.state.showText ? 'literaryPlaceCardExpanded' : 'literaryPlaceCard'}>
        <div className='primarytext'>
          <h1>{this.props.placeTitle}</h1>
          <i className='fa fa-map-marker mapMarker'></i><p id='address'>{this.props.placeAdress}</p>
          <i className={this.state.showText ? 'book fa fa-times' : 'book fa fa-book'} onClick={this.toggleShowText}></i>
          <i className={this.state.playTrack ? 'fa fa-pause-circle-o playCircle' : 'fa fa-play-circle-o playCircle'} onClick={this.togglePlay}></i>

        <div className='textArea'>
            Bayer lot Ingrid gli ut av armene og ned på sengen.
            Så bøyde han seg og dro frem kisten fra under sengen og fant pistolen sin.
            Han ladet den med ferskt krutt. Så stormet han ned trappen.
            Da han løp forbi kontoret, registrerte han at Torp hadde samlet mennene fra gaten der inne.
            All fornuft tilsa at han burde ta med seg disse mennene i jakten,
            men fornuft – fornuft var ikke på noen måte en del av ham lenger.
            Tankene hans var som stumme skygger. Gud ville ha gått seg vill i Nils Bayers raseri,
            men én ting var Bayer forvisset om: Gud fantes ikke. Han kom ned til Kongens gate.
            Han reagerte med frykt på å gå her blant alle disse menneskene, ville gitt alt han hadde,
            for ensomhet, men likevel gikk han mot torget der kirkegjengerne var flest.
          </div>
        </div>
    </div>
    );
  }
})

LiteraryTrailMap = React.createClass({
  render:function(){
    return(
      <div>
        <div className='appBarLiteraryTrail mapTrail'>
          <Link to={'literaryTrail/blodigbyhistorie'}><p id='chevron-left-icon'className='fa fa-chevron-left' /></Link>
          <Link to={'literaryTrail/blodigbyhistorie'}><p className='previouseSite'>Litterære steder</p></Link>
            <div className='title'>
              <h2>Blodig byhistorie</h2>
              <i>Jørgen Brekke</i>
            </div>
        </div>
        <Map className='trailMap'/>
      </div>
    );
  }
})
