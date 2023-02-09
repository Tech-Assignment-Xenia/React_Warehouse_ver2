import { createContext, useContext, useState } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')))

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const useAuth = () => useContext(UserContext)
