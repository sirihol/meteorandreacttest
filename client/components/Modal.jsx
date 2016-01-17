Modal = React.createClass({
  render() {
    return (
        <div className="modal-active-darken">
          <div className="modal-container">
            <AddLiteraryPlace />
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
          <div className="close-modal-x">&times;</div>
          <input type="text" placeholder="Forfatter" />
          <input type="text" placeholder="Litterært verk" />
          <input type="text" placeholder="År" />
          <input type="text" placeholder="Sted" />
          <textarea placeholder="Tekst" />
        </div>

        <div className="submit-modal-buttons">
            <button className="button">Lagre</button>
        </div>

      </div>
    )
  }
})
