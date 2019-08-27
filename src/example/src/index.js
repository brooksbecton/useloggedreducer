import React from "react";
import ReactDOM from "react-dom";
import { useLoggedReducer } from "./../../../dist/main";
console.log(useLoggedReducer)
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

function App() {
  const [state, dispatch] = useLoggedReducer(reducer, initialState);
  return (
    <>
      Count:{" "}
      <input
        type="number"
        value={state.count}
        onChange={e => dispatch({ type: "set", count: +e.target.value })}
      />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
