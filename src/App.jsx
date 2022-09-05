import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import LoginContainer from './components/Login/LoginContainer';
import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <>
      <BrowserRouter>

          <NavBar />
          <Routes>
            <Route path='/login' element={ <LoginContainer /> } />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>

      </BrowserRouter>
    </>

  )

}

export default App
