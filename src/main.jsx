import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCRLN_2xzTrvHfN4EDRtETLysu2QWCd9Fk",
  authDomain: "navisacademy-1c1d2.firebaseapp.com",
  projectId: "navisacademy-1c1d2",
  storageBucket: "navisacademy-1c1d2.appspot.com",
  messagingSenderId: "138551732835",
  appId: "1:138551732835:web:ce9005d6cde0708230e656",
  measurementId: "G-VC1HXL8EM6",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
