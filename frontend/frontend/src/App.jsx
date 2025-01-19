import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Corrected import
import Login from './pages/Login';
import SignUp from './pages/signup';
import ForgotPassword from './pages/forgotpass';
import ResetPassword from './pages/resetpass';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />  // Redirect to Login by default
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<SignUp  />} />
        <Route path="/forgotpass" element={<ForgotPassword  />} />
        <Route path="/resetpass" element={<ResetPassword  />} />
      </Routes>
    </Router>
  );
}

export default App;