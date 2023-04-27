import RichText from "@/components/Blocks/Components/RichText/RichText"
import Imagen from "@/components/Blocks/Components/Imagen"
import { BsFillCalendarDateFill } from "react-icons/bs"
import { catchApi } from '@/api/payload'


export default async function Blog({ params }) {
  const data = await catchApi({path: '/api/blog', id, draft: true})
  const { titulo, imagen, contenidoDelBlog, autor, updatedAt } = data
  // formatear fecha
  const date = new Date(updatedAt)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  const fecha = date.toLocaleDateString('es-ES', options)
  const time = `${fecha}`
  return (
    <>
      <header className="py-20 mx-44 h-screen">
        <div className="relative h-full">
          <div className="w-full h-full">
            <Imagen data={imagen} style={"object-cover w-full h-full rounded-2xl"}/>
          </div>
          <h1 className="text-4xl font-titulo font-black text-primary-100 absolute bottom-8 right-12 capitalize">{titulo}</h1>
          <div className=" flex absolute items-center bottom-8 left-12">
            <div>
              <Imagen data={autor.photo} style={"w-12 h-12 rounded-full"} />
            </div>
            <p className="text-primary-100 text-base ml-2 capitalize">{autor.nombre} {autor.apellidos}</p>
          </div>
          <div className="flex items-center absolute top-8 right-12">
            <BsFillCalendarDateFill  className="text-primary-100" />
            <p className="text-primary-100 text-base ml-4">{ time }</p>
          </div>
        </div>
      </header>
      <main className="mx-60">
        <RichText data={contenidoDelBlog} />
      </main>
    </>
  )
}