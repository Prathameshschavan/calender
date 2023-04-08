import logo from './logo.svg';
import './App.css';
import Enroll from './Components/Enroll';
import Calender from './Components/Calender';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <Navbar/>
      <div style={{margin:"5% "}}>
      <Routes >
        <Route path='/enroll' element={<Enroll />}></Route>
        <Route path='/calender' element={<Calender />}></Route>
      </Routes>
      </div>
     
      
    </>
      );
}

export default App;
