import Dropdown from './Dashboard/Dropdown'

export default function DashboardNavbar ({ title }) {
  return (
    <nav className='flex items-center relative justify-between bg-primary-800 px-5 py-6 w-full'>
      <ul id='drawer' role='menu' className='sm:gap-3 transition-left ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] delay-150  sm:flex  flex flex-col cursor-pointer absolute min-h-screen -left-48 sm:static w-48 top-0 bg-primary-900 sm:shadow-none shadow-xl sm:bg-transparent sm:flex-row sm:w-auto sm:min-h-0  '>
        <li className='font-bold text-lg p-3 hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-primary-100'>
          <p className='text-white'>{title}</p>
        </li>
      </ul>
      <Dropdown />
    </nav>
  )
}
