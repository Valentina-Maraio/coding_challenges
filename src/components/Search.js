import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import '../styles/search.css'
import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";
import "primeicons/primeicons.css";


const Search = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Input Value: ${inputValue}`);
    setInputValue("");
  }
  
  
  return (
    <>
      <div className="filter_container">
        <InputText
          value={inputValue}
          onChange={handleChange}
          className="p-inputtext-sm"
        />
        <div className="submit_icon">
          <i
            onClick={handleSubmit}
            className="pi pi-search"
            style={{ color: "orange" }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default Search;
