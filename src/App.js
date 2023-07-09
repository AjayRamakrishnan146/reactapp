import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import EmployeeRegister from './components/EmployeeRegister';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    // <div className="App">
    //   <h1>ICTAK</h1>
    // </div>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
      <Route path='/' element={<Home/>}/>
      <Route path='/employeeregister' element={<EmployeeRegister/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
