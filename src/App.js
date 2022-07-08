import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return(
    <div>
      <Router>
        <Routes>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          <Route exact path='/register' element={<Register/>}/>
        </Routes>
      </Router>

      <Login/>
      {/* <Register/> */}
       <Home/>
      {/* <Profile/> */}
    </div>
  )
  // return <Profile/>;
}

export default App;
