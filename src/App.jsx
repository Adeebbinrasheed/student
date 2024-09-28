import React from 'react'
import Detail from './Components/Detail'
import { Route, Routes } from 'react-router-dom'
import Student from './Components/Student'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Detail/>}/>
      <Route path='/student' element={<Student/>}/>
    </Routes>
    
  )
}

export default App