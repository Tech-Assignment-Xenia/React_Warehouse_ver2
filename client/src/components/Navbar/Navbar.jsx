import logo from '../../assets/logo.png'

import { AiFillHome } from 'react-icons/ai'
import { HiOutlineViewGrid } from 'react-icons/hi'
import { HiOutlineTableCells } from 'react-icons/hi2'
import { TbGridDots } from 'react-icons/tb'

import styles from './Navbar.module.scss'
import ExpandedMenu from './ExpandMenu/ExpandedMenu'

function Navbar() {
  const warehouses = [
    {
      name: 'Κεντρική σελίδα',
      image: 'house1.png',
      icon: <AiFillHome />,
      link: '/',
    },
    { name: 'Αποθήκη 1', image: 'w1.png', link: '' },
    { name: 'Αποθήκη 2', image: 'w2.png', link: '' },
    { name: 'Αποθήκη 3', image: 'w3.png', link: '' },
    { name: 'Αποθήκη 4', image: 'w4.png', link: '' },
  ]

  const registration = [
    {
      name: 'Καταχώριση',
      icon: <TbGridDots />,
    },
    ,
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt='logo' className={styles.logo__image}></img>
        <p className={styles.logo__title}>Warehouse management</p>
      </div>
      <ExpandedMenu
        links={warehouses}
        icon={<HiOutlineTableCells />}
        title='Mενου επιλογων'
      />
      <ExpandedMenu
        links={registration}
        icon={<HiOutlineTableCells />}
        title='Kαταχώριση υλικών και κωδικών'
      />
      <div className={styles.settings}>
        <HiOutlineViewGrid className={styles.settings__icon} />
        <p className={styles.settings__title}>Pυθμίσεις</p>
      </div>
    </nav>
  )
}

export default Navbar
