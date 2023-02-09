import { useState, useEffect } from 'react'
import { Form, useNavigate } from 'react-router-dom'
import { loginApiRequest } from './apiRequest'
import { useAuth } from '../../hooks/AuthContext'

import login_img from '../.././assets/login.png'

import styles from './LoginPage.module.scss'

function LoginPage() {
  const [responseState, setResponseState] = useState(false)
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  })
  const { user, setUser } = useAuth()
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = inputData.email
    const password = inputData.password
    if (!email || !password) {
      setResponseState('All input required. Please fill in all empty fields.')
      return
    }
    setLoading(true)
    if (email && password) {
      loginApiRequest(email, password)
        .then((res) => {
          if (res.success === 'User logged in' && res.userLoggedIn.hasAccess) {
            setUser(res.userLoggedIn)
            sessionStorage.setItem('user', JSON.stringify(res.userLoggedIn))
          } else {
            throw new Error(
              `You do not have permission to access this resource`
            )
          }
        })
        .catch((err) => {
          setResponseState(err.response?.data || err.message)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }

  useEffect(() => {
    if (user) {
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [user])

  return (
    <div className={styles.auth}>
      <div className={styles.auth__block}>
        <img src={login_img} alt='login_image' className={styles.auth__image} />
      </div>
      <div className={styles.auth__wrapper}>
        <Form
          action='post'
          className={styles.auth__form}
          onSubmit={handleSubmit}
        >
          <h1 className={styles.title}>συνδεση</h1>
          <p>
            <label htmlFor='email'>Δ/νση ηλεκτρονικού ταχυδρομείου¨</label>
            <input
              type='email'
              name='email'
              id='email'
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor='image'>Κωδικός πρόσβασης</label>
            <input
              id='password'
              type='password'
              name='password'
              onChange={handleChange}
            />
          </p>
          <div className={styles.block}>
            <button className={styles.button}>
              {loading ? <span className={styles.loader}></span> : 'Είσοδος'}
            </button>
            <div
              className={
                responseState ? styles.response : styles.response__hidden
              }
            >
              {responseState}
            </div>
          </div>
        </Form>
        <a href='#'>Ξέχασα τον κωδικό μου</a>
      </div>
    </div>
  )
}

export default LoginPage
