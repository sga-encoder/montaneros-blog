
export default function DescriptionLong({ data }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='mt-12 text-4xl font-extrabold text-primary-100 w-auto text-center'>Descripción</h2>
      <div className='mt-12 w-3/4 h-auto text-primary-100 text-center sm:h-64 xl:h-80 2xl:h-96'>{data.descripcion}</div>
    </div>
  )
}
    
  