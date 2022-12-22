import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import { UserUpdatesContextProvider } from "./Context/UserUpdatesContext";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/Login/SignIn";
import Signup from "./components/Login/SignUp";
import Loader from "./components/Loader/Loader";

import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import ProtectedRouteStudent from "./components/ProtectedRoutes/ProtectedRouteStudent";
import ProtectedRouteTeacher from "./components/ProtectedRoutes/ProtectedRouteTeacher";
import Account from "./components/Account/Account";
import Panel from "./components/Account/Panel";
import Checkout from "./components/checkout/Checkout";

import Admin from "./components/Admin/Admin";
import CreateTeacherAccount from "./components/Admin/CreateTeacherAccount/CreateTeacherAccount";
import ProgramingClassesAsAdmin from "./components/Admin/ProgramingClassesAsAdmin/ProgramingClassesAsAdmin";

import PanelProfessor from "./components/PanelProfessor/PanelProfessor";
import MyStudents from "./components/PanelProfessor/MyStudents/MyStudents";

import MyCalendario from "./components/PanelProfessor/MyCalendario/MyCalendario";

import MisNotificaciones from "./components/Account/MisNotificaciones/MisNotificaciones";
import ReprogramarClase from "./components/PanelAlumno/NextClass/ReprogramarClase/ReprogramarClase";
import NewPanelAlumno from "./components/PanelAlumno/NewPanelAlumno";
/*

const ProtectedRoute = lazy(() => import('./components/ProtectedRoutes/ProtectedRoute'));
const ProtectedRouteStudent = lazy(() => import('./components/ProtectedRoutes/ProtectedRouteStudent'));
const ProtectedRouteTeacher = lazy(() => import('./components/ProtectedRoutes/ProtectedRouteTeacher'));
const Account = lazy(() => import('./components/Account/Account'));
const Panel = lazy(() => import('./components/Account/Panel'));
const Checkout = lazy(() => import('./components/checkout/Checkout'));
const Admin = lazy(() => import('./components/Admin/Admin'));
const CreateTeacherAccount = lazy(() => import('./components/Admin/CreateTeacherAccount/CreateTeacherAccount'));
const ProgramingClassesAsAdmin = lazy(() => import('./components/Admin/ProgramingClassesAsAdmin/ProgramingClassesAsAdmin'));
const PanelProfessor = lazy(() => import('./components/PanelProfessor/PanelProfessor'));
const MyStudents = lazy(() => import('./components/PanelProfessor/MyStudents/MyStudents'));
const MyCalendario = lazy(() => import('./components/PanelProfessor/MyCalendario/MyCalendario'));
const MisNotificaciones = lazy(() => import('./components/Account/MisNotificaciones/MisNotificaciones'));
const ReprogramarClase = lazy(() => import('./components/PanelAlumno/NextClass/ReprogramarClase/ReprogramarClase'));
const NewPanelAlumno = lazy(() => import('./components/PanelAlumno/NewPanelAlumno'));
*/



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

              <Route path="/" element={<Home />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<Signup />} />

              {/* Lazy Load */}

              <Route path="/Admin" element={<Admin />} />
              <Route path="/Admin/CreateTeacherAccount" element={<CreateTeacherAccount />} />
              <Route path="/Admin/ProgramingClassesAsAdmin" element={<ProgramingClassesAsAdmin />} />
              
              <Route path="/Panel" element={<Panel />} />

              <Route path="/Account/ReprogramClass" element={<ReprogramarClase />} />
              <Route path="/Account/Teacher/MyStudents" element={<MyStudents />} />             
              <Route path="/MiCalendario" element={<MyCalendario />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/MisNotificaciones" element={<MisNotificaciones />} />

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

            </Routes>         

            <Footer />

          </UserUpdatesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
