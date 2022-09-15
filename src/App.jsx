import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './Context/AuthContext';
import './App.css'


import NavBar from './components/NavBar/NavBar';

import Account from './components/Login/Account';
import Logger from './components/Login/Logger';
import SignIn from './components/Login/SignIn';
import Signup from './components/Login/SignUp';
import ProtectedRoute from './components/Login/ProtectedRoute'


function App() {

  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>

          <NavBar />

          <Routes>
            <Route path='/logger' element={ <Logger /> } />

            <Route path='/signIn' element={<SignIn />} />
            <Route path='/signUp' element={<Signup />} />
            <Route
              path='/account'
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />            
            
            <Route path="*" element={<h1>404</h1>} />
          </Routes>

        </AuthContextProvider>
      </BrowserRouter>
    </>

  )

}

export default App
