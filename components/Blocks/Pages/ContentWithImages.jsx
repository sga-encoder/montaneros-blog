import ButtonPrimary from '@/components/Buttons/ButtonPrimary'
import Link from 'next/link'
import Imagen from '../Components/Imagen' 

export default function ContentWithImages({ data }) {
  const { titulo, contenido, imagen, estiloDeContenido, nesecitaUrl, url } = data

  if (estiloDeContenido === 'uno') {
    return (
      <article className='flex flex-col-reverse lg:flex-row w-auto mb-20 p-8 rounded-2xl h-full bg-primary-900 drop-shadow-lg'>
        <div className='pt-4 pl-12 lg:pt-0 px-7'>
          <h2 className='text-4xl mb-6 font-titulo font-black text-primary-100'>{titulo}</h2>
          <p className='w-full lg:w-3/4 mb-4 text-primary-100'>
            {contenido}
          </p>
          {
            nesecitaUrl ?
              <ButtonPrimary>
                <Link href={url}>
                  Leer mas ...
                </Link>
              </ButtonPrimary>
              : null
          }
        </div>
        <Imagen data={imagen} style="w-full lg:w-96 h-auto object-cover rounded-2xl transform lg:scale-125" />
      </article>
    )
  } else if (estiloDeContenido === 'dos') {
    return (
      <article className='flex justify-end items-center relative'>
        <div className='bg-primary-900 absolute w-2/3 p-8 rounded-2xl left-4 lg:left-0'>
          <h2 className='text-4xl mb-6 font-titulo font-black text-primary-100'>{ titulo }</h2>
          <p className='text-primary-100'>
            { contenido }
          </p>
        </div>
        <figure className='w-full lg:w-2/3'>
          <Imagen data={imagen} style="rounded-2xl" />
        </figure>
      </article>
    )
  }
}