import Imagen from '@/components/Blocks/Components/Imagen'
import Link from 'next/link';


export default function RelationshipComponent({ item }) {
    if (item.relationTo === 'paginas') {
      return (
        <Link href={`/${item.value.slug}`} className='m-6'> 
          <div className='w-2/4 m-auto relative'>
            <Imagen data={item.value.encabezado.imagenDeCabecera[0].imagen} style={"object-cover w-full h-full rounded-2xl"}/>
            <h1 className='absolute bottom-8 left-4 text-primary-100 capitalize text-lg'>{item.value.titulo}</h1>
          </div>
        </Link>
      )
    } else if (item.relationTo === 'blog') {
      return (
        <Link href={`/blog/${item.value.slug}`} className='m-6'> 
          <div className='w-2/4 m-auto relative'>
            <Imagen data={item.value.imagen} style={"object-cover w-full h-full rounded-2xl"}/>
            <h1 className='absolute bottom-6 left-4 text-primary-100 capitalize text-lg'>{item.value.titulo}</h1>
          </div>
        </Link>
      )
    } else if (item.relationTo === 'tour-operadora') {
      return (
        <Link href={`/tour-operadora/${item.value.slug}`} className='m-6'> 
          <div className='w-2/4 m-auto relative'>
            <Imagen data={item.value.imagenesDePresentacion[0].imagen} style={"object-cover w-full h-full rounded-2xl"}/>
            <h1 className='absolute bottom-6 left-4 text-primary-100 capitalize text-lg'>{item.value.titulo}</h1>
          </div>
        </Link>
      )
    }
}