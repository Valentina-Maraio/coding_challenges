import React, {useState} from 'react'
import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";
import "./App.css";
import { InputText } from 'primereact/inputtext';



function App() {
  const [value, setValue] = useState('');
  console.log(value)
  return (
    <>
      <div className="container">
        <div className="app_title">
          <h1>Coding Challenges</h1>
        </div>
        <div className="filter_container">
          <p>I'm a filter</p>
          <InputText value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
      </div>
    </>
  );
}

export default App;
