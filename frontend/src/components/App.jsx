import Home from './Home';
import Login from './Login';
import Register from './Register';
import Homet from './Homet';
import Aboutus from './About us/Aboutus';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Livenews from './Live News Feed/Livenews';

function App() {
// was -3.5rem
  return (
    <div style={{marginTop : '0rem'}}> 
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path='/homet' element ={<Homet/>} />
          <Route path='/aboutus' element ={<Aboutus/>} />
          <Route path='/livenews' element ={<Livenews/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
