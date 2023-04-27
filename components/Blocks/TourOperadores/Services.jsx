import ListToursOperators from '../Components/listTourOperators'

export default function Services({ data, origen }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='mt-12 text-4xl font-extrabold text-primary-100 w-auto text-center'>Nuestros servicios</h2>
      
        <section className="mt-12 text-gray-600 body-font w-3/4">
          <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-wrap -m-4">
              {
              data.servicio.map((doc, index) => (
                <ListToursOperators data={doc} origen={origen} type={'servicio'} key={index}/>
                ))
              }
            </div>
          </div>
        </section>
    </div>
  )
}