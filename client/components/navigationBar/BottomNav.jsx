const {Link} = ReactRouter;

BottomNav = React.createClass({
  render(){
    return(
      <div className='bottomNavigation'>
        <NavigationButton linkto='literaryTrails' iconName='fa fa-list' iconLabel='Løyper' />
        <NavigationButton linkto='/' iconName='fa fa-map'  iconLabel='Kart'/>
        <NavigationButton linkto='profile' iconName='fa fa-user'  iconLabel='Profil' />
      </div>
    );
  }
})

NavigationButton = React.createClass({
  render(){
    return(
      <Link className='navigationButton' to={this.props.linkto}>
            <i className={this.props.iconName}></i>
            <div className='iconLabel'>{this.props.iconLabel}</div>
      </Link>
    );
  }
})
