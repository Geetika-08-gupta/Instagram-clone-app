import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import Profile from './Components/Profile';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
  <Navbar />
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/signup" element={<SignUp/>}></Route>
    <Route path="/signin" element={<SignIn/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
  </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
