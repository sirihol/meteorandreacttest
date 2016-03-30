AppBar = React.createClass({

  lolkatt: function(){
    console.log("lolkatt");
  },

  render(){
    return(
      <div className='topNavigation' onClick={this.lolkatt()}>
        <h1>{this.props.pageTitle}</h1>
      </div>
    );
  }
})
