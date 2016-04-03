import ReactPlayer from 'react-player'

const {Link} = ReactRouter;

LiteraryTrails = React.createClass({
  render: function() {
    return (
      <div>
        <AppBar pageTitle="Litterære løyper" />
          <div className="content-container">
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
            <h3>{this.props.author}</h3>
            <p className={this.state.expandDetails ? 'fa fa-chevron-up' : 'fa fa-chevron-down'} onClick={this.expandDetailsToggle} />
          </div>

            <div className='moreTrailDetails'>
              <p><strong>Antall litterære steder:</strong> {this.props.numLiteraryPlaces}</p>
              <p><b>Lengde:</b> {this.props.length}</p>
              <p><b>Lest av:</b> {this.props.readBy}</p>
              <br/>
              <p>{this.props.text}</p>
              <Link to={'literaryTrail/' + this.props.id}>
                <button className='flatbutton'>Start litterær løype</button>
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
        <div className='mapButton'>
          <Link to={'literaryTrail/' + this.props.id + '/map'}><i id='map-icon' className='fa fa-map'></i></Link>
          <p>Kart</p>
        </div>
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
        showText: false,

        //States for the audioplayer
        //url: 'https://raw.githubusercontent.com/scottschiller/SoundManager2/master/demo/_mp3/rain.mp3',
        url: '/resources/jawani.mp3',
        playing: false,
        volume: 0.7,
        played: 0,
        loaded: 0
      }
  },

  //Functions for audioplayer
  load(url) {
    this.setState({url, played: 0, loaded: 0 });
  },
  playPause() {
    this.setState({ playing: !this.state.playing });
  },
  stop() {
    this.setState({ url: null, playing: false });
  },
  setVolume(e) {
    this.setState({ volume: parseFloat(e.target.value) });
  },
  onSeekMouseDown(e) {
    this.setState({ seeking: true });
  },
  onSeekChange(e) {
    this.setState({ played: parseFloat(e.target.value) });
  },
  onSeekMouseUp(e) {
    this.setState({ seeking: false })
    this.refs.player.seekTo(parseFloat(e.target.value));
  },
  onProgress(state) {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  },
  onConfigSubmit() {
    let config;
    try {
      config = JSON.parse(this.refs.config.value);
    } catch (error) {
      config = {};
      console.error('Error setting config:', error);
    }
    this.setState(config);
  },
  renderLoadButton(url, label) {
    return (
      <button onClick={() => this.load(url)}>
        {label}
      </button>
    )
  },
  //End functions for audioplayer

  togglePlay(){
    this.setState({
        playTrack: !this.state.playTrack
      });
    this.playPause();
  },

  toggleShowText(){
      this.setState({
        showText: !this.state.showText
      });
  },

  render:function(){
    const {
      url, playing, volume,
      played, loaded,
    } = this.state;

    console.log("STATES: url: ", url, "playing: ", playing, "volume: ", volume, "played: ", played, "loaded: ", loaded);

    return(
      <div className={this.state.showText ? 'literaryPlaceCardExpanded' : 'literaryPlaceCard'}>
        <div className='primarytext'>
          <h1>{this.props.placeTitle}</h1>
          <i className='fa fa-map-marker mapMarker'></i><p id='address'>{this.props.placeAdress}</p>

          <div className='rightButtons'>
            <div className='buttonAndText'>
              <i className={this.state.showText ? 'book fa fa-times' : 'book fa fa-book'} onClick={this.toggleShowText}></i>
              <p> Les </p>
            </div>

            <div className='buttonAndText'>
              <div className="none" style={{display: 'none'}}>
                <ReactPlayer
                  ref='player'
                  className='react-player'
                  //width={480}
                  //height={270}
                  url={url}
                  playing={playing}
                  volume={volume}
                  onPlay={() => this.setState({ playing: true })}
                  onPause={() => this.setState({ playing: false })}
                  onBuffer={() => console.log('onBuffer')}
                  onEnded={() => this.setState({ playing: false })}
                  onError={(e) => console.log('onError', e)}
                  onProgress={this.onProgress}
                />
              </div>
              <i className={this.state.playTrack ? 'fa fa-pause-circle-o playCircle' : 'fa fa-play-circle-o playCircle'} onClick={this.togglePlay}></i>
              <p>Lytt</p>
            </div>
          </div>

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
          <Link to={'literaryTrails'}><p id='chevron-left-icon'className='fa fa-chevron-left' /></Link>
          <Link to={'literaryTrails'}><p className='previouseSite'>Litterære løyper</p></Link>
          <div className='mapButton'>
            <Link to={'literaryTrail/' + this.props.id}><i id='map-icon' className='fa fa-list'></i></Link>
            <p>Liste</p>
          </div>
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
