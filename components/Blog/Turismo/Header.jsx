import Image from 'next/image'
import image05 from '@/public/image05.jpg'
import image06 from '@/public/image06.jpg'
import image07 from '@/public/image07.jpg'
import recurso08 from '@/public/Recurso08.svg'

export default function HeaderTurismo () {
  return (
    <header className='flex w-full px-28 h-screen justify-center items-center'>
      <div className='flex relative justify-center items-center flex-col'>
        <div className='transform w-1/3 rotate-12 translate-x-64 translate-y-16'>
          <Image className='object-cover rounded-2xl' src={image05} alt='hols' />
        </div>
        <div className='absolute w-full h-screen p-16 transform translate-x-0 translate-y-0 rotate-0'>
          <Image className='object-contain w-full h-full' src={recurso08} alt='juliana cortes' />
        </div>
        <div className='transform w-1/3 -rotate-12'>
          <Image className='object-cover rounded-2xl' src={image06} alt='hols' />
        </div>
        <div className='transform w-1/3 rotate-12 -translate-x-64 -translate-y-16'>
          <Image className='object-cover rounded-2xl' src={image07} alt='hols' />
        </div>
      </div>
      <h1 className='text-7xl absolute font-titulo font-extrabold text-primary-100'>Turismo</h1>
    </header>
  )
}
