import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginApiRequest } from './apiRequest'
import { useAuth } from '../AuthContext'

import login_img from '../.././assets/login.png'

import styles from './LoginPage.module.scss'

function LoginPage() {
  const [responseState, setResponseState] = useState(false)
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  })
  const { user, setUser } = useAuth()
  const [loader, setLoader] = useState(false)

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoader(true)
    const email = inputData.email
    const password = inputData.password

    if (email && password) {
      loginApiRequest(email, password)
        .then((res) => {
          if (res.success === 'User logged in' && res.userLoggedIn.hasAccess) {
            setUser(res.userLoggedIn)
          }
        })
        .catch((err) => {
          setResponseState(err.response?.data)
        })
        .finally(() => {
          setLoader(false)
        })
    }
  }

  useEffect(() => {
    if (user && JSON.stringify(user) !== JSON.stringify(prevUser)) {
      navigate('/warehouse')
    }
  }, [user])

  let prevUser = useRef(user).current

  return (
    <div className={styles.auth}>
      <div className={styles.auth__block}>
        <img src={login_img} alt='login_image' className={styles.auth__image} />
      </div>
      <div className={styles.auth__wrapper}>
        <form
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
              required
              onChange={handleChange}
            />
          </p>
          <p>
            <label htmlFor='image'>Κωδικός πρόσβασης</label>
            <input
              id='password'
              type='password'
              name='password'
              required
              onChange={handleChange}
            />
          </p>
          <div className={styles.block}>
            <button className={styles.button}>
              {loader ? <span className={styles.loader}></span> : 'Είσοδος'}
            </button>
            <div
              className={
                responseState ? styles.response : styles.response__hidden
              }
            >
              {responseState}
            </div>
          </div>
        </form>

        <a href='#'>Ξέχασα τον κωδικό μου</a>
      </div>
    </div>
  )
}

export default LoginPage
