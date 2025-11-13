import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <h1>Healthy Food</h1>
            <ul className="list-group ">
              <li className="list-group-item">Dal</li>
              <li className="list-group-item">Milk</li>
              <li className="list-group-item">Ghee</li>
              <li className="list-group-item">Roti</li>
              <li className="list-group-item">Salad</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
