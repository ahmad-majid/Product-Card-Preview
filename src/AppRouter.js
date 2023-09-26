import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import App from './App';
import ThankYou from './ThankYou';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
