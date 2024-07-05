import React, {useState} from 'react'
import "primereact/resources/themes/bootstrap4-dark-purple/theme.css";
import "./App.css";
import { Chips } from 'primereact/chips';


function App() {
  const [value, setValue] = useState('');
  
  return (
    <>
      <div className="container">
        <div className="app_title">
          <h1>Coding Challenges</h1>
        </div>
        <div className="filter_container">
          <p>I'm a filter</p>
          <Chips value={value} onChange={(e) => setValue(e.value)} />
        </div>
      </div>
    </>
  );
}

export default App;
