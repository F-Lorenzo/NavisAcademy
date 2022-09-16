import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthContextProvider } from './Context/AuthContext';
import './App.css'


import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';

import Account from './components/Account/Account';
import Logger from './components/Login/Logger';
import SignIn from './components/Login/SignIn';
import Signup from './components/Login/SignUp';
import ProtectedRoute from './components/ProtectedRoutes/ProtectedRoute';
import ProtectedRouteStudent from './components/ProtectedRoutes/ProtectedRouteStudent';
import ProtectedRouteTeacher from './components/ProtectedRoutes/ProtectedRouteTeacher';

import TecherProfileContainer from './components/teacherProfile/TecherProfileContainer';
import PanelAlumno from './components/PanelAlumno/PanelAlumno';

import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
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

            <Route
              path='/Alumn'
              element={
                <ProtectedRouteStudent>
                  <PanelAlumno />
                </ProtectedRouteStudent>
              }
            />

            <Route
              path='/Teacher'
              element={
                <ProtectedRouteTeacher>
                  <h1>Teacher Profile</h1>
                </ProtectedRouteTeacher>
              }
            />   
            
            <Route path="*" element={ <h1>404</h1> } />
          </Routes>

          <Footer />

        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
