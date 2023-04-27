import Carousel from "../Components/TourOperadora/Carousel";

export default function Gallery({ data, width, height }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='mt-12 text-4xl font-extrabold text-primary-100 w-auto text-center'>Galeria</h2>
      <Carousel data={data} width={width} height={height}/>
    </div>
  )
}