import Imagen from '../Components/Imagen'

export default function List({ data }) {
  const { titulo, nesecitaUnRecurso, recurso, puntos } = data
  return (
    <section className='relative w-full h-full flex justify-center items-center mb-20'>
      {
        nesecitaUnRecurso && (
          <div className='absolute top-0 w-full h-full mt-20 lg:p-36 lg:mt-0'>
            <Imagen data={recurso.recurso} style='object-contain w-auto h-full' />
          </div>
        )
      }
      <article className=''>
        <h2 className='text-4xl mb-6 font-titulo font-semibold text-primary-100 text-center'>{titulo}</h2>
        <div className='flex justify-center items-center flex-col'>
          {
            puntos.map(({ numero, contenido, ilustracion, invertido, nesecitaIlustracion}) => (
              invertido ? 
                <div className={ilustracion.nesecitaTranslate ? `grid grid-cols-3 transform ${ilustracion.rotate} ${ilustracion.translateX} ${ilustracion.translateY}` : 'grid grid-cols-3 transform'} key={numero}>
                  <span className='flex justify-center items-center text-blue-500 text-9xl font-titulo'>{ numero }</span>
                  <p className='flex justify-center items-center text-primary-100 text-center'>{contenido}</p>
                  {
                    nesecitaIlustracion ?
                      <div className='flex justify-center items-center'>
                        <Imagen data={ilustracion.ilustracion} style='' />
                      </div>
                      : null
                  }
                </div>
                :
                <div className={ilustracion.nesecitaTranslate ? `grid grid-cols-3 transform ${ilustracion.rotate} ${ilustracion.translateX} ${ilustracion.translateY}` : 'grid grid-cols-3 transform'}>
                  {
                    nesecitaIlustracion ?
                      <div className='flex justify-center items-center'>
                        <Imagen data={ilustracion.ilustracion} style='' />
                      </div>
                      : null
                  }
                  <p className='flex justify-center items-center text-primary-100 text-center'>{ contenido }</p>
                  <span className='flex justify-center items-center text-blue-500 text-9xl font-titulo'>{ numero }</span>
                </div>
            ))
          }
        </div>
      </article>
    </section>
  )
}
