import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import { UserUpdatesContextProvider } from "./Context/UserUpdatesContext";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import SignIn from "./components/Login/SignIn";
import Signup from "./components/Login/SignUp";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import ProtectedRouteStudent from "./components/ProtectedRoutes/ProtectedRouteStudent";
import ProtectedRouteTeacher from "./components/ProtectedRoutes/ProtectedRouteTeacher";
import Account from "./components/Account/Account";
import Panel from "./components/Account/Panel";
import Checkout from "./components/checkout/Checkout";
import Admin from "./components/Admin/Admin";
import PanelProfessor from "./components/PanelProfessor/PanelProfessor";
import MyStudents from "./components/PanelProfessor/MyStudents/MyStudents";
import MyCalendario from "./components/PanelProfessor/MyCalendario/MyCalendario";
import MisNotificaciones from "./components/Account/MisNotificaciones/MisNotificaciones";
import ReprogramarClase from "./components/PanelAlumno/NextClass/ReprogramarClase/ReprogramarClase";
import NewPanelAlumno from "./components/PanelAlumno/NewPanelAlumno";
import ProtectedRouteAdmin from "./components/ProtectedRoutes/ProtectedRouteAdmin";


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <UserUpdatesContextProvider>

            <NavBar />
           
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<Signup />} />
              
              <Route path="/Panel" element={<Panel />} />

              <Route path="/Account/ReprogramClass" element={<ReprogramarClase />} />
              <Route path="/Account/Teacher/MyStudents" element={<MyStudents />} />             
              <Route path="/MiCalendario" element={<MyCalendario />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/MisNotificaciones" element={<MisNotificaciones />} />

              <Route path="/account" element={
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

              <Route 
                path="/Admin"
                element={
                  <ProtectedRouteAdmin>
                    <Admin />
                  </ProtectedRouteAdmin>
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
