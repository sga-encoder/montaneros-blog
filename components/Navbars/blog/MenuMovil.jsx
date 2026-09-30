'use client'

import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import ItemMenu from './ItemMenu'

export default function MenuMovil ({ items }) {
  const [abierto, setAbierto] = useState(false)
  const cerrar = () => setAbierto(false)

  return (
    <>
      <button
        type='button'
        className='sm:hidden p-2 rounded-lg text-primary-100 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-secondary'
        aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={abierto}
        aria-controls='menu-principal'
        onClick={() => setAbierto(!abierto)}
      >
        {abierto ? <HiX className='w-7 h-7' /> : <HiMenu className='w-7 h-7' />}
      </button>
      <ul
        id='menu-principal'
        className={`${abierto ? 'flex' : 'hidden'} absolute top-full left-0 w-full flex-col bg-primary-900/95 backdrop-blur shadow-xl sm:static sm:flex sm:flex-row sm:w-auto sm:gap-6 sm:bg-transparent sm:shadow-none sm:backdrop-blur-none`}
      >
        {items.map((item, index) => (
          <ItemMenu title={item.title} href={item.href} onClick={cerrar} key={index} />
        ))}
      </ul>
    </>
  )
}
