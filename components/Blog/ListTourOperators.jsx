import ButtonSecondary from '@/components/Buttons/ButtonSecondary'
import Image from 'next/image'
import Link from 'next/link'

export default function ListToursOperators ({ img, title, description, url, logo }) {
  return (
    <article className='max-w-sm bg-primary-900 px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500'>
      <div className='relative'>
        <Image className='w-full h-48 object-cover rounded-xl transform scale-110' src={img} alt='hols' />
        <Image src={logo} alt='logo' className='absolute bottom-0 right-3 w-16 h-16' />
      </div>
      <h3 className='mt-4 text-primary-200 text-2xl font-bold cursor-pointer'>{title}</h3>
      <div className='my-4'>
        <p className='text-sm mb-2 text-primary-100'>
          {description}
        </p>
        <ButtonSecondary>
          <Link href={url}>
            Leer mas ...
          </Link>
        </ButtonSecondary>
      </div>
    </article>
  )
}
