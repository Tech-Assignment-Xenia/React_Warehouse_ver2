import Header from '../../components/Header/Header'
import MainContent from '../../components/MainContent/MainContent'
import Navbar from '../../components/Navbar/Navbar'

import styles from './MainPage.module.scss'

function MainPage() {
  return (
    <main className={styles.grid}>
      <Navbar />
      <MainContent />
      <Header />
    </main>
  )
}

export default MainPage
