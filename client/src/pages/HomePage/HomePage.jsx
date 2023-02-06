import Header from '../../components/Header/Header'
import MainContent from '../../components/MainContent/MainContent'
import Navbar from '../../components/Navbar/Navbar'

import styles from './HomePage.module.scss'

function HomePage() {
  return (
    <main className={styles.grid}>
      <Navbar />
      <MainContent />
      <Header />
    </main>
  )
}

export default HomePage
