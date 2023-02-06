import { useState } from 'react'
import styles from './ExpandedMenu.module.scss'

const ExpandedMenu = ({ links, icon, title }) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    setExpanded(!expanded)
  }

  return (
    <>
      <div className={styles.menu} onClick={handleClick}>
        <div className={styles.menu__icon}>{icon}</div>
        <p className={styles.menu__title}>{title}</p>
      </div>
      {expanded ? (
        <ul className={styles.menu__links}>
          {links.map(({ name, image, icon }, idx) => (
            <a href='#' key={idx}>
              <li className={styles.links__li}>
                {icon ? (
                  icon
                ) : (
                  <img src={require(`../../../assets/${image}`)} alt='icon' />
                )}
                {name}
              </li>
            </a>
          ))}
        </ul>
      ) : (
        ''
      )}
    </>
  )
}

export default ExpandedMenu
