import React, {useState, useEffect} from 'react'
import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";
import "./App.css";
import { InputText } from 'primereact/inputtext';



function App() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Input Value: ${inputValue}`);
  };
  return (
    <>
      <div className="container">
        <div className="app_title">
          <h1>Coding Challenges</h1>
        </div>
        <div className="filter_container">
          <p>I'm a filter</p>
          <InputText value={value} onChange={handleFilter} />
        </div>
      </div>
    </>
  );
}

export default App;
