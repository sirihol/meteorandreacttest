Map = React.createClass({
	render() {
		return (
			<div className="content-wrapper">
				<Sidenav />
				<Modal />
			</div>
		)
	}
})

Sidenav = React.createClass({
	render() {
		return (
			<nav className="sidenav">
			<ul className="sidenav-list">
					<SidenavIcons />
				</ul>
			</nav>
		)
	}
})


SidenavIcons = React.createClass({
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.id !== this.props.id
	},

	render(){
		let iconList = [
			{name: "fa fa-plus", description: "Nytt litterært sted" },
			{name: "fa fa-location-arrow", description: "Ny litterær løype" },
			{name: "fa fa-user", description: "Min profil" }
		]

		let list = iconList.map((item) => {
			return (
				<li key={item.name}
					className="sidenav-list-item">
					<i className={item.name}></i>
				</li>
			)
		})
		return (
      <div>
        {list}
      </div>
    )
	}
})
