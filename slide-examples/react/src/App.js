import "./App.css";
import { useState } from "react";

const App = () => {
  const [header, setHeader] = useState("Welcome!");

  const setGoodbye = () => {
    setHeader("Goodbye!");
  };

  return (
    <>
      <h1>{header}</h1>
      <button onClick={setGoodbye} className="my-btn">
        Click me!
      </button>
    </>
  );
};

export default App;
