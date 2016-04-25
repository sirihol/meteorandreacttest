import { Link } from 'react-router';


BottomNav = React.createClass({

    clicked(id, name){
      console.log(`[BottomNav]: Navigating to ${id} (${name})`);
    },

  render(){

    let data = [{
      name: "trails",
      link:'literaryTrails',
      icon:'fa fa-list',
      iconLabel:'Løyper',
      },{
      name: "map",
      link:'',
      icon:'fa fa-map',
      iconLabel:'Kart',
      },{
      name: "profile",
      link:'profile',
      icon:'fa fa-user',
      iconLabel:'Profil',
    }]

    // Legg merke til den siste "this"-en (uttales dissen) Hvis ikke så skjønner den ikke konteksten?
    return(
      <div className='bottomNavigation'>
        {data.map(function(item, i){
          return (
              <NavigationButton
                key={i}
                id={item.name}
                linkto={item.link}
                iconName={item.icon}
                iconLabel={item.iconLabel}
                callback={this.clicked.bind(this, i)}
              />)
        }, this)}

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
        callback:   React.PropTypes.func
    },

    emitEvent: function() {
        if (typeof this.props.callback === 'function') {
            this.props.callback(this.props.id);
        }
    },

    testClick(){
      console.log("setting state to true");
      this.setState({
        selected: true
      })
    },

  render(){
    let reg = (window.location.href).match(/[a-z]*$/i);

    return(
      <Link className={'navigationButton ' + ((this.props.linkto === reg[0]) ? 'btmnav-selected':'')} to={"/"+this.props.linkto}  onClick={this.emitEvent}>
            <i className={this.props.iconName}></i>
            <div className='iconLabel'>{this.props.iconLabel}</div>
      </Link>
    );
  }
})
