import DropMenu from './DropMenu/DropMenu'

import logo from '../../assets/logo.png'

import { AiFillHome } from 'react-icons/ai'
import { HiOutlineViewGrid } from 'react-icons/hi'
import { HiOutlineTableCells } from 'react-icons/hi2'
import { TbGridDots } from 'react-icons/tb'

import styles from './Navbar.module.scss'

function Navbar() {
  const warehouses = [
    {
      id: 1,
      name: 'Κεντρική σελίδα',
      image: 'house1.png',
      icon: <AiFillHome />,
      link: '/',
      end: true,
    },
    { id: 2, name: 'Αποθήκη 1', image: 'w1.png', link: '/w1' },
    { id: 3, name: 'Αποθήκη 2', image: 'w2.png', link: '/w2' },
    { id: 4, name: 'Αποθήκη 3', image: 'w3.png', link: '/w3' },
    { id: 5, name: 'Αποθήκη 4', image: 'w4.png', link: '/w4' },
  ]

  const registration = [
    {
      id: 1,
      name: 'Καταχώριση',
      icon: <TbGridDots />,
      link: '/registration',
    },
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt='logo' className={styles.logo__image}></img>
        <p className={styles.logo__title}>Warehouse management</p>
      </div>
      <DropMenu
        links={warehouses}
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
  )
}

export default Navbar
