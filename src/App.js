import React, { useState } from "react";
import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";
import "./App.css";
import { InputText } from "primereact/inputtext";
import "primeicons/primeicons.css";

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Input Value: ${inputValue}`);
    setInputValue("");
  };
  return (
    <>
      <div className="container">
        <div className="app_title">
          <h1>Coding Challenges</h1>
        </div>
        <div className="filter_container">
          <InputText value={inputValue} onChange={handleChange} className="p-inputtext-sm"/>
          <div className="submit_icon">
            <i
              onClick={handleSubmit}
              className="pi pi-search"
              style={{ color: "orange" }}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
