import Imagen from '../Components/Imagen'

export default function Header({ data, title }) {
  const { imagenes, recurso, estiloDeCabecera } = data
  if (estiloDeCabecera === 'uno') {
    return (
      <header className='flex w-full px-28 h-auto justify-center items-center'>
        <div className='w-auto h-auto relative m-20 grid grid-flow-col grid-rows-2 grid-cols-3 gap-8'>
          <div className='transform scale-110 -rotate-12'>
            <Imagen data={imagenes[0].imagen} style="object-cover rounded-2xl" />
          </div>
          <div className='col-start-3 transform scale-110 rotate-6 translate-x-2 translate-y-15'>
            <Imagen data={imagenes[1].imagen} style="object-cover rounded-2xl" />
          </div>
          <div className='absolute w-full h-screen transform scale-150 lg:scale-100 translate-y-2 lg:-translate-y-10 p-8'>
            <Imagen data={recurso.recurso} style="object-contain w-full h-full" />
          </div>
          <div className='transform rotate-6 scale-110 translate-y-11'>
            <Imagen data={imagenes[2].imagen} style="object-cover rounded-2xl" />
          </div>
          <div className='transform scale-150 translate-y-24 xl:translate-y-36'>
            <Imagen data={imagenes[3].imagen} style="object-cover rounded-2xl" />
          </div>
          <div className='col-start-3 transform scale-100 -rotate-12 translate-x-2 translate-y-15'>
            <Imagen data={imagenes[4].imagen} style="object-cover rounded-2xl" />
          </div>
        </div>

        <h1 className='text-7xl absolute font-titulo font-extrabold text-primary-100 uppercase 2xl:text-9xl'>{title}</h1>
      </header>
    )
  } else if (estiloDeCabecera === 'dos') {
    return (
      <header className='flex pt-44 mb-40 w-full px-28 h-auto xl:pt-0 xl:h-screen justify-center items-center xl:-mb-64 2xl:m-0'>
        <div className='flex relative justify-center items-center xl:-mt-28 2xl:m-0'>
          <div className='transform w-1/3 rotate-12 translate-y-10'>
            <Imagen data={imagenes[0].imagen} style="object-cover rounded-2xl" />
          </div>
          <div className='absolute w-full h-screen transform p-16 translate-y-14 -rotate-12'>
            <Imagen data={recurso.recurso} style="object-contain w-full h-full" />
          </div>
          <div className='transform w-1/3 -rotate-12 -translate-y-10'>
            <Imagen data={imagenes[1].imagen} style="object-cover rounded-2xl" />
          </div>
          <div className='transform w-1/3 rotate-12 translate-y-10'>
            <Imagen data={imagenes[2].imagen} style="object-cover rounded-2xl" />
          </div>
        </div>
        <h1 className='text-7xl absolute font-titulo font-extrabold text-primary-100 uppercase xl:-mt-28 2xl:m-0'>{ title }</h1>
      </header>
    )
  } else if (estiloDeCabecera === 'tres') {
    return (
      <header className='pt-20 mb-0 flex w-full px-28 h-auto justify-center items-center'>
        <div className='flex relative justify-center items-center flex-col'>
          <div className='transform w-1/3 rotate-12 translate-x-64 translate-y-16'>
            <Imagen data={imagenes[0].imagen} style="object-cover rounded-2xl" />
          </div>
          <div className='absolute w-full h-auto p-16 transform translate-x-0 translate-y-0 rotate-0'>
            <Imagen data={recurso.recurso} style="object-contain w-full h-full" />
          </div>
          <div className='transform w-1/3 -rotate-12 -translate-y-6'>
            <Imagen data={imagenes[1].imagen} style="object-cover rounded-2xl" />
          </div>
          <div className='transform w-1/3 rotate-12 -translate-x-64 -translate-y-16'>
            <Imagen data={imagenes[2].imagen} style="object-cover rounded-2xl" />
          </div>
        </div>
        <h1 className='text-7xl absolute font-titulo font-extrabold text-primary-100 uppercase'>{title}</h1>
      </header>
    )
  }
}
