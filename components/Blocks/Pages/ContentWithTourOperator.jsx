import ListToursOperators from '../Components/listTourOperators'
import ContentWithImages from './ContentWithImages'

export default function ContentWithTourOperator({ data }) {
  const { tourOperadoras, tipoDeContenido } = data

  return (
    <section className='mt-12'>
      <ContentWithImages data={tipoDeContenido[0]}/>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap">
            {
              tourOperadoras.map((tourOperator, index) =>{
                console.log(tourOperator)
                return(
                  <ListToursOperators data={tourOperator.tourOperadora} type='tour-operadora' key={index} />
                )
              })
            }
          </div>
        </div>
      </section>
    </section>
  )
}
