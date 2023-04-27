import Link from 'next/link'
import Icon from './Icon'
export default function ItemMenuDashboard ({ icon, title, href }) {
  return (
    <li>
      <Link href={href} className='px-3 py-3 text-sm font-medium flex items-center space-x-2 hover:bg-primary-700'>
        <span>
          <Icon>{icon} </Icon>
        </span>
        <span className='text-primary-100'> {title} </span>
      </Link>
    </li>
  )
}
