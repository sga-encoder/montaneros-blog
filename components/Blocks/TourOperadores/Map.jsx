export default function Map({ data }) {
  const iframeSinComillas = data.iframeDeLaUbicacion.replace(/['"]+/g, '')
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='mt-12 text-4xl font-extrabold text-primary-100 w-auto text-center'>Ubicación</h2>
      <iframe src={iframeSinComillas} className='w-full lg:w-3/4 h-96 rounded-2xl mt-12' style={{ border: 0 }} allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
    </div>
  )
}