import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Dashboard, Login, Register, Landing, Error } from './pages';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<Error />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
