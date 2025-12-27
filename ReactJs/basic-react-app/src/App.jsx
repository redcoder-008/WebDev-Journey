import "./App.css";

import Title from "./Title.jsx";

import Test2 from "./Test.jsx";
function Description() {
  return <h3>I am description</h3>;
}

function App() {
  return (
    <div>
      <button>Click me </button>
      <Title />
      <Test2 />
      <Description />
    </div>
  );
}

export default App;
