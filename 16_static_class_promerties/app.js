
class Message extends React.Component {
  render() {
    const style = this.props.bold ? { fontWeight: 'bold' } : {};
    return (
      <p style={style}>{this.props.text}</p>
    );
  }

  static defaultProps = {
    text: 'No text provided',
    bold: false
  };

  static propTypes = {
    text: PropTypes.string,
    bold: PropTypes.bool
  };
}


const App = () => <div>
  <Message text={'ok'} bold />
  <Message bold />
  <Message />
</div>

ReactDOM.render(<App />, document.getElementById("app"));