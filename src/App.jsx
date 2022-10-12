import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

import Account from "./components/Account/Account";
import EditarInformacion from './components/Account/EditarInformacion'
import Logger from "./components/Login/Logger";
import SignIn from "./components/Login/SignIn";
import Signup from "./components/Login/SignUp";
import Checkout from "./components/checkout/Checkout"
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import ProtectedRouteStudent from "./components/ProtectedRoutes/ProtectedRouteStudent";
import ProtectedRouteTeacher from "./components/ProtectedRoutes/ProtectedRouteTeacher";


import PanelAlumno from "./components/PanelAlumno/PanelAlumno";
import ProgramarClases from './components/PanelAlumno/MisClases/ProgramarClases'
import CalendarioDeClases from './components/PanelAlumno/MisClases/CalendarioDeClases'


import PanelProfessor from './components/PanelProfessor/PanelProfessor'


import Admin from './components/Admin/Admin'
import CreateTeacherAccount from './components/Admin/CreateTeacherAccount'
import ProgramingClassesAsAdmin from './components/Admin/ProgramingClassesAsAdmin'

import Footer from './components/Footer/Footer';




function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <NavBar/>

          <Routes>

            <Route path='/home' element={ <Home /> } />

            <Route path='/logger' element={ <Logger /> } />
            <Route path='/signIn' element={ <SignIn /> } />
            <Route path='/signUp' element={ <Signup /> } />
            
            <Route path='/Admin' element={ <Admin /> } />
            <Route path='/Admin/CreateTeacherAccount' element={ <CreateTeacherAccount /> } />

            <Route
              path='/account'
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />

            <Route path='/Account/EditarInformacion' element={ < EditarInformacion /> } />
            <Route path='/Account/ProgramarClases' element={ <ProgramarClases /> } />
            <Route path='/Account/CalendarioDeClases' element={ <CalendarioDeClases /> } />
            <Route path='/Admin/ProgramingClassesAsAdmin' element={ <ProgramingClassesAsAdmin />} />
            <Route path='/Checkout' element={ <Checkout /> } />

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
                  <PanelProfessor />
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