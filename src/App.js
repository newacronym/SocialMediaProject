import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/HomePage/Home';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      {/* {
          (localStorage.getItem("users")==undefined ||  localStorage.getItem("users")== null)?
          <LoginPage/> : <Home/>
      } */}
      {/* <LoginPage/> */}
      <LoginPage/>
    </div>
  );
}
export default App;
