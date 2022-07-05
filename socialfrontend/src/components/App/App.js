import './App.css';
import {Button} from 'react-bootstrap';
import NavbarComponent from './Navbar/NavbarComponent';

function App() {
  return (
    <div className="App">

      <NavbarComponent/>
      <h1>Hello World!!!</h1>
      <Button variant="danger">Danger</Button> 
      <Button variant="info">Info</Button>

    </div>
  );
}

export default App;
