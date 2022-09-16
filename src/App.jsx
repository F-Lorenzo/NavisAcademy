<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginContainer from "./components/Login/LoginContainer";
import LoginInterface from "./components/Login/LoginInterface";
import RegisterInterface from "./components/Login/RegisterInterface";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ItemCards from "./components/PackCards/ItemCards";
=======
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './Context/AuthContext';
import './App.css'


import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

import Account from './components/Login/Account';
import Logger from './components/Login/Logger';
import SignIn from './components/Login/SignIn';
import Signup from './components/Login/SignUp';
import ProtectedRoute from './components/Login/ProtectedRoute';

import TecherProfileContainer from './components/teacherProfile/TecherProfileContainer';

import Footer from './components/Footer/Footer';

>>>>>>> Eryc

function App() {
  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
        <NavBar />

        <Routes>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/login/IniciarSesion" element={<LoginInterface />} />
          <Route path="/login/Registrarse" element={<RegisterInterface />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
        <ItemCards />
        <Footer />
=======
        <AuthContextProvider>

          <NavBar />

          <Routes>

            <Route path='/home' element={ <Home /> } />

            <Route path='/logger' element={ <Logger /> } />
            <Route path='/signIn' element={ <SignIn /> } />
            <Route path='/signUp' element={ <Signup /> } />

            <Route
              path='/account'
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />      

            <Route path='/Teacher' element={ <h1>Teacher Profile</h1> } />      
            
            <Route path="*" element={ <h1>404</h1> } />
          </Routes>

          <Footer />

        </AuthContextProvider>
>>>>>>> Eryc
      </BrowserRouter>
    </>
  );
}

export default App;
