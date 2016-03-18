const {Link} = ReactRouter;

BottomNav = React.createClass({
  render(){
    return(
      <div className='bottomNavigation'>
        <NavigationButton linkto='literaryTrails' iconName='fa fa-list' />
        <NavigationButton linkto='/' iconName='fa fa-map' />
        <NavigationButton linkto='profile' iconName='fa fa-user' />
      </div>
    );
  }
})

NavigationButton = React.createClass({
  render(){
    return(
      <Link to={this.props.linkto}>
        <div className='navigationButton'>
            <p className={this.props.iconName}/>
          </div>
      </Link>
    );
  }
})
