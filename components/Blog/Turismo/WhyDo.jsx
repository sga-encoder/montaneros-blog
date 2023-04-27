import Image from 'next/image'
import image01 from '@/public/image01.jpg'

export default function WhyDoTurismo () {
  return (
    <article className='flex justify-end items-center relative'>
      <div className='bg-primary-900 absolute w-2/3 p-8 rounded-2xl left-0'>
        <h2 className='text-4xl mb-6 font-titulo font-black text-primary-100'>porque hacer turismo en villamaria</h2>
        <p className='text-primary-100'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero praesentium minus eius explicabo accusamus sunt quam voluptate inventore dolore omnis commodi unde quasi illo dolorem nesciunt, veritatis nemo hic tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum at, voluptate nulla saepe praesentium dignissimos cupiditate incidunt explicabo pariatur earum aliquam error nemo itaque! Veritatis aperiam placeat vitae ipsa est.
        </p>
      </div>
      <figure className='w-2/3'>
        <Image className='rounded-2xl' src={image01} alt='hols' />
      </figure>
    </article>
  )
}
