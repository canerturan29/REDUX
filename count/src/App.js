import React from "react"
import Counter from "./components/Counter";
import IncreaceCounter from "./components/IncreaceCounter";
import Decrease from "./components/Decrease";
import IncreaseByTwo from "./components/IncreaseByTwo";
function App() {
  return (
    <div>
      <Counter />
      <IncreaceCounter />
      <Decrease />
      <IncreaseByTwo />
    </div>
  );
}

export default App;
