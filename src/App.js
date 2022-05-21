import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Home/HomeUtilities/Navbar'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
