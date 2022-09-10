import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import LoginContainer from './components/Login/LoginContainer';
import LoginInterface from './components/Login/LoginInterface';
import RegisterInterface from './components/Login/RegisterInterface';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>
      <BrowserRouter>

          <NavBar />

          <Routes>
            <Route path='/login' element={ <LoginContainer /> } />
            <Route path='/login/IniciarSesion' element={ <LoginInterface /> } />
            <Route path='/login/Registrarse' element={ <RegisterInterface /> } />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
      
      </BrowserRouter>
      <Footer />
    </>

  )

}

export default App
