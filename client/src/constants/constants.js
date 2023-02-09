import { AiFillHome } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'

export const menuOptions = [
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

export const registration = [
  {
    id: 1,
    name: 'Καταχώριση',
    icon: <TbGridDots />,
    link: '/registration',
  },
]

export const cards = [
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
