import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import { UserUpdatesContextProvider } from "./Context/UserUpdatesContext";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

import Account from "./components/Account/Account";

import SignIn from "./components/Login/SignIn";
import Signup from "./components/Login/SignUp";
import Checkout from "./components/checkout/Checkout";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import ProtectedRouteStudent from "./components/ProtectedRoutes/ProtectedRouteStudent";
import ProtectedRouteTeacher from "./components/ProtectedRoutes/ProtectedRouteTeacher";


import PanelProfessor from "./components/PanelProfessor/PanelProfessor";

import Admin from "./components/Admin/Admin";
import CreateTeacherAccount from "./components/Admin/CreateTeacherAccount/CreateTeacherAccount";
import ProgramingClassesAsAdmin from "./components/Admin/ProgramingClassesAsAdmin/ProgramingClassesAsAdmin";

import Footer from "./components/Footer/Footer";
import MyStudents from "./components/PanelProfessor/MyStudents/MyStudents";


import Panel from "./components/Account/Panel";
import MyCalendario from "./components/PanelProfessor/MyCalendario/MyCalendario";

import MisNotificaciones from "./components/Account/MisNotificaciones/MisNotificaciones";
import ProgramClasses from "./components/PanelAlumno/MyFirstClasses/ProgramClasses/ProgramClasses";
import ReprogramarClase from "./components/PanelAlumno/NextClass/ReprogramarClase/ReprogramarClase";
import NewPanelAlumno from "./components/PanelAlumno/NewPanelAlumno";



function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <UserUpdatesContextProvider>

            <NavBar />
            {/*

            */}
           
            <Routes>

              <Route path="/dev" element={<MyCalendario />} />

              <Route path="/" element={<Home />} />


              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<Signup />} />

              <Route path="/Panel" element={<Panel />} />

              <Route path="/Admin" element={<Admin />} />
              <Route path="/Admin/CreateTeacherAccount" element={<CreateTeacherAccount />} />
              <Route path="/Admin/ProgramingClassesAsAdmin" element={<ProgramingClassesAsAdmin />} />

              <Route path="/Account/ReprogramClass" element={<ReprogramarClase />} />

              <Route path="/Account/Teacher/MyStudents" element={<MyStudents />} />
              
              <Route path="/MiCalendario" element={<MyCalendario />} />

              <Route path="/Checkout" element={<Checkout />} />

              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <Account />
                  </ProtectedRoute>
                }
              />

              <Route path="/Alumn" 
                element={
                  <ProtectedRouteStudent>
                    <NewPanelAlumno />
                  </ProtectedRouteStudent>
                }
              />

              <Route
                path="/Teacher"
                element={
                  <ProtectedRouteTeacher>
                    <PanelProfessor />
                  </ProtectedRouteTeacher>
                }
              />

              <Route path="*" element={<h1>404</h1>} />

              <Route path="/MisNotificaciones" element={<MisNotificaciones />} />
            </Routes>         

            <Footer />

          </UserUpdatesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
