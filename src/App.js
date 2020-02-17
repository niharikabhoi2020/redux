import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const counterReducer = useSelector(state => state.counterReducer);
  const { counter } = counterReducer;

  const incrementCounter = () => {
    dispatch({ type: "INCREMENT_COUNTER", payload: { count: 3 } });
  };

  const decrementCounter = () => {
    dispatch({ type: "DECREMENT_COUNTER", payload: { count: 3 } });
  };

  return (
    <div className="App">
      <h1> Counter: {counter} </h1>
      <button onClick={incrementCounter}> + </button>
      <button onClick={decrementCounter}> - </button>
    </div>
  );
}

export default App;
