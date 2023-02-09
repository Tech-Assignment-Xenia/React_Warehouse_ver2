import { registration, menuOptions } from '../../constants/constants'
import DropMenu from './DropMenu/DropMenu'
import logo from '../../assets/logo.png'

import { HiOutlineViewGrid } from 'react-icons/hi'
import { HiOutlineTableCells } from 'react-icons/hi2'

import styles from './Navbar.module.scss'

function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt='logo' className={styles.logo__image}></img>
          <p className={styles.logo__title}>Warehouse management</p>
        </div>
        <DropMenu
          links={menuOptions}
          icon={<HiOutlineTableCells />}
          title='Mενου επιλογων'
        />
        <DropMenu
          links={registration}
          icon={<HiOutlineTableCells />}
          title='Kαταχώριση υλικών και κωδικών'
        />
        <div className={styles.settings}>
          <HiOutlineViewGrid className={styles.settings__icon} />
          <p className={styles.settings__title}>Pυθμίσεις</p>
        </div>
      </nav>
    </>
  )
}

export default Navbar
