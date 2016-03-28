const {Link} = ReactRouter;

BottomNav = React.createClass({

    clicked(id){
      console.log("#" + id + "ble trykket");
    },


  render(){
    return(
      <div className='bottomNavigation'>
        <NavigationButton linkto='literaryTrails' iconName='fa fa-list' iconLabel='Løyper' testFunc={this.clicked}/>
        <NavigationButton linkto='/' iconName='fa fa-map'  iconLabel='Kart'/>
        <NavigationButton linkto='profile' iconName='fa fa-user'  iconLabel='Profil' />
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
        testFunc:   React.PropTypes.func
    },

    clicked: function(value) {
        if (typeof this.props.testFunc === 'function') {
            this.props.testFunc(value);
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
      <Link className={'navigationButton ' + (this.state.selected ? 'btmnav-selected':'')} to={this.props.linkto}  onClick={this.testClick}>
            <i className={this.props.iconName}></i>
            <div className='iconLabel'>{this.props.iconLabel}</div>
      </Link>
    );
  }
})
