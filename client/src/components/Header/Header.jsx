import { FaSearch } from 'react-icons/fa'

import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Κεντρική σελίδα</h2>
      <div className={styles.search}>
        <input
          className={styles.search__input}
          type='text'
          placeholder='Αναζήτηση υλικού, έλεγχος αποθεμάτων'
        ></input>
        <div className={styles.search__icon}>
          <FaSearch />
        </div>
      </div>
    </header>
  )
}

export default Header
