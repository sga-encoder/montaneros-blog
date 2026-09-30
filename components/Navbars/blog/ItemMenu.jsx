import Link from 'next/link'

export default function ItemMenu ({ title, href, onClick }) {
  return (
    <li className='font-normal text-lg text-primary-100'>
      <Link href={href} onClick={onClick} className='block px-5 py-3 hover:bg-primary-700 hover:text-secondary-100 sm:p-0 sm:hover:bg-transparent'>{title}</Link>
    </li>
  )
}
