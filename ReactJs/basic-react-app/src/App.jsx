import "./App.css";
function Title() {
  return <h1>I am title</h1>;
}
function Description() {
  return <h3>I am description</h3>;
}

function App() {
  return (
    <div>
      <button>Click me </button>
      <Title />
      <Description />
    </div>
  );
}

export default App;
