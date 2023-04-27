import Image from 'next/image'
import ButtonPrimary from '@/components/Buttons/ButtonPrimary'
import Link from 'next/link'
import Imagen from '../Components/Imagen'

export default function UserTeam({ data }) {
  // const { titulo, contenido, nesecitaUnRecurso, recurso, nesecitaUrl, url } = data

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='mt-12 text-4xl font-extrabold text-primary-100 w-auto text-center'>Equipo</h2>
      <div className='mt-12 w-4/5 text-primary-100 text-center'>
        <div className='flex justify-center items-center'>
          <div className='flex flex-wrap justify-center items-center'>
            {
              data.usuarios.map((usuario, index) => {
                return(
                  <div className="flex items-center justify-center m-2" key={index}>
                    <div className="bg-primary-900 font-semibold text-center rounded-3xl shadow-lg p-10 max-w-xs">
                      <Imagen data={usuario.usuario.photo}  style={"mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"}/>
                      <h1 className="text-lg text-primary-700">{usuario.usuario.nombre} { usuario.usuario.apellidos}</h1>
                      <h3 className="text-sm text-primary-200 ">{usuario.cargo}</h3>
                      <p className="text-xs text-primary-200 mt-4">{usuario.descripcion}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}