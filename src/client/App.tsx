import "./App.css";

import { useState } from "react";

import reactLogo from "./assets/react.svg";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("clicked");
    fetch("/counter", {
      method: "POST",
    })
      .then((res) => res.json())
      .then(() => {
        console.log("fetching counter");
        fetch("/counter")
          .then((res) => res.json())
          .then((data) => setCount(data.count))
      });
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={handleClick}>counter is {count}</Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
