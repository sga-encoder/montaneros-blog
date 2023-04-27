'use client'

import { IconContext } from 'react-icons'

export default function ItemMenu ({ children }) {
  return (

    <IconContext.Provider value={{ className: 'flex-shrink-0 w-6 h-6 text-primary-200 transition duration-75 group-hover:text-primary-500' }}>
      {children}
    </IconContext.Provider>

  )
}
