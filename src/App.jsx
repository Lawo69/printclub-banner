import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './pages/Home/Home.jsx'

const App = () => {
  return (
    <Router>
      <div className='app'>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
    </Router>
  )
}

export default App;
