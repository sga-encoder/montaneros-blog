import Header from '@/components/Blocks/Pages/Header'
import Content from '@/components/Blocks/Pages/Content'
import ContentWithImages from '@/components/Blocks/Pages/ContentWithImages'
import List from '@/components/Blocks/Pages/List'
import ContentWithTourOperator from '@/components/Blocks/Pages/ContentWithTourOperator'
import Search from '../Blocks/Pages/Search'
import UserTeam from '../Blocks/Pages/UserTeam'

export default function PrimaryLayout({ data }) {
  return (
    <>
      <Header data={data.encabezado} title={data.titulo} />
      <main className='flex justify-center items-center flex-row'>
        <section className='m-8 w-full lg:m-20 lg:w-4/5'>
          {
            data.contenido.secciones.map((seccion, index) => {
              if (seccion.blockType === 'contenido') {
                return (
                  <Content data={seccion} key={index} />
                )
              } else if (seccion.blockType === 'contenido-con-imagen') {
                return (
                  <ContentWithImages data={seccion} key={index} />
                )
              } else if (seccion.blockType === 'lista-con-contenido') {
                return (
                  <List data={seccion} key={index} />
                )
              } else if (seccion.blockType === 'contenido-con-tour-operadoras') {
                return (                
                  <ContentWithTourOperator data={seccion} key={index} />
                )
              } else if (seccion.blockType === 'seccion-de-busqueda') {
                return (                
                  <Search data={seccion} key={index} />
                )
              } else if (seccion.blockType === 'user-team') {
                return (                
                  <UserTeam data={seccion} key={index} />
                )
              }
            })
          }
        </section>
      </main>
    </>
  )
}