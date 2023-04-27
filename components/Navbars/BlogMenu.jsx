import Imagen from '../Blocks/Components/Imagen'
import ItemMenu from './blog/ItemMenu'
import { catchApiList } from '@/api/payload'

export default async function HomeMenu() {
  const data = await catchApiList({path: '/api/globals/menu', draft: true})
  // console.log(data.logo)
  return (
    <nav className='flex absolute  items-center justify-between bg-transparent px-5 py-6 w-full rounded-b-2xl z-50'>
      <div>
        <Imagen data={data.logo} style={'w-56'} />
      </div>
      <ul className='sm:gap-3 transition-left ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] delay-150  sm:flex  flex flex-col cursor-pointer absolute min-h-screen -left-48 sm:static w-48 top-0 bg-white sm:shadow-none shadow-xl sm:bg-transparent sm:flex-row sm:w-auto sm:min-h-0 dark:bg-slate-900'>
        {
          data.navItems.map((item, index) => {
            return (
            <ItemMenu title={item.link.label} href={item.customSlug ? '/' + item.link.slug : item.link.reference.value.slug} key={index} />
            )
          })
        }
      </ul>
    </nav>
  )
}
