const {Link} = ReactRouter;

LiteraryTrail = React.createClass({
  render:function(){
    const {params} = this.props;
    return(
      <div className='literaryTrail'>
        <AppBarLiteraryTrail trailId={params.id} />
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
        <Link to={'/literaryTrails'}><p id='chevron-left-icon'className='fa fa-chevron-left' /></Link>
        <Link to={'/literaryTrails'}><p className='previouseSite'>Litterære løyper</p></Link>
        <div className='mapButton'>
          <Link to={'/literaryTrail/map/' + this.props.trailId}><i id='map-icon' className='fa fa-map'></i></Link>
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


LiteraryTrailMap = React.createClass({
  render:function(){
    const {params} = this.props;

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
              <h2>Blodig byhistorie</h2>
              <i>Jørgen Brekke</i>
            </div>
        </div>
        <Map className='trailMap'/>
      </div>
    );
  }
})
