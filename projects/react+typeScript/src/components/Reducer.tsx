//keeping the state of the app

import { useReducer } from "react";

const initialState = {
  count: 0,
}; //this never going to modify

type StateType = typeof initialState;

type ActionType =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "custom"; payload: number };

const counterReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "custom":
      return {
        ...state,
        count: action.payload,
      };

    default:
      return state;
  }
};

const Reducer = () => {
  const [countState, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <h2>CounterReducer: {countState.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "custom", payload: 100 })}>
        100
      </button>
    </>
  );
};

export default Reducer;
