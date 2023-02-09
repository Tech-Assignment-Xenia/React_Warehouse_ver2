import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { UserProvider } from '../hooks/AuthContext'

import MainPage from '../pages/MainPage/MainPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ErrorPage from '../pages/ErrorPage/Error'
import ProtectedRoute from '../other/ProtectedRoute'

import './App.scss'

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
        path: '/',
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
