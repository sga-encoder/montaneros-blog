import Link from 'next/link'

export default function ItemMenu ({ title, href }) {
  return (
    <li className='font-normal text-lg p-3 hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-primary-100'>
      <Link href={href}>{title}</Link>
    </li>
  )
}
