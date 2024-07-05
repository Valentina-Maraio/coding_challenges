import React, { useState } from "react";
import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";
import "./App.css";
import { InputText } from "primereact/inputtext";
import { Button }  from "primereact/button";
import 'primeicons/primeicons.css';


function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Input Value: ${inputValue}`);
    setInputValue("")
  };
  return (
    <>
      <div className="container">
        <div className="app_title">
          <h1>Coding Challenges</h1>
        </div>
        <div className="filter_container">
          <p>I'm a filter</p>
          <i onClick={handleSubmit} className="pi pi-search" style={{ color: 'var(--primary-color)', p: '50px' }}></i>
          <InputText value={inputValue} onChange={handleChange} />
        </div>
      </div>
    </>
  );
}

export default App;
