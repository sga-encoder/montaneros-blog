/* eslint-disable react/jsx-closing-tag-location */
'use client'
import ItemDropdown from './ItemDropdown'
import { AiOutlineHeart, AiFillSetting } from 'react-icons/ai'
import { FiLogOut } from 'react-icons/fi'
import { useState } from 'react'

export default function Dropdown () {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='flex gap-3 items-center'>
      <div className="h-10 w-10 hover:ring-4 user cursor-pointer relative ring-blue-700/30 rounded-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80')]" onClick={() => { setToggle(!toggle) }}>
        {
          toggle
            ? null
            : <div className='w-48 overflow-hidden bg-primary-800 rounded-md shadow absolute top-12 right-3'>
              <ul>
                <ItemDropdown title='Setting' icon={<AiFillSetting />} href='/settings' />
                <ItemDropdown title='Wishlist' icon={<AiOutlineHeart />} href='/wishlist' />
                <ItemDropdown title='Logout' icon={<FiLogOut />} href='/logout' />

              </ul>
            </div>
        }
      </div>
      <div className='sm:hidden cursor-pointer' id='mobile-toggle'>
        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
          <path className='dark:stroke-white' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16' />
        </svg>
      </div>
    </div>
  )
}
