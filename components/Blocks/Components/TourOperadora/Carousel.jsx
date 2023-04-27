'use client'
import Imagen from '../Imagen'
import { Carousel as FlowbiteCarousel } from 'flowbite-react'

export default function Carousel({ data, width, height }) {
  return (
    <div className={`mt-12 ${width === undefined ? 'w-3/4': width} ${height === undefined ? 'h-96' : height}`}>
      <FlowbiteCarousel>
        {
          data.gallery === undefined ?
            data.map((item, index) => {
              return (
                <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white rounded-2xl ' key={index}>
                  <Imagen data={item.imagen} style='block absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 rounded-2xl' />
                </div>
              )
            })
            :
          data.galeria.map((item, index) => {
            return (
              <div className='flex h-full items-center object-cover justify-center bg-gray-400 dark:bg-gray-700 dark:text-white rounded-2xl ' key={index}>
                <Imagen data={item.imagen} style='block absolute top-1/2 left-1/2 w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 rounded-2xl' />
              </div>
            )
          })
        }
      </FlowbiteCarousel>
    </div>
  )
}
