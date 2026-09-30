import Link from 'next/link'
import Imagen from '../Blocks/Components/Imagen'
import MenuMovil from './blog/MenuMovil'
import { catchApiList } from '@/api/payload'

export default async function HomeMenu() {
  const data = await catchApiList({path: '/api/globals/menu', draft: true})
  const items = data.navItems.map((item) => ({
    title: item.link.label,
    href: item.customSlug ? '/' + item.link.slug : item.link.reference.value.slug
  }))

  // Barra fija y con fondo propio: al estar en el flujo, las cabeceras empiezan
  // debajo de ella y sus fotos rotadas no tapan los enlaces.
  return (
    <nav className='sticky top-0 z-50 flex items-center justify-between w-full px-5 py-3 bg-primary/80 backdrop-blur shadow-lg'>
      <Link href='/'>
        <Imagen data={data.logo} style='w-40 sm:w-48' />
      </Link>
      <MenuMovil items={items} />
    </nav>
  )
}
