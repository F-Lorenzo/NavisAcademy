import React ,{useContext} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import LoginContainer from './components/Login/LoginContainer';
import LoginInterface from './components/Login/LoginInterface';
import RegisterInterface from './components/Login/RegisterInterface';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import TeacherProfileContainer from './components/teacherProfile/TecherProfileContainer';

function App() {
  return (
      <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/login" element={<LoginContainer/>}/>
            <Route path="/register" element={<RegisterInterface/>}/>
            <Route path="/Teachers/:techerId" element={<TeacherProfileContainer/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
    )
}

export default App
