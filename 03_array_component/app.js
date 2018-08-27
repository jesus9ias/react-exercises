var data = "array component"

function MyComponent() {
  return [
    <h1 key="head">Hello</h1>,
    <h2 key="subhead">{data}</h2>
  ];
}

var reactElement = <MyComponent/>

var renderTarget = document.getElementById("app");

ReactDOM.render(reactElement, renderTarget);