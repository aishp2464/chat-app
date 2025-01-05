import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'
import Chat from './pages/Chat/Chat';

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/chat' element={<Chat/>}/>
      <Route path='/profile' element={<ProfileUpdate/>}/>
    </Routes>
    </>
  )
}

export default App