import Card from './Card/Card'

import styles from './MainContent.module.scss'

function MainContent() {
  const cards = [
    {
      title: 'Εξαγωγη',
      image: 'Ellipse_red.png',
    },
    {
      title: 'Μετακινηση',
      image: 'Ellipse_yellow.png',
    },
    {
      title: 'Εισαγωγη',
      image: 'Ellipse_green.png',
    },
  ]
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
