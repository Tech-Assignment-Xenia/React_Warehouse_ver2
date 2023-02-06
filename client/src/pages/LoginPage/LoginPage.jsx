import styles from './LoginPage.module.scss'
import login_img from '../.././assets/login.png'

function LoginPage() {
  return (
    <div className={styles.auth}>
      <div className={styles.auth__block}>
        <img src={login_img} alt='login_image' className={styles.auth__image} />
      </div>
      <div className={styles.auth__wrapper}>
        <form action='' className={styles.auth__form}>
          <h1 className={styles.title}>συνδεση</h1>
          <p>
            <label htmlFor='email'>Δ/νση ηλεκτρονικού ταχυδρομείου¨</label>
            <input type='email' name='email' id='email' required />
          </p>
          <p>
            <label htmlFor='image'>Κωδικός πρόσβασης</label>
            <input id='password' type='password' name='password' required />
          </p>
          <div className={styles.button}>
            <button type='button'>Είσοδος</button>
          </div>
        </form>
        <a href='#'>Ξέχασα τον κωδικό μου</a>
      </div>
    </div>
  )
}

export default LoginPage
