var data = "function component"

function MyComponent() {
  return (
    <div>
      <h1>Hello</h1>
      <h2>{data}</h2>
    </div>
  );
}

var reactElement = <MyComponent/>

var renderTarget = document.getElementById("app");

ReactDOM.render(reactElement, renderTarget);