import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Drop.module.scss'

const DropMenu = ({ links, icon, title }) => {
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
          {links.map(({ id, name, image, icon, link, end }) => (
            <li className={styles.links__li} key={id}>
              <NavLink
                to={link}
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
                end={end}
              >
                {icon ? (
                  icon
                ) : (
                  <img
                    src={require(`../../../assets/${image}`)}
                    alt='icon'
                    className={styles.img}
                  />
                )}
                <p>{name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </>
  )
}

export default DropMenu
