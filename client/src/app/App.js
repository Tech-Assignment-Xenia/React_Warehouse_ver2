import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ProtectedRoute from '../other/ProtectedRoute'
import LoginPage from '../pages/LoginPage/LoginPage'
import HomePage from '../pages/HomePage/HomePage'

import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        {/* <Route element={<ProtectedRoute />}> */}
        <Route path='/' element={<HomePage />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
