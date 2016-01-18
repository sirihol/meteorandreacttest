Modal = React.createClass({
  render() {
    let modalStyle = {
      visibility: "hidden",
      opacity: "0"
    }
    if (!!this.props.showModal) {
      modalStyle.visibility =  "visible"
      modalStyle.opacity = "1"
    }

    return (
        <div className="modal-active-darken" style={modalStyle}>
          <div className="modal-container">
            {(() => {
              switch (this.props.showModal) {
                case "Nytt litterært sted": return <AddLiteraryPlace
                  hideModal={this.props.hideModal}/>;
                case "Min profil": return <h1>Logg inn</h1>;
                default: return false;
                }
              })()}
          </div>
        </div>
    )
  }
})

AddLiteraryPlace = React.createClass ({
  render() {
    return (
      <div>
        <div className="literary-form">
          <h1>Legg til litterært sted</h1>
          <div className="close-modal-x"
            onClick={this.props.hideModal}>&times;</div>
          <input type="text" placeholder="Forfatter" />
          <input type="text" placeholder="Litterært verk" />
          <input type="text" placeholder="År" />
          <input type="text" placeholder="Sted" />
          <textarea placeholder="Tekst" />
        </div>

        <div className="submit-modal-buttons">
            <button
              onClick={this.props.hideModal}
              className="button">Lagre</button>
        </div>
      </div>
    )
  }
})
