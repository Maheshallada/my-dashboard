import React from 'react';
import {Route,Router,Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

function App() {
  return (
    <>
   <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
);
}

export default App;
