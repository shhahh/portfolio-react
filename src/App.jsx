import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* We can add a separate /portfolio route later if we want a dedicated page 
            separate from the one-page scroll layout, 
            but for now Home covers everything. */}
      </Routes>
    </Router>
  );
}

export default App;
