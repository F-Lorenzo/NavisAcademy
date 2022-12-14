import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import { UserUpdatesContextProvider } from "./Context/UserUpdatesContext";
import "./App.css";

import OldNavBar from "./components/NavBar/OldNavBar";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

import Account from "./components/Account/Account";
import EditarInformacion from "./components/Account/EditarInformacion";
import Logger from "./components/Login/Logger";
import SignIn from "./components/Login/SignIn";
import Signup from "./components/Login/SignUp";
import Checkout from "./components/checkout/Checkout";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import ProtectedRouteStudent from "./components/ProtectedRoutes/ProtectedRouteStudent";
import ProtectedRouteTeacher from "./components/ProtectedRoutes/ProtectedRouteTeacher";

import PanelAlumno from "./components/PanelAlumno/PanelAlumno";

import PanelProfessor from "./components/PanelProfessor/PanelProfessor";

import Admin from "./components/Admin/Admin";
import CreateTeacherAccount from "./components/Admin/CreateTeacherAccount/CreateTeacherAccount";
import ProgramingClassesAsAdmin from "./components/Admin/ProgramingClassesAsAdmin/ProgramingClassesAsAdmin";

import Footer from "./components/Footer/Footer";
import MyStudents from "./components/PanelProfessor/MyStudents/MyStudents";
import AllMyClasses from "./components/PanelProfessor/MyClasses/AllMyClasses/AllMyClasses";
import MyClassesOfThePastMonth from "./components/PanelProfessor/MyClasses/MyClassesOfThePastMonth";
import Panel from "./components/Account/Panel";
import MyCalendario from "./components/PanelProfessor/MyClasses/AllMyClasses/MyCalendario";

import MisNotificaciones from "./components/Account/MisNotificaciones/MisNotificaciones";
import DiaHoraClase from "./components/DiaHoraClase/DiaHoraClase";
import ReprogramarClase from "./components/PanelAlumno/MisClases/ReprogramarClase";



function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <UserUpdatesContextProvider>

            <NavBar />
            {/*
            <OldNavBar />
            */}

            
            <Routes>

              <Route path="/dev" element={<ReprogramarClase />} />

              <Route path="/" element={<Home />} />

              <Route path="/logger" element={<Logger />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<Signup />} />

              <Route path="/Panel" element={<Panel />} />

              <Route path="/Admin" element={<Admin />} />
              <Route path="/Admin/CreateTeacherAccount" element={<CreateTeacherAccount />} />
              <Route path="/Admin/ProgramingClassesAsAdmin" element={<ProgramingClassesAsAdmin />} />

              <Route path="/Account/EditarInformacion" element={<EditarInformacion />} />
              <Route path="/Account/ProgramarClases" element={<DiaHoraClase />} />
              <Route path="/Account/ReprogramClass" element={<ReprogramarClase />} />

              <Route path="/Account/Teacher/MyStudents" element={<MyStudents />} />
              <Route path="/Account/Teacher/AllMyClasses" element={<AllMyClasses />} />
              <Route path="/Account/Teacher/TestFilters" element={<MyClassesOfThePastMonth />} />
              
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
                    <PanelAlumno />
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
