import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import QuizPage from './pages/quiz'
import ResultPage from './pages/result'
import LandingPage from './pages/landing'

const Routers = () => {
  return <Router>
    <Routes>
      <Route path='/' element={<Outlet />}>
        <Route path='' element={<LandingPage />} ></Route>
        <Route path='/quiz' element={<QuizPage />}></Route>
        <Route path='/result' element={<ResultPage />}></Route>
      </Route>
    </Routes>
  </Router>
}

export default Routers
