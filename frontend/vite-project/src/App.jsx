import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home'
import Tasks from './components/tasks'

const App = () => {
  return (
    <>
       <Routes>
         <Route path="/" element={ <Home />} />
         <Route path="/tasks" element={<Tasks/>} />
       </Routes>
    </>
  )
}

export default App