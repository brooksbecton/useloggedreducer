import { logger } from "redux-logger";
import { useReducer } from "react";

type IAction = { type: string };
type IReducer = (state: {}, action: IAction) => {};

export function useLoggedReducer(userReducer: IReducer, defaultState: {}) {
  if (process.env.NODE_ENV === "development") {
    const loggedReducer: IReducer = (state, action: IAction) => {
      let newState = state;

      logger({
        getState: () => newState
      })((action: IAction) => {
        newState = userReducer(state, action);
      })(action);

      return newState;
    };

    return useReducer(loggedReducer, defaultState);
  } else {
    useReducer(userReducer, defaultState);
  }
}
