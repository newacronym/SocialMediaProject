import './App.css';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/HomePage/Home';
import Suggestions from './Components/Suggestions/Suggestions';
import Post from './Components/Post/Post';
import InfoSection from './Components/InfoSection/InfoSection';
import StatusBar from './Components/StatusBar/StatusBar';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Routes>
          <Route exact path='/home' element={<Home/>}/>
          <Route exact path='/login' element={<LoginPage/>}/>
          <Route exact path='/suggestions' element={<Suggestions/>}/>
          <Route exact path='/post' element={<Post/>}/>
          <Route exact path='/info' element={<InfoSection/>}/>
          <Route exact path='/status' element={<StatusBar/>}/>
        </Routes>
      </Router> */}
      {
          (localStorage.getItem("users")==undefined ||  localStorage.getItem("users")== null)?
          <LoginPage/> : <Home/>
          // < Home/>
        
      }
    </div>
  );
}

export default App;
