import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login, MainApp, Register } from '../../pages';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<MainApp />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
