import styles from './Card.module.scss'

function Card({ title, image }) {
  const description = 'Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη'

  return (
    <div className={styles.card}>
      <img
        src={require(`../../.././assets/${image}`)}
        alt='ellipse'
        className={styles.card__image}
      />
      <div className={styles.card__body}>
        <p className={styles.card__title}>{title}</p>
        <p className={styles.card__desc}>{description}</p>
      </div>
    </div>
  )
}

export default Card
