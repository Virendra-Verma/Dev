import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Login from './component/Login';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
         <Routes>
           <Route path='/' element={ <Navigate to = "/home"/>}/>
           <Route path='home' element={<Home/>}/>
           <Route path='login' element={<Login/>}/>
                
           

         </Routes>
      </BrowserRouter> 
    </div>
    
  );
}

export default App;
