import bg01 from '@/public/bg01.jpg'
import bg02 from '@/public/bg02.jpg'
import bg03 from '@/public/bg03.jpg'
import bg04 from '@/public/bg04.jpg'
import bg05 from '@/public/bg05.jpg'
import bg06 from '@/public/bg06.jpg'
import image01 from '@/public/image01.jpg'
import image02 from '@/public/image02.jpg'
import image03 from '@/public/image03.jpg'
import logo from '@/public/logo.svg'
import ListToursOperators from '../ListTourOperators'

const tourOperators = [
  {
    img: bg01,
    title: 'Tour Operador 1',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam iusto magnam distinctio itaque mollitia odit repudiandae provident, deleniti quibusdam architecto perferendis fuga molestiae necessitatibus impedit consequuntur nisi eligendi saepe velit!',
    url: '/blog/tour-operadora/tour-operador-1',
    logo
  },
  {
    img: bg02,
    title: 'Tour Operador 2',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam iusto magnam distinctio itaque mollitia odit repudiandae provident, deleniti quibusdam architecto perferendis fuga molestiae necessitatibus impedit consequuntur nisi eligendi saepe velit!',
    url: '/blog/tour-operadora/tour-operador-2',
    logo
  },
  {
    img: bg03,
    title: 'Tour Operador 3',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam iusto magnam distinctio itaque mollitia odit repudiandae provident, deleniti quibusdam architecto perferendis fuga molestiae necessitatibus impedit consequuntur nisi eligendi saepe velit!',
    url: '/blog/tour-operadora/tour-operador-3',
    logo
  },
  {
    img: bg04,
    title: 'Tour Operador 4',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam iusto magnam distinctio itaque mollitia odit repudiandae provident, deleniti quibusdam architecto perferendis fuga molestiae necessitatibus impedit consequuntur nisi eligendi saepe velit!',
    url: '/blog/tour-operadora/tour-operador-4',
    logo
  },
  {
    img: bg05,
    title: 'Tour Operador 5',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam iusto magnam distinctio itaque mollitia odit repudiandae provident, deleniti quibusdam architecto perferendis fuga molestiae necessitatibus impedit consequuntur nisi eligendi saepe velit!',
    url: '/blog/tour-operadora/tour-operador-5',
    logo
  },
  {
    img: bg06,
    title: 'Tour Operador 6',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam iusto magnam distinctio itaque mollitia odit repudiandae provident, deleniti quibusdam architecto perferendis fuga molestiae necessitatibus impedit consequuntur nisi eligendi saepe velit!',
    url: '/blog/tour-operadora/tour-operador-6',
    logo
  },
  {
    img: image01,
    title: 'Tour Operador 7',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam iusto magnam distinctio itaque mollitia odit repudiandae provident, deleniti quibusdam architecto perferendis fuga molestiae necessitatibus impedit consequuntur nisi eligendi saepe velit!',
    url: '/blog/tour-operadora/tour-operador-7',
    logo
  },
  {
    img: image02,
    title: 'Tour Operador 8',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam iusto magnam distinctio itaque mollitia odit repudiandae provident, deleniti quibusdam architecto perferendis fuga molestiae necessitatibus impedit consequuntur nisi eligendi saepe velit!',
    url: '/blog/tour-operadora/tour-operador-8',
    logo
  },
  {
    img: image03,
    title: 'Tour Operador 9',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam iusto magnam distinctio itaque mollitia odit repudiandae provident, deleniti quibusdam architecto perferendis fuga molestiae necessitatibus impedit consequuntur nisi eligendi saepe velit!',
    url: '/blog/tour-operadora/tour-operador-9',
    logo
  }
]

export default function TourOperatorsSearch () {
  return (
    <div>
      <div className='flex items-center justify-center p-5'>
        <div className='rounded-lg bg-primary-800 p-5 w-full'>
          <div className='flex'>
            <div className='flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-primary-800 bg-primary-900 p-5'>
              <svg viewBox='0 0 20 20' aria-hidden='true' className='pointer-events-none absolute w-5 fill-gray-500 transition'>
                <path d='M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z' />
              </svg>
            </div>
            <input type='text' className='w-full bg-primary-900 pl-2 text-base font-semibold outline-0' placeholder='' id='' />
            <input type='button' value='Buscar' className='bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors' />
          </div>
        </div>
      </div>
      <section className='relative'>
        <div className='min-h-screen flex justify-center items-center py-20'>
          <div className='md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0'>
            {
              tourOperators.map((tourOperator, index) => (
                <ListToursOperators
                  key={index}
                  img={tourOperator.img}
                  title={tourOperator.title}
                  description={tourOperator.description}
                  url={tourOperator.url}
                  logo={tourOperator.logo}
                />
              ))
            }
          </div>
        </div>
      </section>
    </div>
  )
}
