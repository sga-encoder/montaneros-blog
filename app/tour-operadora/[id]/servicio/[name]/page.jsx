import Imagen from "@/components/Blocks/Components/Imagen"
import { catchApi } from "@/api/payload"
import Strava from "@/components/Blocks/Components/TourOperadora/Strava"
import Carousel from "@/components/Blocks/Components/TourOperadora/Carousel"

export default async function TourOperationServices({ params }) {
  const { id, name } = params
  const data = await catchApi({path: '/api/tour-operadora', id, draft: true})
  // filtrar data por name
  const service = data.secciones.map((doc) => {
    if (doc.blockType === 'servicios') {
      const datos = doc.servicio.filter(service => service.slug === name)
      return datos
    }
    return null
  })

  // formtear precios con moneda y punto decimal
  const formatPrice = (price) => {
    const newPrice = price.toString().split('.')
    return newPrice[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  return (
    <>
      {
        service.map((doc, index) => {
          return (
            doc !== null &&
              <main className=' py-6 px-4 sm:p-6 md:py-10 md:px-8' key={index}>
                <div className=' mt-12 max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2'>
                  <div className='lg:mx-0 relative p-7 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1'>
                    <div className='flex justify-between'>
                      <div className='flex items-start flex-col justify-center'>
                        <p className='text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400 capitalize'>{doc[0].categoria}</p>
                        <h1 className='mt-1 text-lg  font-semibold text-white sm:text-primary-100 md:text-2xl dark:sm:text-white capitalize'>{doc[0].titulo}</h1>
                      </div>
                      <div className="w-20 h-20 mr-4">
                        <Imagen data={data.logo} style='w-20 h-20 object-cover mb-0 sm:-mb-8 sm:mr-4' />
                      </div>
                    </div>
                  </div>
                  <div className='grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-1 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0'>
                    <Imagen data={doc[0].imagenes[0].imagen} style='w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full lg:h-full' />
                  </div>

                  <div className='mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4'>
                    <a href={`https://${doc[0].link}`} target='_blank' className='bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg'>Ver Web</a>
                  </div>
                  <p className='mt-4 text-sm leading-6 text-primary-100 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400'>
                    {doc[0].descripcion}

                    <div className="flex w-full justify-between">
                      <div className="flex items-center">
                        <p className="text-primary-100 font-bold text-2xl">Duracion:</p>
                        <p className="text-primary-100 ml-2 text-base mt-1">{doc[0].duracion}</p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-primary-100 font-bold text-2xl">Costo:</p>
                        <p className="text-primary-100 ml-2 text-base mt-1">${formatPrice(doc[0].precio)}</p>
                      </div>
                    </div>
                  </p>
                </div>
                <div className="flex items-center justify-center content-center flex-col md:flex-row md:items-start">
                <div className="w-full h-auto lg:w-1/3 lg:h-auto">
                  <h2 className='mt-12 text-4xl font-extrabold text-primary-100 w-auto text-center'>Galeria</h2>
                  <Carousel data={doc[0].imagenes} width='w-full' height='h-96'/>
                </div>
                <div className='w-full lg:w-2/3'>
                  <h2 className='mt-12 text-4xl font-extrabold text-primary-100 w-auto text-center'>Incluye</h2>
                  <div className="mt-8 md:pl-6 flex items-center justify-center">
                    <div className="w-full">
                      <div className="overflow-auto w-full lg:overflow-visible ">
                        <table className="table text-gray-400 w-full border-separate space-y-6 text-sm" style={{borderSpacing: '0 15px'}}>
                          <thead className=" text-gray-500">
                            <tr>
                              <th className="bg-primary-900 p-3 text-center rounded-l-2xl">cantidad</th>
                              <th className="bg-primary-900 p-3 text-center rounded-r-2xl">contenido</th>
                            </tr>
                          </thead>
                          <tbody>
                            {
                              doc[0].incluye.map((item, index) => {
                                const {cantidad, contenido} = item
                                console.log(item.cantidad)
                                return (
                                  <tr className="bg-primary-900" key={index}>
                                    <td className="p-3 text-center rounded-l-2xl">
                                      {cantidad}
                                    </td>
                                    <td className="p-3 text-center rounded-r-2xl">
                                      {contenido}
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
                </div>
              </main>
            )
        })  
      } 
    </>
  )
}