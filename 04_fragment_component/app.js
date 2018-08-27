var data = "Component with Fragment"

function MyComponent() {
  return (
    <React.Fragment>
      <h1>Hello</h1>
      <h2>{data}</h2>
    </React.Fragment>
  );
}

var reactElement = <MyComponent/>

var renderTarget = document.getElementById("app");

ReactDOM.render(reactElement, renderTarget);