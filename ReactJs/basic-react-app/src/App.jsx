import "./App.css";

import Title from "./Title.jsx";

import Test2 from "./Test.jsx";
let name = "karan";

function Description() {
  return <h3>I am description</h3>;
}

function App() {
  return (
    <div>
      <button>Click me </button>
      <h1>Hi,{name}</h1>
      <Title />
      <Test2 />
      <Description />
    </div>
  );
}

export default App;
