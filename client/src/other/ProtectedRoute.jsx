import axios from 'axios'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../pages/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { user, setUser } = useAuth()

  const isAuthorized = true

  if (!isAuthorized || !user.hasAccess) {
    return <Navigate to='/login' replace />
  }
  return children
}

export default ProtectedRoute

//   if (isAuth === undefined) return <LoginPage />

//   //if user is logged in but he is not an admin and try access to admin pages navigate to login page
//   return isAuth && admin && isAuth !== 'admin' ? (
//     <Navigate to='/login' />
//   ) : //if logged in as an admin navigate him to admin pages
//   isAuth && admin ? (
//     <Outlet />
//   ) : //if user logged in as regular user navigate to user pages
//   isAuth && !admin ? (
//     <>
//       <Outlet />
//     </>
//   ) : (
//     <Navigate to='/login' />
//   )
// }

// export default ProtectedRoutes
