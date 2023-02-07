import axios from 'axios'

export const loginApiRequest = async (email, password) => {
  const { data } = await axios.post('/login', { email, password })
  sessionStorage.setItem('userInfo', JSON.stringify(data.userLoggedIn))
  return data
}
