
const Message = (props) => <p {...props}>{props.children}</p>

const App = () => <div>
  <Message style={{ color: 'red' }}>Hi!</Message>
  <Message style={{ color: 'blue' }}>Hey</Message>
  <Message style={{ fontWeight: 'bold' }} id={'urra__label'} alt="One Message">Urra</Message>
</div>

ReactDOM.render(<App />, document.getElementById("app"));