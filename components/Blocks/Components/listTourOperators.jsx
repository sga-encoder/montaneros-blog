import ButtonSecondary from '@/components/Buttons/ButtonSecondary'
import Link from 'next/link'
import Imagen from './Imagen'

export default function ListToursOperators({ data, origen, type }) {
  // const { imagenesDePresentacion, nombre, descripcion, id, logo, autor, updatedAt } = data.tourOperadora

  const { autor, updatedAt, imagenes, titulo, slug, categoria } = data

  const date = new Date(updatedAt)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const fecha = date.toLocaleDateString('es-ES', options)
  const time = `${fecha}`

  // const typeWithoutHyphen = type.replace(/-/g, ' ')
  // const typeWithoutCategory = type.replace(/category-/g, ' ')
  const typeWithoutHyphen = type.replace(/category/g, ' ').replace(/-/g, ' ')

  return (
    <div className="p-4 md:w-1/3" >
      <div className="h-full bg-primary-900 rounded-lg overflow-hidden">
          {
            type === 'servicio' ? null :
            <div className="w-full">
              <div className="w-full flex p-2">
                <div className="p-2 ">
                  <Imagen data={autor.photo} style='w-10 h-10 rounded-full overflow-hidden' />
                </div>
                <div className="pl-2 pt-2 ">
                  <p className="font-bold capitalize text-primary-100" >{ autor.nombre } { autor.apellidos} </p>
                  <p className="text-xs text-primary-300">{time}</p>
                </div>
              </div>
            </div>  
          }
        <Imagen data={imagenes[0].imagen} style='lg:h-48 md:h-36 transform scale-90 rounded-2xl w-full object-cover object-center' />
          
        <div className="p-4">
          <h2 className="tracking-widest text-xs  font-bold text-blue-500 mb-1 capitalize">{typeWithoutHyphen} - {categoria}</h2>
          <h1 className="title-font text-lg font-medium text-primary-100 mb-3">{ titulo }</h1>
          <div className="flex items-center flex-wrap ">
            <Link
              href={type === 'servicio' ? `/tour-operadora/${origen}/servicio/${slug}` : `/${type}/${slug}`}
              className="text-secondary-900 md:mb-2 lg:mb-0"
            >
              <p className="inline-flex items-center">
                <ButtonSecondary> 
                  Leer mas
                </ButtonSecondary>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}