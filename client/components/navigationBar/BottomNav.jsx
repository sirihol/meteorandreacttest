const {Link} = ReactRouter;

BottomNav = React.createClass({

    clicked(id){
      console.log(id + " - Dette ble skrevet ut i BottomNav");
    },


  render(){
    return(
      <div className='bottomNavigation'>
        <NavigationButton
          id="trails"
          linkto='literaryTrails'
          iconName='fa fa-list'
          iconLabel='Løyper'
          callParent={this.clicked} />

        <NavigationButton
          id="map"
          linkto='/'
          iconName='fa fa-map'
          iconLabel='Kart'
          callParent={this.clicked}/>

        <NavigationButton
          id="profile"
          linkto='profile'
          iconName='fa fa-user'
          iconLabel='Profil'
          callParent={this.clicked} />
      </div>
    );
  }
})

NavigationButton = React.createClass({
    getInitialState(){
      return{
          selected: false
        }
    },

   propTypes: {
        callParent:   React.PropTypes.func
    },

    childFunc: function(value) {
        if (typeof this.props.callParent === 'function') {
            this.props.callParent(value);
        }
    },

    testClick(){
      console.log("setting state to true");
      this.setState({
        selected: true
      })
    },

  render(){
    return(
      <Link className={'navigationButton ' + (this.state.selected ? 'btmnav-selected':'')} to={this.props.linkto}  onClick={this.childFunc("jeg blir sendt fra: " + this.props.id)}>
            <i className={this.props.iconName}></i>
            <div className='iconLabel'>{this.props.iconLabel}</div>
      </Link>
    );
  }
})
