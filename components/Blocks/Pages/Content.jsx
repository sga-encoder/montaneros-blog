import Image from 'next/image'
import ButtonPrimary from '@/components/Buttons/ButtonPrimary'
import Link from 'next/link'
import Imagen from '../Components/Imagen'

export default function Content({ data }) {
  const { titulo, contenido, nesecitaUnRecurso, recurso, nesecitaUrl, url } = data

  return (
    <article className='h-96 relative rounded-2xl'>
      {
        nesecitaUnRecurso ?
          <Imagen data={recurso.recurso} style="w-auto h-full rounded-2xl" />
          : null  
      }
      <div className='flex w-auto pt-10 justify-center items-center flex-col absolute top-0 drop-shadow-lg'>
        <h2 className='text-6xl mb-4 font-titulo font-bold text-primary-100 text-center'>{titulo}</h2>
        <p className='mb-4 text-primary-100 w-3/4'>
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
    </article>
  )
}