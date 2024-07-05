import React, { useState } from "react";
import { Button } from "primereact/button";
import "../styles/counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevValue) => prevValue + 1);
  };

  const decrement = () => {
    setCounter((prevValue) => prevValue - 1);
  };

  const resetCounter = () => {
    setCounter(0);
  };
  return (
    <>
      <div className="card_project_border">
        <div className="counter_container">
          <div className="counter_box">
            <h1>{counter}</h1>
          </div>
          <div className="counter_button">
            <Button icon="pi pi-plus" onClick={increment} />{" "}
            <Button icon="pi-times-circle" onClick={resetCounter} />{" "}
            <Button icon="pi pi-minus" onClick={decrement} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
