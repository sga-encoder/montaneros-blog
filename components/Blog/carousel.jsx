'use client'

import Image from 'next/image'
import { Carousel } from 'flowbite-react'

export default function CarouselSection () {
  return (

    <div className='mt-12 w-3/4 h-96 sm:h-64 xl:h-80 2xl:h-96'>
      <Carousel>
        <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white rounded-2xl '>
          <Image
            src='https://flowbite.com/docs/images/carousel/carousel-1.svg'
            width={500}
            height={200}
            className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-2xl'
            alt='...'
          />
        </div>
        <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
          <Image
            src='https://flowbite.com/docs/images/carousel/carousel-2.svg'
            width={500}
            height={200}
            className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-2xl'
            alt='...'
          />
        </div>
        <div className='flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white'>
          <Image
            src='https://flowbite.com/docs/images/carousel/carousel-3.svg'
            width={500}
            height={200}
            className='block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 rounded-2xl'
            alt='...'
          />
        </div>
      </Carousel>
    </div>
  )
}
