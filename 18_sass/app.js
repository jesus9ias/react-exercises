
const App = () => <section className="main">
  <h2 className="main__title">Horizontal buttons</h2>
  <div className="buttons">
    <button className="button">Normal</button>
    <button className="button button--success">Success</button>
    <button className="button button--warning">Warning</button>
    <button className="button button--error">Error</button>
    <button className="button button--success button--big">Big</button>
  </div>
  <div className="buttons buttons--horizontal">
    <button className="button">Normal</button>
    <button className="button button--success">Success</button>
    <button className="button button--warning">Warning</button>
    <button className="button button--error">Error</button>
    <button className="button button--success button--big">Big</button>
  </div>
</section>

ReactDOM.render(<App />, document.getElementById("app"));