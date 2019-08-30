# useLoggedReducer

Use React's [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer) hook with [redux-logger](https://www.npmjs.com/package/redux-logger) for debugging

## Getting Started

<!-- ### Prerequisites

What things you need to install the software and how to install them

```
Give examples
``` -->

### Installing

`npm i useloggedreducer`

#### Example


```JSX
import React from "react";
import { useLoggedReducer } from "useloggedreducer";

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
```

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces
* [redux-logger](https://github.com/LogRocket/redux-logger) - Logger for Redux

<!-- ## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us. -->

<!-- ## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project. -->

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

<!-- ## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc -->
