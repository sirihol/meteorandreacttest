// Meteor.startup(function() {
//   Mapbox.load({
//     gl: true
//   });
// });
//
// var getUrl = function(lon, lat){
//   return `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lon},${lat}&key=${Meteor.settings.public.googleapis}`;
// }
//
// var xhr = new XMLHttpRequest();
// var map = {};
//
// Tracker.autorun(function () {
//   if (Mapbox.loaded()) {
//     mapboxgl.accessToken = Meteor.settings.public.accessToken;
//     map = new mapboxgl.Map({
//       container: 'map',
//       style: 'mapbox://styles/siriholtnaes/cijj81zhp0078bolxxddj29nq',
//       center: [10.395151,63.427502], // starting position
//       zoom: 13
//     });
// 
//     map.on('mousemove', function (e) {
//       document.getElementById('debugpanel').innerHTML =
//       JSON.stringify(e.point) + '<br />' +
//       JSON.stringify(e.lngLat);
//     });
//   }
// });
//
//
// Map = React.createClass({
//   getInitialState() {
//     return {
//       showModal: false
//     }
//   },
//   showModal(modalType) {
//     this.setState({
//       showModal: modalType
//     })
//   },
//   hideModal(e) {
//     this.setState({
//       showModal: false
//     })
//   },
//
//   handleClick: function(){
//     map.on('click', function(e){
//       console.log(e.lngLat);
//       this.showModal(true);
//     })
//   },
//
//   render() {
//     return(
//       <div>
//         <pre id='debugpanel'></pre>
//         <Sidenav showModal={this.showModal}/>
//         <div className="content-wrapper">
//           <Modal
//             showModal={this.state.showModal}
//             hideModal={this.hideModal}/>
//           <div onClick={this.handleClick} id="map" className="mapbox"></div>
//         </div>
//       </div>
//     )
//   }
// })
//
// Sidenav = React.createClass({
//   getInitialState() {
//     return {
//       tooltipDescription: "",
//       showTooltip: false,
//       tooltipX: "50px",
//       tooltipY: "0px"
//     }
//   },
//   showTooltip(e) {
//     this.setState({
//       showTooltip: true,
//       tooltipY: e.nativeEvent.target.offsetTop + (e.nativeEvent.target.offsetHeight / 2) + "px"
//     })
//   },
//   setTooltipDescription(item) {
//     this.setState({
//       tooltipDescription: item.description
//     })
//   },
//   hideTooltip(e) {
//     this.setState({
//       showTooltip: false
//     })
//   },
//   render() {
//     return (
//       <nav className="sidenav">
//         <SidenavTooltip
//           showTooltip={this.state.showTooltip}
//           tooltipDescription={this.state.tooltipDescription}
//           tooltipX={this.state.tooltipX}
//           tooltipY={this.state.tooltipY}/>
//         <ul className="sidenav-list">
//           <SidenavIcons
//             showModal={this.props.showModal}
//             setTooltipDescription={this.setTooltipDescription}
//             showTooltip={this.showTooltip}
//             hideTooltip={this.hideTooltip} />
//         </ul>
//       </nav>
//     )
//   }
// })
//
//
// SidenavIcons = React.createClass({
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextProps.id !== this.props.id
//   },
//
//   render(){
//     let iconList = [
//       {name: "fa fa-plus", description: "Nytt litterært sted" },
//       {name: "fa fa-user", description: "Min profil" }
//     ]
//
//     let list = iconList.map((item) => {
//       return (
//         <li key={item.name}
//           onClick={this.props.showModal.bind(null, item.description)}
//           onMouseEnter={this.props.setTooltipDescription.bind(null, item)}
//           onMouseOver={this.props.showTooltip}
//           onMouseOut={this.props.hideTooltip}
//           className="sidenav-list-item">
//           <i className={item.name}></i>
//         </li>
//       )
//     })
//     return (
//       <div>
//         {list}
//       </div>
//     )
//   }
// })
//
// SidenavTooltip = React.createClass({
//   render(){
//     tooltipStyle = {
//       top: this.props.tooltipY,
//       left: this.props.tooltipX
//     }
//     if (this.props.showTooltip) {
//       tooltipStyle.opacity = "1";
//       tooltipStyle.visibility = "visible";
//     } else {
//       tooltipStyle.opacity = "0";
//       tooltipStyle.visibility = "hidden";
//     }
//     return(
//       <div className="sidenav-tooltip" style={tooltipStyle}>
//         <p>{this.props.tooltipDescription}</p>
//         <div className="tail"></div>
//       </div>
//     )
//   }
// })
