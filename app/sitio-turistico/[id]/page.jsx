import Imagen from "@/components/Blocks/Components/Imagen"
import { catchApi } from "@/api/payload"
import Carousel from "@/components/Blocks/Components/TourOperadora/Carousel"
import SocialNetwork from '@/components/Blocks/Components/TourOperadora/SocialNetwork'


export default async function TouristSite({ params }) {
  const { id} = params
  const data = await catchApi({path: '/api/sitio-turistico', id, draft: true})

  // formtear precios con moneda y punto decimal
  const formatPrice = (price) => {
    const newPrice = price.toString().split('.')
    return newPrice[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const typeWithoutHyphen = (text) => {
    return text.replace(/-/g, ' ')
  }

  const iframeSinComillas = text => text.replace(/['"]+/g, '')


  const ifButton = () => { 
    if (data.datosDeContacto.nesecitaWeb) {
      return (
        <a href={`https://${data.datosDeContacto.urlWeb}`} target='_blank' className='bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg'>Ver Web</a>
      )
    } else if (data.datosDeContacto.nesecitaTelefono) {
      return (
        <a href={`tel:${data.datosDeContacto.telefono}`} target='_blank' className='bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg'>Telefono</a>
      )
    } else if (data.datosDeContacto.nesecitaEmail) {
      return (
        <a href={`mailto:${data.datosDeContacto.email}`} target='_blank' className='bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg'>Enviar un Email</a>
      )
    } else {
      return (
        <a href={'#'} target='_blank' className='bg-indigo-600 text-primary-300 text-sm leading-6 font-medium py-2 px-3 rounded-lg'>no hay forma de contacto</a>
      )
    }
  }

  return (
    <>
      <main className=' py-6 px-4 sm:p-6 md:py-10 md:px-8'>
        <div className=' mt-12 max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2'>
          <div className='lg:mx-0 relative p-7 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1'>
            <div className='flex justify-between'>
              <div className='flex items-start flex-col justify-center'>
                <p className='text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400'>{data.categoria}</p>
                <h1 className='mt-1 text-lg  font-semibold text-white sm:text-primary-100 md:text-2xl dark:sm:text-white capitalize'>{data.titulo}</h1>
              </div>
              {
                data.tienesLogo ?
                <div className="m-20 h-20 mr-4">
                  <Imagen data={data.logo} style='w-20 h-20 object-cover mb-0 sm:-mb-8 sm:mr-4' />
                </div>
                : null
              }
              </div>
          </div>
          <div className='grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-1 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0'>
            <Imagen data={data.imagenes[0].imagen} style='w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full lg:h-full' />
          </div>
          <p className="text-base font-medium flex items-center row-start-2 sm:row-start-3 lg:row-start-2">
            {
              data.redesSociales.map((redSocial, index) => {
                return <SocialNetwork data={ redSocial } key={index} />
              })
            }

          </p>
          <div className='mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4'>
            {ifButton()}
          </div>
          <p className='mt-4 text-sm leading-6 text-primary-100 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400 '>
            {data.descripcion}
          </p>
        </div>
        <div className="flex items-center justify-center content-center flex-col md:flex-row md:items-start">
          <div className="w-full h-auto lg:w-1/3 lg:h-auto">
            <h2 className='mt-12 text-4xl font-extrabold text-primary-100 w-auto text-center'>Galeria</h2>
            <Carousel data={data.imagenes} width='w-full' height='h-96'/>
          </div>
          {
            data.categoria === 'restaurante' || data.categoria === 'restaurante-de-comida-tipica'
              ?
              <div className='w-full lg:w-2/3'>
                <h2 className='mt-12 text-4xl font-extrabold text-primary-100 w-auto text-center'>Menu</h2>
                <div className="mt-8 lg:pl-6 flex items-center justify-center">
                  <div className="col-span-12">
                    <div className="overflow-auto lg:overflow-visible ">
                      <table className="table text-gray-400 border-separate space-y-6 text-sm" style={{borderSpacing: '0 15px'}}>
                        <thead className=" text-gray-500">
                          <tr>
                            <th className="bg-primary-900 p-3 rounded-l-2xl">nombre</th>
                            <th className="bg-primary-900 p-3 text-center">Descripcion</th>
                            <th className="bg-primary-900 p-3 text-left">precio</th>
                            <th className="bg-primary-900 p-3 text-left rounded-r-2xl">imagenes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            data.menu.map((item, index) => {
                              const {nombre, precio, nesecitaDescripcion, descripcion, neseitaImagenes, imagenes} = item
                              return (
                                <tr className="bg-primary-900" key={index}>
                                  <td className="p-3 rounded-l-2xl">
                                    {nombre}
                                  </td>
                                  <td className="p-3 text-center">
                                    {nesecitaDescripcion ? descripcion : null}
                                  </td>
                                  <td className="p-3 font-bold">
                                    ${formatPrice(precio)}
                                  </td>
                                  <td className="p-3 rounded-r-2xl">
                                    <div className="flex align-items-center">
                                      {
                                        neseitaImagenes &&
                                          <Imagen data={imagenes[0].imagen} style='rounded-full h-12 w-12  object-cover' />
                                      }
                                    </div>
                                  </td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              : data.categoria === 'sitio-de-interes-cultural'
                ? null
                :
                <div className='w-full lg:w-2/3'>
                  <h2 className='mt-12 text-4xl font-extrabold text-primary-100 w-auto text-center'>Ofrece</h2>
                  <div className="mt-8 lg:pl-6 flex items-center justify-center">
                    <div className="col-span-12">
                      <div className="overflow-auto lg:overflow-visible ">
                        <table className="table text-gray-400 border-separate space-y-6 text-sm" style={{borderSpacing: '0 15px'}}>
                          <thead className=" text-gray-500">
                            <tr>
                              <th className="bg-primary-900 p-3 rounded-l-2xl">nombre</th>
                              <th className="bg-primary-900 p-3 text-center">Camas</th>
                              <th className="bg-primary-900 p-3 text-center">Descripcion</th>
                              <th className="bg-primary-900 p-3 text-left">precio</th>
                              <th className="bg-primary-900 p-3 text-left rounded-r-2xl">imagenes</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              data.ofece.map((item, index) => {
                                const {nombre, precio, nesecitaDescripcion, descripcion, camas, neseitaImagenes, imagenes} = item
                                return (
                                  <tr className="bg-primary-900" key={index}>
                                    <td className="p-3 rounded-l-2xl">
                                      {nombre}
                                    </td>
                                    <td className="p-3 text-center">
                                      {
                                        camas.map((item, index) => (
                                          <p key={index}>{item.cantidad} {typeWithoutHyphen(item.type)}</p>
                                        ))
                                      }
                                    </td>
                                    <td className="p-3 text-center">
                                      {nesecitaDescripcion ? descripcion : null}
                                    </td>
                                    <td className="p-3 font-bold">
                                      ${formatPrice(precio)}
                                    </td>
                                    <td className="p-3 rounded-r-2xl">
                                      <div className="flex align-items-center">
                                        {
                                          neseitaImagenes &&
                                            <Imagen data={imagenes[0].imagen} style='rounded-full h-12 w-12  object-cover' />
                                        }
                                      </div>
                                    </td>
                                  </tr>
                                )
                              })
                            }
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>  
                </div>
          }
        </div>
        {
          data.ofeceServicios &&
            (
              <div className=''>
                <h2 className='mt-12 text-4xl font-extrabold text-primary-100 w-auto text-center'>Servicio</h2>
                <div className="mt-8 flex items-center justify-center">
                  <div className="col-span-12">
                    <div className="overflow-auto lg:overflow-visible ">
                      <table className="table text-gray-400 border-separate space-y-6 text-sm" style={{borderSpacing: '0 15px'}}>
                        <thead className=" text-gray-500">
                          <tr>
                            <th className="bg-primary-900 p-3 rounded-l-2xl">nombre</th>
                            <th className="bg-primary-900 p-3 text-center">descripcion</th>
                            <th className="bg-primary-900 p-3 text-left">precio</th>
                            <th className="bg-primary-900 p-3 text-left rounded-r-2xl">imagenes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            data.servicios.map((item, index) => {
                              const {nombre, precio, descripcion, imagenes} = item
                              return (
                                <tr className="bg-primary-900" key={index}>
                                  <td className="p-3 rounded-l-2xl">
                                    {nombre}
                                  </td>
                                  <td className="p-3 text-center">
                                    {descripcion}
                                  </td>
                                  <td className="p-3 font-bold">
                                    ${formatPrice(precio)}
                                  </td>
                                  <td className="p-3 rounded-r-2xl">
                                    <div className="flex align-items-center">
                                      <Imagen data={imagenes[0].imagen} style='rounded-full h-12 w-12  object-cover' />
                                    </div>
                                  </td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
          )
        }        
        <div className='flex flex-col justify-center items-center'>
          <h2 className='mt-12 text-4xl font-extrabold text-primary-100 w-auto text-center'>Ubicación</h2>
          <iframe src={iframeSinComillas(data.ubicacion)} className='w-full lg:w-3/4 h-96 rounded-2xl mt-12' style={{ border: 0 }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
        </div>
      </main>
    </>
  )
}