import ReactPlayer from 'react-player'

LiteraryPlace = React.createClass({
  getInitialState(){
    return{
        showText: false,
        url: '/resources/jawani.mp3',
        playing: false,
        volume: 0.7,
        played: 0,
        loaded: 0
      }
  },

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

    return(
      <div className={this.state.showText ? 'literaryPlaceCardExpanded' : 'literaryPlaceCard'}>
        <div className='primarytext'>
          <h1>{this.props.place.title}</h1>
          <i className='fa fa-map-marker mapMarker'></i><p id='address'>{this.props.place.address}</p>

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

          <div className='rightButtons'>
            <div className='buttonAndText'>
              <i className={this.state.showText ? 'book fa fa-times' : 'book fa fa-book'} onClick={this.toggleShowText}></i>
              <p> Les </p>
            </div>

            <div className='buttonAndText'>
              <i className={playing ? 'fa fa-pause-circle-o playCircle' : 'fa fa-play-circle-o playCircle'}
                 onClick={this.playPause}></i>
              <p>Lytt</p>
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
            </div>
          </div>

          <div className='textArea'>
            {this.props.place.text}
          </div>
        </div>
    </div>
    );
  }
})
