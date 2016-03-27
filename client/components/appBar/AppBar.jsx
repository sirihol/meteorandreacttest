AppBar = React.createClass({
  render(){
    return(
      <div className='topNavigation'>
        <h1>{this.props.pageTitle}</h1>
      </div>
    );
  }
})
