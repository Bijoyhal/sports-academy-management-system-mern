import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Form from './pages/Form'
import { userAuth } from './context/userContext';
import ImageSlider from './components/ImageSlider';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

const App = () => {
  const { token } = useContext(userAuth);

  return (
    <div>
      <Routes>
        {/* //Login */}
        <Route
          path="/Login"
          element={
            localStorage.getItem("accessToken")
              ? (
                localStorage.getItem("role") === "admin"
                  ? <Navigate to="/Dashboard" replace />
                  : <Navigate to="/Form" replace />
              )
              : <Login />
          }
        />
        {/* Home */}
        <Route
          path="/"
          element={
            localStorage.getItem("accessToken")
              ? (
                localStorage.getItem("role") === "admin"
                  ? <Navigate to="/Dashboard" replace />
                  : <Navigate to="/Form" replace />
              )
              : <Home />
          }
        />
        {/* About */}
        <Route
          path="/About"
          element={
            localStorage.getItem("accessToken")
              ? (
                localStorage.getItem("role") === "admin"
                  ? <Navigate to="/Dashboard" replace />
                  : <Navigate to="/Form" replace />
              )
              : <About />
          }
        />
        {/* Contact */}
        <Route
          path="/Contact"
          element={
            localStorage.getItem("accessToken")
              ? (
                localStorage.getItem("role") === "admin"
                  ? <Navigate to="/Dashboard" replace />
                  : <Navigate to="/Form" replace />
              )
              : <Contact />
          }
        />
        {/* Register */}
        <Route
          path="/Register"
          element={
            localStorage.getItem("accessToken")
              ? (
                localStorage.getItem("role") === "admin"
                  ? <Navigate to="/Dashboard" replace />
                  : <Navigate to="/Form" replace />
              )
              : <Register />
          }
        />
        {/* Form */}
        <Route path='/Form' element={localStorage.getItem("accessToken") && localStorage.getItem("role") === "user" ? <Form /> : <Navigate to='/Login' />} />
        {/* Dashboard */}
        <Route path='/Dashboard' element={localStorage.getItem("accessToken") && localStorage.getItem("role") === "admin" ? <Dashboard /> : <Navigate to='/Login' />} />
      </Routes>
    </div>
  )
}

export default App
