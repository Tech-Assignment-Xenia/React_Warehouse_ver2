// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ProtectedRoute from '../other/ProtectedRoute'
import LoginPage from '../pages/LoginPage/LoginPage'
import ErrorPage from '../pages/ErrorPage/Error'

import './App.scss'
import MainPage from '../pages/MainPage/MainPage'
import { UserProvider } from '../pages/AuthContext'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/warehouse',
        element: (
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  )
}

export default App
