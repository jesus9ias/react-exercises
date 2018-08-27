var data = "Standalone Component"

var reactElement = <div>
  <h1>Hello</h1>
  <h2>{data}</h2>
</div>

var renderTarget = document.getElementById("app");

ReactDOM.render(reactElement, renderTarget);