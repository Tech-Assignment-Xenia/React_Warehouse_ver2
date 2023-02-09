import axios from 'axios'

export const loginApiRequest = async (email, password) => {
  const { data } = await axios.post('/login', { email, password })
  return data
}
