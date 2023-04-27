import Imagen from '@/components/Blocks/Components/Imagen'

export default function UploadComponent({ item }) {
  return (
    <div className='w-2/4 m-auto'>
      <Imagen data={item.value} style={"object-cover w-full h-full rounded-2xl"}/>
    </div>
  );
}