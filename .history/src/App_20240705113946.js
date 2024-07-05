import { Button } from 'primereact/button'; 
import 'primereact/resources/themes/bootstrap4-dark-purple/theme.css';
import './App.css';

function App() {
  return (
    <>
    <Button>HOLA</Button>
    <i className="pi pi-check"></i>
    <i className="pi pi-check" style={{ color: 'slateblue' }}></i>
    <i className="pi pi-search" style={{ color: 'var(--primary-color)' }}></i>
    </>
  );
}

export default App;
