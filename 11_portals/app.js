
class Modal extends React.Component {
  theModal() {
    return (
      <div className="modal">
        <p className="modal__text">Confirm Modal <button onClick={this.props.closeModal}>X</button></p>
      </div>
    );
  }

  render() {
    return ReactDOM.createPortal(
      this.theModal(),
      document.getElementById("modal"),
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  state = {
    isOpenModal: false
  };

  openModal() {
    this.setState({
      isOpenModal: true
    });
  }

  closeModal() {
    this.setState({
      isOpenModal: false
    });
  }

  render() {
    return (
      <div className="app">
        <p>Some Data</p>
        <button onClick={this.openModal}>Show Modal</button>
        {this.state.isOpenModal ? <Modal closeModal={this.closeModal} /> : null}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));