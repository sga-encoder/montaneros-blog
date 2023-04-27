import Imagen from '@/components/Blocks/Components/Imagen'
import SocialNetwork from '@/components/Blocks/Components/TourOperadora/SocialNetwork'
import Gallery from '@/components/Blocks/TourOperadores/Gallery'
import DescriptionLong from '@/components/Blocks/TourOperadores/DescriptionLong'
import Map from '@/components/Blocks/TourOperadores/Map'
import Services from '@/components/Blocks/TourOperadores/Services'
import { catchApi } from '@/api/payload'
import { BsFillPinMapFill } from 'react-icons/bs'
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai'
import { TbWorldWww } from 'react-icons/tb'

export default async function TourOparator ({ params }) {
  const { id } = params
  const data = await catchApi({path: '/api/tour-operadora', id, draft: true})


  const { imagenes, titulo, descripcion, logo, categoria, redesSociales, nesecitaDireccion, direccion, nesecitaEmail, nesecitaTelefono, nesecitaWeb, urlWeb, email, telefono, secciones } = data

  const urlWebCheck = (url) => {
    if (url.includes('http://') || url.includes('https://')) {
      return url
    } else {
      return `https://${url}`
    }
  }

  const ifButton = () => { 
     if (nesecitaWeb) {
      return (
        <a href={urlWebCheck(urlWeb)} target='_blank' className='bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg'>Ver Web</a>
      )
    } else if (nesecitaTelefono) {
      return (
        <a href={`tel:${telefono}`} target='_blank' className='bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg'>Telefono</a>
      )
    } else if (nesecitaEmail) {
      return (
        <a href={`mailto:${email}`} target='_blank' className='bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg'>Enviar un Email</a>
      )
    } else {
      return (null)
    }
  }

  //verifica si urlWeb tiene http:// o https:// y si no lo tiene lo agrega


  return (
    <>
      <main className=' py-6 px-4 sm:p-6 md:py-10 md:px-8'>
        <div className=' mt-12 max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2'>
          <div className='lg:mx-0 relative p-7 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1'>
            <div className='flex justify-between'>
              <div className='flex items-start flex-col justify-center'>
                <p className='text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400'>Operador Turistico - { categoria }</p>
                <h1 className='mt-1 text-lg  font-semibold text-white sm:text-primary-100 md:text-2xl dark:sm:text-white'>{titulo}</h1>
              </div>
              <div className='w-20 h-20 mr-4'>
                <Imagen data={logo} style='w-20 h-20 object-cover mb-0 sm:-mb-8 sm:mr-4' />
              </div>
            </div>
          </div>
          <div className='grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0'>
            <Imagen data={imagenes[0].imagen} style='w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full' />
            <Imagen data={imagenes[1].imagen} style='hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32' />
            <Imagen data={imagenes[2].imagen} style='hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32' />
          </div>

          <p className="text-base font-medium flex items-center row-start-2 sm:row-start-3 lg:row-start-2">
            {
              redesSociales.map((redSocial, index) => {
                return (<SocialNetwork data={ redSocial } key={index} />)
              })
            }

          </p>
          <div className='mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4'>
            {ifButton()}
          </div>
          <p className='mt-4 text-sm leading-6 text-primary-100 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400'>
            {descripcion}
          </p>
        </div>
        
        {
          secciones.map((seccion, index) => {
            if (seccion.blockType === 'galeria') {
              // console.log(seccion)
              return <Gallery data={seccion.galeria} width={'w-full lg:w-3/4'} height={'h-96'} key={index} />
            } else if (seccion.blockType === 'descripcion-larga') {
              return <DescriptionLong data={seccion} key={index} />
            } else if (seccion.blockType === 'Mapa') {
              return <Map data={seccion} key={index} />
            } else if (seccion.blockType === 'servicios') {
              return <Services data={seccion} origen={id} key={index} />
            }
          })
        }
      </main>
      <footer className='sticky bottom-4 w-full mx-4 py-2 flex items-center justify-evenly bg-primary-900 rounded-2xl text-primary-100'>
        {
          nesecitaDireccion && (
            <div className='flex items-center'> 
              <BsFillPinMapFill />
              <p className='text-primary-100'>{direccion}</p>
            </div>
          )
        }
        {
          nesecitaEmail && (
            <div className='flex items-center'> 
              <AiOutlineMail />
              <a href={`https://${urlWeb}`}className='text-primary-100'>{email}</a>
            </div>
          )
        }
        {
          nesecitaTelefono && (
            <div className='flex items-center'>
              <AiFillPhone />
              <a href={`tel:${telefono}`} className='text-primary-100'>{telefono}</a>
            </div>
          )
        }
        {
          nesecitaWeb && (
            <div className='flex items-center'>
              <a href={urlWebCheck(urlWeb)} className='text-primary-100'>{urlWeb}</a>
            </div>
          )
        }
      </footer>
    </>
  )
}
