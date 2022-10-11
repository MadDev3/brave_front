import React from 'react';
import './App.css';
import SignUp from './pages/signup';
import {
  Routes,
  Route,
  Link
} from 'react-router-dom'
import SignIn from './pages/SignIn';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
