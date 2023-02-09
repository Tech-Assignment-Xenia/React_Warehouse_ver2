import { cards } from '../../constants/constants'
import Card from './Card/Card'

import styles from './MainContent.module.scss'

function MainContent() {
  return (
    <main className={styles.main__content}>
      <div className={styles.wrapper}>
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </div>
    </main>
  )
}

export default MainContent
