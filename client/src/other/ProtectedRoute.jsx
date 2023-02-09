import axios from 'axios'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '../hooks/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()
  const [isAuth, setIsAuth] = useState({})

  useEffect(() => {
    axios
      .get('/get-token')
      .then((res) => {
        if (res.status !== 200) {
          throw new Error('User is unauthorized')
        } else {
          setIsAuth(res.data)
        }
      })
      .catch((err) => {
        //auto-logout if token is expired
        console.error(err.response)
        sessionStorage.clear()
        window.location.assign('/login')
      })
  }, [isAuth])

  if (!isAuth || !user?.hasAccess) {
    return <Navigate to='/login' replace />
  }

  return children
}

export default ProtectedRoute
