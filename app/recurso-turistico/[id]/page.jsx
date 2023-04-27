import Imagen from "@/components/Blocks/Components/Imagen"
import { catchApi } from "@/api/payload"
import Carousel from "@/components/Blocks/Components/TourOperadora/Carousel"


export default async function TouristResource({ params }) {
  const { id} = params
  const data = await catchApi({path: '/api/recurso-turistico', id, draft: true})

  const typeWithoutHyphen = (text) => {
    return text.replace(/-/g, ' ')
  }

  const iframeSinComillas = text => text.replace(/['"]+/g, '')


  return (
    <>
      <main className=' py-6 px-4 sm:p-6 md:py-10 md:px-8'>
        <div className=' mt-12 max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2'>
          <div className='lg:mx-0 relative p-7 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1'>
            <div className='flex justify-between'>
              <div className='flex items-start flex-col justify-center'>
                <p className='text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400'>{typeWithoutHyphen(data.categoria)}</p>
                <h1 className='mt-1 text-lg  font-semibold text-white sm:text-primary-100 md:text-2xl dark:sm:text-white capitalize'>{data.titulo}</h1>
              </div>
            </div>
          </div>
          <div className='grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-1 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0'>
            <Imagen data={data.imagenes[0].imagen} style='w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full lg:h-full' />
          </div>
          <p className='mt-4 text-sm leading-6 text-primary-100 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400 '>
            {data.descripcion}
          </p>
        </div>
        <div className="flex items-center justify-center content-center flex-col md:flex-row md:items-start">
          <div className="w-full h-auto lg:w-3/4">
            <h2 className='mt-12 text-4xl font-extrabold text-primary-100 w-auto text-center'>Galeria</h2>
            <Carousel data={data.imagenes} width='w-full' height='h-96'/>
          </div>
        </div>   
        <div className='flex flex-col justify-center items-center'>
          <h2 className='mt-12 text-4xl font-extrabold text-primary-100 w-auto text-center'>Ubicación</h2>
          <iframe src={iframeSinComillas(data.ubicacion)} className='w-full lg:w-3/4 h-96 rounded-2xl mt-12' style={{ border: 0 }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
        </div>
      </main>
    </>
  )
}