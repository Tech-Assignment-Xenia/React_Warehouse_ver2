import styles from './Error.module.scss'

function Error() {
  return (
    <main className={styles.content}>
      <h1>This page cannot be found!</h1>
      <p>
        An error has occurred. Please try again later or check the URL for
        spelling errors.
      </p>
    </main>
  )
}

export default Error
