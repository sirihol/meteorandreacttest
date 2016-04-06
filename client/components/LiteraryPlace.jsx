import ReactPlayer from 'react-player'

LiteraryPlace = React.createClass({
  getInitialState(){
    return{
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
  setVolume(event) {
    this.setState({ volume: parseFloat(event.target.value) });
  },
  onSeekMouseDown(event) {
    this.setState({ seeking: true });
  },
  onSeekChange(event) {
    this.setState({ played: parseFloat(event.target.value) });
  },
  onSeekMouseUp(event) {
    this.setState({ seeking: false })
    this.refs.player.seekTo(parseFloat(event.target.value));
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

  toggleShowText(){
      this.setState({
        showText: !this.state.showText
      });
  },

  render:function(){
    const {url, playing, volume,played, loaded,} = this.state;

    //console.log("STATES: url: ", url, "playing: ", playing, "volume: ", volume, "played: ", played, "loaded: ", loaded);

    return(
      <div className={this.state.showText ? 'literaryPlaceCardExpanded' : 'literaryPlaceCard'}>
        <div className='primarytext'>
          <h1>{this.props.placeTitle}</h1>
          <i className='fa fa-map-marker mapMarker'></i><p id='address'>{this.props.placeAdress}</p>

          {/*START - Denne koden er bare flytte under LYD-ikonet. Koden funker*/}
          <div className='progress-bar'>
            <progress max={1} value={played}>{played}</progress>

            <input
                   type='range' min={0} max={1} step='any' className='rangeClass'
                   value={played}
                   onMouseDown={this.onSeekMouseDown} //For browser version
                   onMouseUp={this.onSeekMouseUp} //For browser version
                   onTouchStart={this.onSeekMouseDown} //For mobile version
                   onTouchEnd={this.onSeekMouseUp} //For mobile version
                   onChange={this.onSeekChange}
                 />
          </div>
          {/*SLUTT*/}

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
                  url={url}
                  playing={playing}
                  volume={volume}
                  onPlay={() => this.setState({ playing: true })}
                  onPause={() => this.setState({ playing: false })}
                  onBuffer={() => console.log('onBuffer')}
                  onEnded={() => this.setState({ playing: false })}
                  onError={(e) => console.log('onError', event)}
                  onProgress={this.onProgress}
                />
              </div>
              <i className={playing ? 'fa fa-pause-circle-o playCircle' : 'fa fa-play-circle-o playCircle'}
                 onClick={this.playPause}></i>
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
