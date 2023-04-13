import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./Context/AuthContext";
import { UserUpdatesContextProvider } from "./Context/UserUpdatesContext";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

const SignIn = lazy(() => import("./components/Login/SignIn"));
const Signup = lazy(() => import("./components/Login/SignUp"));
const ProtectedRoute = lazy(() => import("./components/ProtectedRoutes/ProtectedRoute"));
const Account = lazy(() => import("./components/Account/Account"));
const Panel = lazy(() => import("./components/Account/Panel"));
const MyStudents = lazy(() => import("./components/PanelProfessor/MyStudents/MyStudents"));
const MyCalendario = lazy(() => import("./components/PanelProfessor/MyCalendario/MyCalendario"));
const MisNotificaciones = lazy(() => import("./components/Account/MisNotificaciones/MisNotificaciones"));
const ReprogramarClase = lazy(() => import("./components/PanelAlumno/NextClass/ReprogramarClase/ReprogramarClase"));

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <UserUpdatesContextProvider>

            <NavBar />

              <Suspense fallback={<Loader />}>

                <Routes>

                  <Route path="/" element={<Home />} />

                  <Route path="/signIn" element={<SignIn />} />
                  <Route path="/signUp" element={<Signup />} />

                  <Route path="/MisNotificaciones" element={<MisNotificaciones />} />

                  <Route path="/Account/ReprogramClass" element={<ReprogramarClase />} />
                  <Route path="/Account/Teacher/MyStudents" element={<MyStudents />} />             
                  <Route path="/MiCalendario" element={<MyCalendario />} />
                  
                  <Route path="/Panel" element={
                    <ProtectedRoute>
                      <Panel />
                    </ProtectedRoute>
                  }/>

                  <Route path="/account" element={
                      <ProtectedRoute>
                        <Account />
                      </ProtectedRoute>
                  }/>

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
