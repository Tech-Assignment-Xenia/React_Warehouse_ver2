// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ProtectedRoute from '../other/ProtectedRoute'
import LoginPage from '../pages/LoginPage/LoginPage'
import HomePage from '../pages/HomePage/HomePage'

import './App.scss'

const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/', element: <HomePage /> },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
