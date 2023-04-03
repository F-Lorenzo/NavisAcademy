import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import { UserUpdatesContextProvider } from "./Context/UserUpdatesContext";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

const SignIn = lazy(() => import("./components/Login/SignIn"));
const Signup = lazy(() => import("./components/Login/SignUp"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoutes/ProtectedRoute"));
const ProtectedRouteStudent = lazy(() => import("./components/ProtectedRoutes/ProtectedRouteStudent"));
const ProtectedRouteTeacher = lazy(() => import("./components/ProtectedRoutes/ProtectedRouteTeacher"));
const Account = lazy(() => import("./components/Account/Account"));
const Panel = lazy(() => import("./components/Account/Panel"));
const Checkout = lazy(() => import("./components/checkout/Checkout"));
const Admin = lazy(() => import("./components/Admin/Admin"));
const PanelProfessor = lazy(() => import("./components/PanelProfessor/PanelProfessor"));
const MyStudents = lazy(() => import("./components/PanelProfessor/MyStudents/MyStudents"));
const MyCalendario = lazy(() => import("./components/PanelProfessor/MyCalendario/MyCalendario"));
const MisNotificaciones = lazy(() => import("./components/Account/MisNotificaciones/MisNotificaciones"));
const ReprogramarClase = lazy(() => import("./components/PanelAlumno/NextClass/ReprogramarClase/ReprogramarClase"));
const NewPanelAlumno = lazy(() => import("./components/PanelAlumno/NewPanelAlumno"));
const ProtectedRouteAdmin = lazy(() => import("./components/ProtectedRoutes/ProtectedRouteAdmin"));

/*
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
*/



function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <UserUpdatesContextProvider>

            <NavBar />

              <Suspense fallback={<div>Loading...</div>}>

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

              </Suspense>

            <Footer />

          </UserUpdatesContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
