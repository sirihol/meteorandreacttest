const { RaisedButton, FloatingActionButton, Divider, FlatButton} = mui;
const { MenuItem } = mui.Menus;
const Styles = mui.Styles;
const Colors = Styles.Colors;

TrophyComponent = React.createClass({
	render() {
		return (
		<div className='trophyWrapper'>
			<div className='trophyContainer'>
				<TrophyItem iconName='fa fa-trophy' iconText='Nybegynner'/>
				<TrophyItem iconName='fa fa-trophy' iconText='Eventyrlysten'/>
				<TrophyItem iconName='fa fa-trophy' iconText='Lokal'/>
				<TrophyItem iconName='fa fa-trophy' iconText='Sosial'/>
				<TrophyItem iconName='fa fa-trophy' iconText='Etterforsker'/>
				<TrophyItem iconName='fa fa-trophy' iconText='Poet'/>
				<TrophyItem iconName='fa fa-trophy' iconText='Sosial'/>
				<TrophyItem iconName='fa fa-trophy' iconText='Etterforsker'/>
				<TrophyItem iconName='fa fa-trophy' iconText='Poet'/>
			</div>
		</div>
		);
	}
})

TrophyItem = React.createClass({
	getInitialState(){
    return{
        showTrophyDescription: false,
      }
  },

	showDescription(){
		this.setState({
			showTrophyDescription: !this.state.showTrophyDescription
		});
		console.log('Shows description: ' + this.state.showTrophyDescription);
	},

	render(){
		return(
			<div className='trophyItem' onClick={this.showDescription}>
				<div className='trophyIcon'>
					<i className={this.props.iconName}></i>
				</div>
				<p>{this.props.iconText}</p>
			</div>
		);
	}
})

TrophyDescription = React.createClass({
	render(){
		return(
			<div className='trophyDescriptionWrapper'>
				<div className='trophyDescription'>
					{this.props.description}
				</div>
			</div>
		);
	}
})
