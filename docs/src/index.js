import React from "react";
import ReactDOM from "react-dom";

import { useLoggedReducer } from "./../../dist/useloggedreducer";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "reset":
      return initialState;
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "set":
      return { count: action.count };
    default:
      return { count: state.count };
  }
}

const Counter = () => {
  const [state, dispatch] = useLoggedReducer(reducer, initialState);
  return (
    <div>
      <div>
        Count:{" "}
        <input
          type="number"
          value={state.count}
          onChange={e => dispatch({ type: "set", count: +e.target.value })}
        />
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </div>
      <p>Open the console to see the logger</p>
    </div>
  );
};

function App() {
  return <Counter />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
